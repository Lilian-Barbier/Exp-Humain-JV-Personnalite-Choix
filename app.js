const express = require('express')
const path = require('path')
const fs = require('fs');
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/html/index.html');
})

app.post('/response', (req, res) => {
    console.log(req.body);

    try {
        // Extraction des données
        const { userResponses, choices, cooperativeName } = req.body;
        
        // Formatage des choix au format demandé: "[round1]:[choix1];[round2]:[choix2];..."
        let choicesFormatted = choices.map(choice => 
            `${choice.choice};${choice.sendCollectible ? 1 : choice.dontSendCollectible ? 2 : 3}`
        ).join(';');
        
        // Formatage des réponses utilisateur
        let responsesFormatted = userResponses.map(resp => {
            // Échapper les virgules dans les réponses textuelles
            let responseValue = resp.type === "text" ? 
                `"${(resp.response || '').replace(/"/g, '""')}"` : // Format CSV pour text
                resp.response;
                
            return responseValue;
        }).join(';');

        // //création de la premiere ligne : 
        // // Formatage des choix au format demandé: "[round1]:[choix1];[round2]:[choix2];..."
        // let choicesFormatted = choices.map(choice => 
        //     `Manche ${choice.round}; Choix du collectible ${choice.round}`
        // ).join(';');
        
        // // Formatage des réponses utilisateur
        // let responsesFormatted = userResponses.map(resp => `Question ${resp.id}`).join(';');
        
        // Construction de la ligne CSV
        const csvLine = `${cooperativeName};${choicesFormatted};${responsesFormatted}\n`;
        
        // Vérifier si le fichier existe déjà pour ajouter ou non les en-têtes
        const filePath = 'responses.csv';
        const fileExists = fs.existsSync(filePath);
        
        if (!fileExists) {
            // Création des en-têtes si le fichier n'existe pas
            // Déterminer les en-têtes des choix
            const choicesHeaders = choices.map(c => `Round${c.round}`).join(',');
            
            // Déterminer les en-têtes des réponses
            const responsesHeaders = userResponses.map(r => 
                `"${r.question.replace(/"/g, '""')}"`
            ).join(',');
            
            // Écrire la ligne d'en-tête
            fs.writeFileSync(filePath, `Choix,${responsesHeaders}\n`);
        }
        
        // Ajouter la nouvelle ligne de données
        fs.appendFile(filePath, csvLine, (err) => {
            if (err) {
                console.error('Error writing to CSV file', err);
                return res.status(500).json({ error: 'Failed to save data' });
            }
            
            res.status(200).json({ message: 'Data saved successfully' });
        });
        
    } catch (error) {
        console.error('Error processing data', error);
        res.status(500).json({ error: 'Failed to process data' });
    }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

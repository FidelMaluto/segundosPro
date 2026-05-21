const fs = require('fs');
const path = require('path');

async function translateaudio(audioFilePath, test) {
    try{
        if(!fs.existsSync(audioFilePath)){
            throw new error('O arquivo de áudio não existe!');
        }

        const audioFile = fs.readFileSync(audioFilePath);
        const formData = new FormData();
        const blob = new Blob([audioFile]);

        formData.append('file', blob, path.basename(audioFilePath));
        formData.append('model', 'whisper-1');

        const response = await fetch('https://api.openai.com/v1/audio/transcriptions', {
            method: 'POST',
            headers:{
                Authorization: `Bearer ${test}`
            },
            body: formData
        });

        if(!response.ok){
            const errorData = await response.json();
            throw new Error(`Erro na API ${JSON.stringify(errorData)}`);
        }

        const data = await response.json();
        const transcription = data.text;
        
        const outputFilePath = path.join(path.dirname(audioFilePath), `${path.basename(audioFilePath, 
            path.extname(audioFilePath))}_transcription.txt`);

        fs.writeFileSync(outputFilePath, transcription);
        console.log(`Trascrição guardada em: ${outputFilePath}`);
        return transcription;
        
    } catch (error){
        console.error('Erro durante a transcrição!', error.message);
        throw error;
    }
}

const audioPath = './sacra.mp3';
const openaiKey = process.env.OPENAI_API_KEY

translateaudio(audioPath, openaiKey)
.then(transcription =>{
    console.log('Transcrição feita com êxito.');
    console.log(transcription);
})
.catch(error =>{
    console.error('A transcrição falhou!', error);
})

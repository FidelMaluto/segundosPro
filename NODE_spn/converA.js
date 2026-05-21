import { pipeline } from "@xenova/transformers";

// Carrega o modelo de transcrição Whisper
const transcriber = await pipeline("automatic-speech-recognition", "Xenova/whisper-small");

const result = await transcriber("./sacra.mp3", { chunk_length_s: 30 });
console.log("Transcrição:", result.text);

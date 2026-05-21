const transcribe = require("whisper-node");
const fs = require("fs");

async function main() {
  const result = await transcribe({
    filePath: "sacra.mp3", // teu ficheiro de áudio
    model: "base", // pode ser tiny, base, small, medium, large
    language: "pt", // português
  });

  console.log("Transcrição:", result.text);
}

main();

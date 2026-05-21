// Trocando de botão quando for inserido algum texto no input!
  function toggleB(){
    const input = document.getElementById("messageField");
    const micB = document.getElementById("micB");
    const sendB = document.getElementById("sendB");

    // Condição: se tiver algo digitado no input, o botão alyera para um avião!
    if(input.value.trim() === ""){
        micB.style.display= 'inline';
        sendB.style.display= 'none';

        // Condição: senão tiver nada digitado no input, o botão não troca!
    }else{
        micB.style.display= 'none';
        sendB.style.display= 'inline';
    };
};


/*
// Trocando de botão quando for inserido algum texto no input!
function toggleB(){
    const input = document.getElementById("messageField").value;
    const micB = document.getElementById("micB");
    const sendB = document.getElementById("sendB");

    // Condição: se tiver algo digitado no input, o botão alyera para um avião!
    if(input.value.trim() === " "){
        micB.style.display= 'inline';
        sendB.style.display= 'none';

        // Condição: senão tiver nada digitado no input, o botão não troca!
    }else{
        micB.style.display= 'none';
        sendB.style.display= 'inline';
    };
};
*/

// Função para mostrar a mensagem na tela!
     /*function sendB(){
  const micB = document.getElementById("micB");
  const sendB = document.getElementById("sendB");
  
  micB.style.display= 'none';
  sendB.style.display= 'inline';
          // Busca o valor da área de texto!
          const message = document.getElementById('messageField').value;
          // Cria uma elemento!
          const nav = document.createElement('nav');
          nav.id = "imageNav";
          // Escreve a mensagem no elemento criado, depois de clicar no botão!
          nav.innerHTML = message;
          // Condição, se a área de texto vazia, não acontece nada!
          if(message == ""){
               // Retorna a função!
               return(sendB);
               // Condição, se a área de texto não estiver vazia, envia a mesagem!
          } else {
               // Buscando o campo em que aparecem as mensagens!
               document.getElementById('bate-papo').appendChild(nav);
               // Esvaziando a área de texto, depois de a mensagem já ter sido enviada!
               document.getElementById('messageField').value = "";
          }
     }
          */

  const socket = io();

  function sendB(){
    const message = document.getElementById('messageField').value;
    if(message !== ""){
      socket.emit('chatMessage', message);
      document.getElementById('messageField').value = "";
    };
  };
  socket.on('chatMessage', (msg) => {
    const nav = document.createElement('nav');
    nav.innerHTML = msg;
    document.getElementById('bate-papo').appendChild(nav);

    const micB = document.getElementById("micB");
    const sendB = document.getElementById("sendB");

    micB.style.display= 'inline';
    sendB.style.display= 'none';
  });

    //  Enviando Imagem!
    // Indo buscar o valor do input(type = "file")!
   const input = document.getElementById('imgUpload');
   input.addEventListener('change', () => {
    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = function () {
      const base64 = reader.result;
      socket.emit('sendImage', base64);
    };
    if(file) reader.readAsDataURL(file);
   });
   socket.on('receiveImage', (imgData) => {
      const img = document.createElement('nav');img.id = "imgNav";

      img.innerHTML = `<img src = "${imgData}" id = "imageSended" onclick="openImage()"
      onbdlclick="closeImage()">`;
      img.style.maxWidth = "22vh";
      document.getElementById('bate-papo').appendChild(img);
   });
   
// 

/*
function openImage(){
    imageSended.style.width = "240vh";
    imageSended.style.height = "45vh";
    imgNav.style.width = "20vh";
    imgNav.style.height = "25vh";
};

// Função para diminuir a Imagem, após ela ser aumentada!
function closeImage(){
    imageSended.style.width = "20vh";
    imageSended.style.height = "25vh";
    img.style.width = "20vh";
    img.style.height = "25vh";
};
*/

// Enviar áudio!
const MicB = document.getElementById('micB');
const SendB = document.getElementById('sendB');
let mediaRecorder;
let audioChunks = [];

const audioContainer = document.createElement('nav');

MicB.onclick = async () => {
    const micB = document.getElementById("micB");
    const sendB = document.getElementById("sendB");

    micB.style.display = 'none';
    sendB.style.display = 'inline';

    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorder = new MediaRecorder(stream);
    audioChunks = [];

    mediaRecorder.ondataavailable = e => audioChunks.push(e.data);

   mediaRecorder.onstop = () => {
      const blod = new Blob(audioChunks, { type: 'audio/webm' });
      const audioURL = URL.createObjectURL(blod);
      const audio = document.createElement('audio');
      audio.controls = true;
      audio.src = audioURL;

      const audioContainer = document.createElement('nav'); // CRIAR novo a cada vez
      audioContainer.appendChild(audio);
      document.getElementById('bate-papo').appendChild(audioContainer);

      // Enviar com socket...
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Audio = reader.result;
        socket.emit('audio', base64Audio);
      };
      reader.readAsDataURL(blod);
  };

    mediaRecorder.start();
    MicB.disabled = true;
    SendB.disabled = false;
};

SendB.ondblclick = () => {
    const micB = document.getElementById("micB");
    const sendB = document.getElementById("sendB");

    micB.style.display = 'inline';
    sendB.style.display = 'none';

    mediaRecorder.stop();
    MicB.disabled = false;
    SendB.disabled = true;
};

// Receber áudio enviado por outro usuário
socket.on('audio', (base64Audio) => {
    const audio = document.createElement('audio');
    audio.controls = true;
    audio.src = base64Audio;

    const receivedAudioContainer = document.createElement('nav');
    receivedAudioContainer.appendChild(audio);
    document.getElementById('bate-papo').appendChild(receivedAudioContainer);
});


// Modo escuro!
function modo(){
  document.getElementById('bd').style.transition="1.5s";
  document.getElementById('bd').style.background="#222";
};
function alterModo(){
  document.getElementById('bd').style.transition="1.5s";
  document.getElementById('bd').style.background="";
  document.getElementById('bate-papo').style.boxShadow="0 4px 8px #ddd";
};

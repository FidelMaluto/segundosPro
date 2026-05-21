function sendMessage(){
    const remetente = document.getElementById('remetente').value;
    const destinatario = document.getElementById('destinatario').value;
    const texto = document.getElementById('mensagem').value;

    fetch('http//localhost:3000/mensagens', {
        method:'POST',
        headers:{ 
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            remetente,destinatario,texto
        })

        .then(res => res.json())
        .then(data => {
            document.getElementById('resposta').innerText = data.mensagem;
        })

        .catch(err =>{
            document.getElementById('resposta').innerText = 'Erro ao enviar.';
            console.log(err);
        })
    });

}
 const lista = document.getElementById('lista');
                 dados.forEach(tarefa => {
                     const li = document.createElement('li');
                     li.textContent = tarefa.id;
                     lista.appendChild(li)
                 })
                 console.error("Erro ao concumir API: ", err);

                 async function consumirAPI() {
             const consu = await fetch(url);
            
              if(consu.status === 200){
                      const obj = await consu.json();
                     // document.write(obj);

              }

             const content = consu.headers.get("content-type");

             if(content && content.includes("application/json")){
                 const data = await consu.json();
                 console.log(data);
             } else {
                 const text = await consu.text();
                 console.log("Resposta não é JSON! ", text)
             }

             //document.write(await consu.text());
         }

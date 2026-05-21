const url = "http://localhost:3300/task";

async function consumirAPI() {
    const aws = await fetch(url);

    if(aws.status === 200){
        const result = await aws.json();

        console.log(result);
    }

}

consumirAPI();

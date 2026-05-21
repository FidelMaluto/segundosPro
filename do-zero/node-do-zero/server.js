import { createServer } from 'node:http'

const server = createServer((req, res) =>{
    res.write("Ola Mngo.")

    return res.end();
});

server.listen(3303);
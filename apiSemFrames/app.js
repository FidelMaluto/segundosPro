// app.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<div style="text-align:center; margin-left:14rem; margin-top:5rem; border:.5px solid blue; width:310px;"><h2 style="color: blue;">Login</h2> <input type="email" style="border: .5px solid blue; placeHolder:gkhsd;"><br><br> <input type="password" style="border: .5px solid blue;"><br><br> <button style="background-color: blue; cursor:pointer; color:#fff; margin-bottom:15px; width:163px; border:none;">Entrar</button></div>');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor Express a correr em http://localhost:${PORT}`);
});

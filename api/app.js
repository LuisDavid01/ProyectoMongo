const express = require('express');

const app = express();

const PORT = process.env.PORT ?? 7000; // valor por defecto del puerto es 5000
app.listen(PORT, () => console.log('El servidor esta corriendo en el puerto: ', PORT));
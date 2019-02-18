const http = require('http'); //Подключаем модуль http
const port = 3000;
const server = http.createServer((req, res) => { //Создаем сервер
  res.end('For all facken users git hub !'); //Если кто то подключился отвечаем
  console.log(req.method, req.url);
}).listen(3000); //Слушаем порт 3000
console.log('Сервер работает на порте ' + port); 
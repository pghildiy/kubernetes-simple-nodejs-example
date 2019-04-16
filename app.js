const express = require("express")

const app = express()

app.get("/health", (request, response, next) => {
  response.status(200)
})

app.get("/slow", (request, response, next) => {
  for (let i = 1; i < 5000000000; i++) {}
  // response.status(200).send("Slow!!!")
  response.status(200).send(`Slow!!! ${process.env.MY_SECRET}\n`)
})

app.get("/fast", (request, response, next) => {
  for (let i = 1; i < 1000000000; i++) {}
  // response.status(200).send("Fast!!!")
  response.status(200).send(`Fast!!! ${process.env.MY_SECRET}\n`)
})

setInterval(function(str1, str2) {
  console.log(str1 + " " + str2 + " "+makeid(10));
}, 800, "Hello.", "How are you?");

function makeid(length) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

app.listen(8080)

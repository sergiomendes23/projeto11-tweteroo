import express from "express";
import cors from "cors";

const server = express();
server.use = (cors());

const usuario = [
    {
	username: 'bobesponja', 
	avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info" 
    }
];

const tweet = [
    {
        username: "bobesponja",
      tweet: "eu amo o hub"
    }
];

server.get('/sign-up', function (request, response) {
    response.send(usuario);
})

server.get('/tweets', function (request, response) {
    response.send(tweet);
})

server.listen(5000);
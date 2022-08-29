import express from 'express';
import cors from 'cors';

const server = express();
server.use(cors());
server.use(express.json());


const usuarios = [];

const tweet = [];


server.post('/sign-up', function (req, res) {
    const novoUsuario = req.body;

    usuarios.push(novoUsuario);

    res.send('OK');
})

server.post('/tweets', function (req, res) {
    const novoTweet = req.body;

    const usuarioAtual = usuarios.find(usuario => novoTweet.username === usuario.username)

    const tweetAvatar = {...novoTweet, 'avatar' : usuarioAtual.avatar};

    tweet.unshift(tweetAvatar);

    res.send('OK');
})

server.get('/tweets', function (req, res) {
    
    const dezTweets = tweet.slice(0, 10);

    res.send(dezTweets);
})

server.listen(5000);
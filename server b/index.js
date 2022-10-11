const express = require('express')
const app = express();
const port = process.env.PORT || 3001;
var nodeFetch = require('node-fetch')
app.use(express.json())

let listaProdutos = [
    {
        'nome': 'martelo',
        'preco': 123
    }
]

app.listen(port,()=>{
    console.log(`App listen on http://localhost: B ${port}`);
})

app.get('/', (req, res) => {
    res.send('ok')
})

app.get('/resgatar_usuario', (req, res) => {
    
    res.send('serverb')
    // res.send(listaUsuarios)
})

app.get('/buscar_produtos', (req, res) => {
    res.send(listaProdutos)
})

app.post('/cadastrarProduto', async (req, res) => {
    let response = false
    const url = `http://localhost:3000/resgatar_usuario/${req.body.user}/${req.body.password}`;
    // let result = nodeFetch(url)
    // console.log(result)
    // res.json(result)
    nodeFetch(url)
    .then(res => res.text())
    .then( text => {
    if(text){
        listaProdutos.push({
            'nome': req.body.nome,
            'preco': req.body.preco
        })
        res.send(listaProdutos);
    }else{
        res.send('deu pt')
    }
    });
    
})



// docker network ls
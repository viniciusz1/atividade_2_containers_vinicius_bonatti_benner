const express = require('express')
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json())

let listaUsuarios = [
    {
        'user': 'cleber',
        'password': 'cleber'
    }
]


app.get('/buscar_usuarios', (req, res) => {
    res.send(listaUsuarios)
})

app.get('/resgatar_usuario/:usuario/:senha', (req, res) => {
    const user = listaUsuarios.find(e => e['user'] == req.params.usuario && e['password'] == req.params.senha)
    user ? res.json(true) : res.json(false)
})


app.post('/cadastrar_usuario', (req, res) => {
    console.log(req.body)
    listaUsuarios.push({
        'user': req.body.user,
        'password': req.body.password
    })
    res.send('usuario cadastrado')
})

app.listen(port, () => {
    console.log(`App listen on http://localhost: A ${port}`);
})
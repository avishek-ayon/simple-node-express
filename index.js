const express = require('express');
var cors = require('cors');
const app = express();

const port = 5000;

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World! I am node reside');
})

const users = [
    { id: 0, name: "sabana", email: "sabana@gamil.com", mobile: "01524543333" },
    { id: 1, name: "sohana", email: "sohana@gamil.com", mobile: "015255988" },
    { id: 2, name: "bedona", email: "bedona@gamil.com", mobile: "0152338975" },
    { id: 3, name: "sokina", email: "sokina@gamil.com", mobile: "015233897" }
]

app.get('/users', (req, res) => {
    const search = req.query.search;

    // use search query parameter
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users);

    }
});

//app.method
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log("hitting the post", req.body);
    // res.send(JSON.stringify(newUser));
    res.json(newUser);
})

// dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})
const express = require('express');
const {body, validationResult} = require('express-validator');
const app = express();
const port = 3000;

const users = [ 
    { id: 1, name: 'John Doe' }, 
    { id: 2, name: 'Jane Smith' }, 
    { id: 3, name: 'Emily Johnson' } 
];

app.use(express.json());

app.get('/', (req, res) => {
    res.send({
        "message": "Hello world!"
    });
});

app.get('/users', (req, res) => {
    res.send(users);
});

app.post('/user',[
    body('name').isString().notEmpty().withMessage("name is required field")
], (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({"error": errors.array});
    }

    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.status(201).json(newUser);
});

app.listen(port, () => {
    console.log(`app is running on port ${port}`);
})
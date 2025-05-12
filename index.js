const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hlw Developer')
});
const users = [
    { id: 1, name: 'Sabana', email: 'sabana@gmail.com' },
    { id: 2, name: 'Sabnoor', email: 'Sabnoor@gmail.com' },
    { id: 3, name: 'Sabila', email: 'sabila@gmail.com' },
];
app.get('/users', (req, res) => {
    res.send(users)
} )

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
})
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Conectar ao MongoDB
mongoose.connect('mongodb://localhost:27017/agenda-inteligente', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Definir modelo de dados
const EventSchema = new mongoose.Schema({
    title: String,
    date: Date,
    category: String,
    status: String
});

const Event = mongoose.model('Event', EventSchema);

// Endpoints da API
app.use(express.json());

// Adicionar novo evento
app.post('/events', async (req, res) => {
    const event = new Event(req.body);
    await event.save();
    res.send(event);
});

// Obter todos os eventos
app.get('/events', async (req, res) => {
    const events = await Event.find();
    res.send(events);
});

// Inicializar servidor
app.listen(3000, () => console.log('Servidor iniciado na porta 3000'));

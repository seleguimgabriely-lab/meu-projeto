const express = require('express');
const app = express();

app.use(express.json());

// Lista de usuários (exemplo temporário)
let usuarios = [
  { id: 1, nome: 'Gabi' },
  { id: 2, nome: 'Anny' }
];

// Rota GET (listar todos os usuários)
app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});

// Rota GET dinâmica (buscar por ID)
app.get('/usuarios/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const usuario = usuarios.find(u => u.id === id);
  if (!usuario) return res.status(404).json({ erro: 'Usuário não encontrado' });
  res.json(usuario);
});

// Rota POST (criar novo usuário)
app.post('/usuarios', (req, res) => {
  const novoUsuario = {
    id: usuarios.length + 1,
    nome: req.body.nome
  };
  usuarios.push(novoUsuario);
  res.status(201).json({ mensagem: 'Usuário criado com sucesso!', usuario: novoUsuario });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

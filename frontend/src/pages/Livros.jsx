// src/pages/Livros.jsx
import React, { useEffect, useState } from 'react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';
import axios from 'axios';

export default function Livros() {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/livros/')
      .then(response => {
        setLivros(response.data);
      })
      .catch(error => {
        console.error('Erro ao carregar livros:', error);
      });
  }, []);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Lista de Livros
      </Typography>
      <List>
        {livros.map((livro) => (
          <ListItem key={livro.id}>
            <ListItemText primary={livro.titulo} secondary={livro.autor} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

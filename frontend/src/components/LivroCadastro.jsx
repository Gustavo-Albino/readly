// src/components/LivroCadastro.js
import React, { useState } from 'react';
import { TextField, Button, Stack } from '@mui/material';

const LivroCadastro = () => {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ titulo, autor, descricao });
    // aqui vai o fetch/axios para salvar no backend
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2}>
        <TextField
          label="Título"
          variant="outlined"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          fullWidth
        />
        <TextField
          label="Autor"
          variant="outlined"
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
          fullWidth
        />
        <TextField
          label="Descrição"
          variant="outlined"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          multiline
          rows={4}
          fullWidth
        />
        <Button variant="contained" color="primary" type="submit">
          Cadastrar Livro
        </Button>
      </Stack>
    </form>
  );
};

export default LivroCadastro;

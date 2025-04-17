import React from 'react';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import BotaoCadastrarLivro from '../components/BotaoCadastrarLivro';

export default function Home() {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Página Inicial
      </Typography>
      <Typography>
        Bem-vindo à Readly! Aqui você pode gerenciar e visualizar livros cadastrados.
      </Typography>
      <Link to="/cadastrar-livro" style={{ textDecoration: 'none' }}>
        <BotaoCadastrarLivro />
      </Link>
    </div>
  );
}

import React from 'react';
import { Typography } from '@mui/material';

export default function Home() {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Página Inicial
      </Typography>
      <Typography>
        Bem-vindo à Readly! Aqui você pode gerenciar e visualizar livros cadastrados.
      </Typography>
    </div>
  );
}

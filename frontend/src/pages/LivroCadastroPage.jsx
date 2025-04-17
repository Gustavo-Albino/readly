// src/pages/LivroCadastroPage.js
import React from 'react';
import LivroCadastro from '../components/LivroCadastro';
import { Container, Typography, Paper, Box } from '@mui/material';

const LivroCadastroPage = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom align="center">
          Cadastro de Livro
        </Typography>
        <Box mt={2}>
          <LivroCadastro />
        </Box>
      </Paper>
    </Container>
  );
};

export default LivroCadastroPage;

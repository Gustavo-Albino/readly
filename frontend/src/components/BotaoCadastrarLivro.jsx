import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const BotaoCadastrarLivro = () => {
  return (
    <Link to="/cadastrar-livro" style={{ textDecoration: 'none' }}>
      <Button
        variant="contained"
        color="secondary"
        startIcon={<AddIcon />}
        sx={{
          margin: '20px auto',
          px: 3,
          py: 1.5,
          borderRadius: '12px',
          textTransform: 'none',
          fontSize: '1rem',
          fontWeight: 'bold',
          boxShadow: 3,
          transition: '0.3s',
          '&:hover': {
            boxShadow: 6,
            backgroundColor: '#ab47bc',
          },
        }}
      >
        Cadastrar novo livro
      </Button>
    </Link>
  );
};

export default BotaoCadastrarLivro;

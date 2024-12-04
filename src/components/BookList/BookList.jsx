import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import BasicCard from '../BasicCard/BasicCard';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

function BookList() {
    const navigate = useNavigate();
    const [books, setBooks] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:3001/books')
        .then((response) => {
            setBooks(response.data);
            console.log(response.data);
            setLoading(false);
        })
        .catch((error) =>{
            console.log(error);
        });
    }, []);

    const handleNavigate = (id) => {
        navigate(`/books/${id}`);
    };

    const updateBook = (updatedBook) => {
      setBook((prevBook) =>
          prevBook.map((book) =>
              book.id === updatedBook.id ? updatedBook : book
          )
      );
    };

    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} rowSpacing={1} size={16}>
            {isLoading ?
                (<p>Loading...</p>
                ) : (
                  books.map((book) => (
                    <Grid size={2} key={book.id}>
                      <Item>
                        <BasicCard key={book.id} {...book} handleNavigate={handleNavigate}
                        updateBook={updateBook}/>
                      </Item>
                    </Grid>
                  ))
                )
            }
        </Grid>
      </Box>
    );
};

export default BookList;
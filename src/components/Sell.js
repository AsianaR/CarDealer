import React, { useState } from 'react';
import { Box, Button, Container, MenuItem, Select, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';

export const Sell = () => {
    const [car, setCar] = useState({})
  return (
    <>
    <Typography variant='h3'>Add car</Typography>
    <Container sx={{ display: 'flex', flexDirection: 'column', width: '450px'}}>
        <StyledSelect variant="filled" label="Brand">
            <MenuItem value={'Porsche'}>Porsche</MenuItem>
        </StyledSelect>


        <StyledSelect variant="filled" label="Model">
            <MenuItem value={'911 Turbo S'}>911 Turbo S</MenuItem>
        </StyledSelect>



        <StyledTextField variant="filled" label="Catchphrase"/>

        <StyledTextField variant="filled" label="Description"/>

        <StyledTextField variant="filled" label="Release year"/>

        <StyledTextField variant="filled" label="Speed"/>

        <StyledTextField variant="filled" label="Horse power"/>

        <StyledTextField variant="filled" label="0-100 time"/>

        <StyledTextField variant="filled" label="Price"/>

        <Button variant="filled" sx={{ marginY: '50px'}}>Confirm</Button>

    </Container>
    </>
  )
}

const StyledSelect = styled(Select)({
    marginTop: '30px',
    backgroundColor: '#171719',
})

const StyledTextField = styled(TextField)({
    marginTop: '30px',
    backgroundColor: '#171719',
})
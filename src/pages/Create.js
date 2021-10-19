import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import ButtonGroup from '@mui/material/ButtonGroup';
import Container from '@mui/material/Container';

export default function Create() {
  return (
    <Container>
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a New Note
      </Typography>

      <Button onClick={() => console.log('you clicked me')} type="submit" color="secondary" variant="contained">
        Submit
      </Button>

      {/* <Button type="submit">Submit</Button>
      <Button type="subit" color="secondary" variant="outlined">Submit</Button>

      <ButtonGroup color="secondary" variant="contained">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup> */}
    </Container>
  )
}

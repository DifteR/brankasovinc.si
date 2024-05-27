import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Menu() {
  return <Stack spacing={2} direction="row">
    <Button variant='contained'>Domov</Button>
    <Button variant='contained'>Cenik</Button>
    <Button variant='contained'>Kontant</Button>
  </Stack>
}
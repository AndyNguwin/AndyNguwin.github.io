import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import { Button } from '@mui/material'
import { Grid, Card, Paper, Typography } from '@mui/material'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Andy's Portfolio</h1>
        <Grid container spacing={2} sx={{minHeight: '100vh', width: '100vw', maxWidth: '100%'}}>
          <Grid size={3} sx={{height: '50vh', alignContent: 'center', position: 'sticky', top: 0}}>
            <Paper elevation={3} sx={{backgroundColor: '#091425', height: '100%'}}>
              <Typography color='common.white'> Yes </Typography>
            </Paper>
          </Grid>
          <Grid size={9} sx={{height: '50vh', alignContent: 'center'}}>
            <Paper elevation={3} sx={{backgroundColor: '#091425', height: '100%'}}>
              <Typography color='common.white'> Yes </Typography>
            </Paper>
          </Grid>
        </Grid>
    </>
  )
}

export default App

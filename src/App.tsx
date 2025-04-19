import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import { Button } from '@mui/material'
import { Grid, Tabs, Tab, Paper, Typography } from '@mui/material'
import './App.css'

function App() {
  const [tab, setTab] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newTab: number) => {
    setTab(newTab);
  }

  return (
    <>
      <h1>Andy's Portfolio</h1>
        <Grid container spacing={2} sx={{minHeight: '100vh', width: '100vw', maxWidth: '100%'}}>
          <Grid size={3} sx={{height: '50vh', alignContent: 'center', position: 'sticky', top: 0}}>
            <Paper elevation={3} sx={{backgroundColor: '#091425', height: '100%'}}>
            <Typography color='common.white'> Andy Nguyen </Typography>
              <Typography color='common.white'> Email </Typography>
              <Typography color='common.white'> LinkedIn </Typography>
              <Typography color='common.white'> Github </Typography>
              <Typography color='common.white'> Phone </Typography>
            </Paper>
          </Grid>
          <Grid size={9} sx={{height: '50vh', alignContent: 'center'}}>
            <Paper elevation={3} sx={{backgroundColor: '#091425', height: '100%'}}>
              <Tabs value={tab} onChange={handleChange}>
                <Tab label="About Me"/>
                <Tab label="Resume"/>
              </Tabs>

              <Typography color='common.white'> Yes </Typography>
            </Paper>
          </Grid>
        </Grid>
    </>
  )
}

export default App

import React from 'react'
import Card from './components/base/Card'
import { Box, Grid } from '@mui/material'

function App() {
  const a = Array(60).fill(true)
  return (
    <div id="beer-app-root">
      <div id="beer-app-body">
        <Box>
          <Grid container spacing={12}>
            {a.map((el) => (
              <Grid item xs={6} md={4}>
                <Card />
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </div>
  )
}

export default App

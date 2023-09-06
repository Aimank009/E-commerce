import { Grid } from '@mui/material'
import React from 'react'
import Achievment from './Achievment'
import MonthlyOverView from './MonthlyOverView'

const Dashboard = () => {
  return (
    <div className='p-10'>
      <Grid container spacing={2}  >
        <Grid item xs={12} md={4} >
          <Achievment/>
        </Grid>

        <Grid item xs={12} md={8} >
          <MonthlyOverView/>
        </Grid>
        <Grid item xs={12} md={6} >
              
        </Grid>

      </Grid>
    </div>
  )
}

export default Dashboard
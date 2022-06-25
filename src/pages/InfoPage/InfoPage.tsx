import React from 'react'
import { Box, Grid } from '@mui/material'
import cn from 'classnames/bind'
import style from './InfoPage.module.scss'
import Card from '@/components/base/Card'
const cx = cn.bind(style)

const InfoPage = () => {
  const temp = Array(12).fill(true)
  return (
    <div className={cx('beer-infopage')}>
      <Box>
        <Grid container spacing={12}>
          {temp.map((e) => (
            <Grid item xs={6}>
              <Card />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  )
}

export default InfoPage

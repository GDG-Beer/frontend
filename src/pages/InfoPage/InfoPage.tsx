import React, { useEffect, useState } from 'react'
import { Box, Grid } from '@mui/material'
import cn from 'classnames/bind'
import style from './InfoPage.module.scss'
import http from '@/utils/http'
import Card from '@/components/base/Card/Card'
const cx = cn.bind(style)

const InfoPage = () => {
  const [beers, setBeers] = useState<BeerInfo[]>([])

  const getBeers = async () => {
    const res = await http.get('/beers/all')
    setBeers(res.data.data)
  }

  useEffect(() => {
    getBeers()
  }, [])

  return (
    <div className={cx('beer-infopage')}>
      <Box>
        <Grid container spacing={12}>
          {beers.map((beer, idx) => (
            <Grid key={idx} item xs={6}>
              <Card beer={beer} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  )
}

export default InfoPage

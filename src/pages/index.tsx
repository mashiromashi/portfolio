/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import React from 'react'
import { Box, Button, Card, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import { GitHub, LinkedIn } from '@mui/icons-material'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Htin Wana</title>
        <meta name='description' content='Portfolio' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <Container maxWidth='md' sx={{ mt: 10, pb: 5 }}>
          <Box display='flex' justifyContent='center' alignItems='center'>
            <img
              src='https://avatars.githubusercontent.com/u/13332659?v=4'
              alt='avatar'
              height='auto'
              width='25%'
              style={{ borderRadius: '100%', marginRight: '5%' }}
            />
            <Box mr={2}>
              <Typography variant='h4'>Htin Wana</Typography>
              <Typography variant='subtitle1'>
                Aspiring Web Developer
              </Typography>
              <Typography variant='subtitle1'>
                htinwana.dev@gmail.com
              </Typography>
              <a
                href='https://www.github.com/mashiromashi'
                target='_blank'
                rel='noreferrer'
              >
                <GitHub />
              </a>
              <a
                href='https://www.linkedin.com/in/htinwana'
                target='_blank'
                rel='noreferrer'
              >
                <LinkedIn />
              </a>
            </Box>
          </Box>
          <Container maxWidth='xs' sx={{ mt: 3 }}>
            <Grid container textAlign='center'>
              <Grid item xs={12} mb={3}>
                <Typography textAlign='center' variant='h6'>
                  My go-to technologies
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <img
                  src='/assets/images/javascript.svg'
                  alt=''
                  height='auto'
                  width='50%'
                />
              </Grid>
              <Grid item xs={4}>
                <img
                  src='/assets/images/typescript.svg'
                  alt=''
                  height='auto'
                  width='50%'
                />
              </Grid>
              <Grid item xs={4}>
                <img
                  src='/assets/images/react.svg'
                  alt=''
                  height='auto'
                  width='50%'
                />
              </Grid>
              <Grid item xs={4} mt={2}>
                <img
                  src='/assets/images/next.svg'
                  alt=''
                  height='auto'
                  width='50%'
                />
              </Grid>
              <Grid item xs={4} mt={2}>
                <img
                  src='/assets/images/mui.svg'
                  alt=''
                  height='auto'
                  width='50%'
                />
              </Grid>
              <Grid item xs={4} mt={2}>
                <img
                  src='/assets/images/redux.svg'
                  alt=''
                  height='auto'
                  width='50%'
                />
              </Grid>
            </Grid>
          </Container>
          <Box mt={3}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography>Lastoenjoy</Typography>
              <Typography>Sr. Frontend Developer</Typography>
              <Typography>Feb 2023 - Current</Typography>
            </Box>
            <Box sx={{ textAlign: 'center', mt: 2 }}>
              <Typography>Paybolt</Typography>
              <Typography>Frontend Developer</Typography>
              <Typography>Jun 2022 - Dec 2022</Typography>
            </Box>
            <Box sx={{ textAlign: 'center', mt: 2 }}>
              <Typography>MsJobs</Typography>
              <Typography>Frontend Developer</Typography>
              <Typography>Feb 2022 - May 2022</Typography>
            </Box>
            <Box sx={{ textAlign: 'center', mt: 2 }}>
              <Typography>Mneme Tech</Typography>
              <Typography>Backend Developer</Typography>
              <Typography>Jan 2021 - May 2022</Typography>
            </Box>
            <Box sx={{ textAlign: 'center', mt: 2 }}>
              <Typography>Tezean Solutions</Typography>
              <Typography>Frontend Developer</Typography>
              <Typography>May 2020 - Jan 2021</Typography>
            </Box>
          </Box>
        </Container>
      </main>
    </>
  )
}

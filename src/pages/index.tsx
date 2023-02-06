
import { Inter } from '@next/font/google';
import { Card, CardHeader, Grid } from '@mui/material';
import { Layout } from 'components/layouts';


const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
   <Layout title='Home-OpenJira' >
      <Grid container spacing={ 2 } >
        <Grid item xs={ 12 } sm={ 4 } >
          <Card sx={{height:'calc( 100vh - 100px )'}} >
           <CardHeader title="Pendientes"/> 
          </Card>
        </Grid>
        <Grid item xs={ 12 } sm={ 4 } >
          <Card sx={{height:'calc( 100vh - 100px )'}} >
           <CardHeader title="En progreso"/> 
          </Card>
        </Grid>
        <Grid item xs={ 12 } sm={ 4 } >
          <Card sx={{height:'calc( 100vh - 100px )'}} >
           <CardHeader title="Complertadas"/> 
          </Card>
        </Grid>
      </Grid>
   </Layout>
  )
}
 
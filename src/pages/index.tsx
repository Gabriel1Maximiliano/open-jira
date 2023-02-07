
import { Inter } from '@next/font/google';
import { Card, CardContent, CardHeader, Grid } from '@mui/material';
import { Layout } from 'components/layouts';
import { EntryList } from 'context/ui';
import { NewEntry } from 'components/ui';


const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {



  return (
   <Layout title='Home-OpenJira' >
      <Grid container spacing={ 2 } >

        <Grid item xs={ 12 } sm={ 4 } >
          <Card sx={{height:'calc( 100vh - 100px )'}} >
           <CardHeader title="Pendientes"/> 
           <CardContent>
            <NewEntry />
            <EntryList status='pending'/>
           </CardContent>
          </Card>

        </Grid>
        <Grid item xs={ 12 } sm={ 4 } >
          <Card sx={{height:'calc( 100vh - 100px )'}} >
           <CardHeader title="En progreso"/>
           <CardContent>
            <EntryList status='in-progress'/>
           </CardContent>
          </Card>
        </Grid>

        <Grid item xs={ 12 } sm={ 4 } >
          <Card sx={{height:'calc( 100vh - 100px )'}} >
           <CardHeader title="Completadas"/>
           <CardContent>
            <EntryList status='finished'/>
           </CardContent> 
          </Card>
        </Grid>

      </Grid>
   </Layout>
  )
}
 
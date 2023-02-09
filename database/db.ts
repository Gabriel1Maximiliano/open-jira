import mongoose from "mongoose";


/**
 * 0 = disconnected,
 * 1 = connected
 * 2 = connecting
 * 3 = disconnected 
 */

const mongoConnection= {
    isConnected:0
}

export const connect = async()=>{

    if( mongoConnection.isConnected ){
        console.log(' We are already connected');
        return;
    }
    if( mongoose.connections.length > 0 ){
        mongoConnection.isConnected = mongoose.connection.readyState;

        if( mongoConnection.isConnected === 1 ){   

            console.log('We are using the previous connection')
            return;
        }

        await mongoose.disconnect();
    }


    await mongoose.connect( process.env.MONGO_URL || '' );

    mongoConnection.isConnected =1;
    console.log('Connected to MongoDb',process.env.MONGO_URL)


} 

export const disconnect = async() =>{

    if( process.env.NODE_ENV === 'development' )  return;

    if( mongoConnection.isConnected === 0 ) return;

  await mongoose.disconnect();
  console.log('Disconeted from MongoDb');

}
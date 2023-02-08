import mongoose from "mongoose";


/**
 * 0 = disconnected,
 * 1 = connected
 * 2 = connecting
 * 3 = disconnected 
 */

const mongooConnection= {
    isConnected:0
}

export const connect = async()=>{

    if( mongooConnection.isConnected ){
        console.log(' We are already connected');
        return;
    }
    if( mongoose.connections.length > 0 ){
        mongooConnection.isConnected = mongoose.connection.readyState;

        if( mongooConnection.isConnected === 1 ){   

            console.log('We are using the previous connection')
            return;
        }

        await mongoose.disconnect();
    }


    await mongoose.connect( process.env.MONGO_URL || '' );

    mongooConnection.isConnected =1;
    console.log('Connected to MongoDb',process.env.MONGO_UR)


} 

export const disconnect = async() =>{

    if( process.env.NODE_ENV === 'development' )  return;

    if( mongooConnection.isConnected === 0 ) return;

  await mongoose.disconnect();
  console.log('Disconeted from MongoDb');

}
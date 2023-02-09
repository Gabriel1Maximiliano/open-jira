
import { Entry } from 'models';
import { isValidObjectId } from 'mongoose';
import { connect, disconnect } from './db';



export const getEntryById = async (id:any) =>{
  
  const {id:idData} = id;
  
  if( !isValidObjectId( idData ) ){ return null}

  await connect();
  const entry = await Entry.findById( idData ).lean();
  await disconnect();

  return  JSON.parse( JSON.stringify( entry ));
}
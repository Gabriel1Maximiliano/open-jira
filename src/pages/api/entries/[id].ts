import type { NextApiRequest, NextApiResponse } from 'next'
import mongoose from 'mongoose';
import { Entry } from 'models';
import { IEntry } from '../../../../models/Entry';
import { db, dbEntries } from 'database';

type Data = 
|{ message: string}
|IEntry

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    const { id } = req.query;
    

    if( !mongoose.isValidObjectId( id ) ){
      
        return res.status(400).json({ message:'Invalid Id' });
    };

    switch ( req.method ) {
        case 'PUT':
            return updateEntry( req, res );
        case 'GET':
                return getEntry( req, res );
        default:
            return res.status(400).json({ message:'Bad request' });
    }

}

const updateEntry = async (req:NextApiRequest, res:NextApiResponse<Data>)=>{

    const { id } = req.query;

   

    const entryToUpdate = await Entry.findById( id ) ;

    if( !entryToUpdate ){
        return res.status(400).json({message:'There is no data with this ID: '+ id})
    };

    const { 
        description = entryToUpdate.description,
    status = entryToUpdate.status } = req.body;

    try {
        
        const updatedEntry = await Entry.findByIdAndUpdate( id, { description, status },{ runValidators:true, new:true } );

        await db.disconnect();

        return res.status(200).json( updatedEntry! );

    } catch (error:any) {
        console.log(error);
        await db.disconnect();
        return res.status(400).json( { message:error.errors.status.message } );

    }
}

const getEntry = async ( req:NextApiRequest, res:NextApiResponse<Data> )=>{

    const { id } = req.query;

    await db.connect();

    const entry = await Entry.findById( id ) ;

    if( !entry ){
        return res.status(400).json({message:'There is no data with this ID: '+ id})
    };
    
    await db.disconnect();

    return res.status(200).json( entry );

}
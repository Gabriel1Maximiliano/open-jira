import type { NextApiRequest, NextApiResponse } from 'next'
import mongoose from 'mongoose';
import { db } from 'database';
import { Entry } from 'models';
import { IEntry } from '../../../../models/Entry';

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
        default:
            return res.status(400).json({ message:'Bad request' });
    }

}

const updateEntry = async (req:NextApiRequest, res:NextApiResponse<Data>)=>{

    const { id } = req.query;

    await db.connect();

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
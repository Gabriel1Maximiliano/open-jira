import { db } from 'database';
import { Entry,IEntry } from 'models';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = 
    | {message: string}
    | IEntry[]
    | IEntry

export default function handler (req: NextApiRequest, res: NextApiResponse<Data>) {
   
        switch (req.method) {
            case 'GET':
                return getEntries( res );
            case 'POST':
                return  postEntries( req, res );    
            case 'PUT':
                return  putEntries( req, res );    
            default:
                return res.status(400).json({ message:'End point does not exist' });
        }
    
}
const getEntries= async ( res:NextApiResponse<Data> )=>{

    
    await db.connect();

    const entries = await Entry.find().sort({ createdAt:'ascending' });

    await db.disconnect();

    res.status(200).json(entries);

}

const postEntries = async ( req:NextApiRequest, res:NextApiResponse<Data> ) =>{

    const { description } = req.body;
   

    let d = Date.now()
    const newEntry = new Entry({
        description,
        createdAt:d
    });
  

    try {

        await db.connect();

        await newEntry.save();
        await db.disconnect();

       return res.status(201).json( newEntry );

        
    } catch (error) {
        await db.disconnect();
        console.log(error);
        return res.status(500).json({message:'Somthing went wrong, check the console service'})
    }

    
}

const putEntries = async ( req:NextApiRequest, res:NextApiResponse<Data> )=>{

    const {} = req.body;



}


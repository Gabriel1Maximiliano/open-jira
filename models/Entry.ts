
import mongoose, { Model, Schema } from "mongoose";
import { Entry } from '../interfaces/entries';

export interface IEntry extends Entry {
}

const entrySchema= new Schema( {
    description:{ type:String,require:true},
    createdA:{ type:Number},
    status:{
        type:String,
        enum:{
            values:[ 'pending', 'in-progress', 'finished' ],
            message:'{value} there is not a valid state'
        }
    }
} );

const EntryModel:Model<IEntry>=mongoose.models.Entry ||mongoose.model('Entry',entrySchema);



export default EntryModel;


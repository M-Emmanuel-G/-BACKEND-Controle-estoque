import {v4} from 'uuid'

export abstract class GenetareId{
     static newID = ()=>{
        return v4()
    }

}
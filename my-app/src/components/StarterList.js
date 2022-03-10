import React from 'react';
import EachCard from './EachCard'
import {v4 as uuid} from 'uuid'
 
function StarterList({charity}) {
    return (
    <div className='row'>
        {      
            charity.slice(0,10).map((charity) => {
                console.log('startList',charity)
                return(
                <EachCard key={uuid()} charity={charity} />
                )
            })
        }
    </div>  
    )
}
export default StarterList
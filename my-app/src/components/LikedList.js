import React from "react";
import EachCard from "./EachCard";
import {v4 as uuid} from 'uuid'


function LikedList({charity}){
    return(
        console.log(charity)
        // <div> {
        //     charity.map((charity) => {
        //         return(
        //             <EachCard key={uuid()} charity={charity}/>
        //         )
        //     })
        // }
        // </div>
    )
}
export default LikedList;
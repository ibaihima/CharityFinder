import React from "react";
import EachCard from "./EachCard";
import {v4 as uuid} from 'uuid'


function LikedList({charity, handleDelete}){
    return(
        <div> {
            charity.map((charity) => {
                return(
                    <EachCard key={uuid()} charity={charity} handleDelete={handleDelete}/>
                )
            })
        }
        </div>
    )
}
export default LikedList;
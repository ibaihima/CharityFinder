import React, {useEffect, useState} from 'react';
import StarterList from './StarterList';



function FullPage() {
    const [inventory, setInventory] = useState([])
    useEffect(() => {
        fetch('https://api.data.charitynavigator.org/v2/Organizations?app_id=46d68c21&app_key=b6a0d59f06011cc01deec1812f392ebd&rated=true')
        .then(res => res.json())
        .then(data =>{
            setInventory(data)
            console.log(data)
        })
    },[])
    return(
        <div>
            <StarterList charity={inventory} />
        </div>
    )
}

export default FullPage;




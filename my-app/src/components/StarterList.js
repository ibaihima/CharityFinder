import React from 'react';
import EachCard from './EachCard'
import {v4 as uuid} from 'uuid'

function StarterList({charity}) {
    return (
        charity.map((charity) => {
            return (
                <div>
                    <ls>
                        <EachCard key={uuid} charity={charity} />
                    </ls>
                </div>
            )
        })
    )
}
export default StarterList
import React from 'react';
 
function EachCard({charity, onCharityClicked, handleDelete}) {
    return(
        <div className="wrapper">
            <div className="container">
                <div className="top"></div>
                <div className="bottom">
                    <div className="left">
                        <div className="details">
                            <h1>{charity.charityName}{/* charity name*/}</h1>
                            <img src={charity.currentRating.ratingImage.large} alt={charity.charityName} />
                        </div>
                        <div>
                        <button className="list"  onClick={ () => onCharityClicked(charity)}>Add To List</button>                         
                        </div>
                        <a href={charity.websiteURL}>Go Support</a>
                    </div>
                    <div className='right'>
                         <p className ='details' onClick={ () => handleDelete(charity)}>{charity.mission}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
 
export default EachCard;
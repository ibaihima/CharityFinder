import React from 'react';



function Filter({onSearchChange,onFilterChange}){

    // const oneStar = <img src="https://d20umu42aunjpx.cloudfront.net/_gfx_/icons/stars/4stars.png" alt='oneStar'/>
    
    return(
        <div className="Filter">
            <input className="searchBar" type="text" name="search" placeholder="Search..." onChange={(event) => onSearchChange(event.target.value)} />
            <div>
            <select name="filter" onChange={onFilterChange}>
                <option value="">Filter by category</option>
                <option value="1">Animals</option>
                <option value="2">Arts,Culture,Humanities</option>
                <option value="3">Education</option>                
                <option value="4">Environment</option>
                <option value="5">Health</option>
                <option value="6">Human Servives</option>
                <option value="7">International</option>
                <option value="8">Human and Civil Rights</option>
                <option value="9">Religion</option>
                <option value="10">Commuity Development</option>
                <option value="11">Research and Public Policy</option>
                <option value="16">Youth Development, Shelter, and Crisis Services</option>
            </select>
            </div>
      </div>
    )
}

export default Filter;
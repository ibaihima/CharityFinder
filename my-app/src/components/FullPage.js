import React, {useEffect, useState} from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import StarterList from './StarterList';
import Filter from './Filter';
import NavBar from './NavBar';


function FullPage() {
    const [inventory, setInventory] = useState([])
    const [page, setPage] = useState("/")
    const [filterCategory, setFilterCategory] = useState("")
    const [savedInventory, setSavedInventory] = useState([])


    useEffect(() => {
        fetch('https://api.data.charitynavigator.org/v2/Organizations?app_id=46d68c21&app_key=b6a0d59f06011cc01deec1812f392ebd&rated=true')
        .then(res => res.json())
        .then(data =>{
            setInventory(data)
            console.log(data)
        })
    },[])

    useEffect(() => {
        fetch(`https://api.data.charitynavigator.org/v2/Organizations?app_id=46d68c21&app_key=b6a0d59f06011cc01deec1812f392ebd&rated=true&categoryID=${filterCategory}`)
        .then(res => res.json())
        .then(data =>{
            console.log('categoryFetch', data)
            setSavedInventory(data)
        })
    },[filterCategory])




    function handleSearchChange(e) {
        setFilterCategory(e.target.value)

      }
         
      function onCharityClicked(charity){
          return(
              console.log('im saved', charity)
          )
      }

    return(
        <BrowserRouter>
            <NavBar onChangePage = {setPage} />
            <Switch>
                <Route exact path="/">
                    <StarterList charity={inventory} onCharityClicked={onCharityClicked} />
                </Route>
                <Route path="/search">
                    <Filter onFilterChange={handleSearchChange}  />
                    <StarterList charity={savedInventory} />
                </Route>
                <Route path="/liked">
                    <Filter />
                </Route>
                <Route path="*">
                    <h1>404 not found</h1>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default FullPage;




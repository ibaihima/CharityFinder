import React, {useEffect, useState} from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import StarterList from './StarterList';
import Filter from './Filter';
import NavBar from './NavBar';
import LikedList from './LikedList';


function FullPage() {
    const [inventory, setInventory] = useState([])
    const [page, setPage] = useState("/")
    const [filterCategory, setFilterCategory] = useState("")
    const [savedInventory, setSavedInventory] = useState([])
    const [likedList, setLikedList] = useState([])

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


    useEffect(() => {
        fetch('http://localhost:3000/likedList')
        .then(res => res.json())
        .then(data => {
            setLikedList(data)
        })
    },[])



    function handleSearchChange(e) {
        setFilterCategory(e.target.value)

    }

    function onCharityClicked(charity){
        fetch("http://localhost:3000/likedList", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(charity),
            })
            .then(response => response.json())
            .catch(error => console.error("Error:", error))
        return(
            console.log("clicked")
        )
    }

    return(
        <BrowserRouter>
            <NavBar onChangePage = {setPage} className="nav" />
            <Switch>
                <Route exact path="/">
                    <StarterList charity={inventory} onCharityClicked={onCharityClicked} />
                </Route>
                <Route path="/search">
                    <Filter onFilterChange={handleSearchChange}  />
                    <StarterList charity={savedInventory} onCharityClicked={onCharityClicked} />
                </Route>
                <Route path="/liked">
                    <LikedList charity = {likedList}/>
                </Route>
                <Route path="*">
                    <h1>404 not found</h1>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default FullPage;




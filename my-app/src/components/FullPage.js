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
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch('https://api.data.charitynavigator.org/v2/Organizations?app_id=46d68c21&app_key=b6a0d59f06011cc01deec1812f392ebd&rated=true')
        .then(res => res.json())
        .then(data =>{
            if (data.errorMessage) {
            setInventory([])
            }
            else {
                setInventory(data)
            }
            console.log(data)
        })
        .catch(err => console.log('error',err))
    },[])

    useEffect(() => {
        fetch(`https://api.data.charitynavigator.org/v2/Organizations?app_id=46d68c21&app_key=b6a0d59f06011cc01deec1812f392ebd&rated=true&categoryID=${filterCategory}&search=${search}`)
        .then(res => res.json())
        .then(data =>{
            if (data.errorMessage) {
                setSavedInventory([])
                }
                else {
                    setSavedInventory(data)
                }
        })
        .catch(err => console.log('error',err))
    },[filterCategory, search])


    useEffect(() => {
        fetch('http://localhost:3000/likedList')
        .then(res => res.json())
        .then(data => {
            setLikedList(data)
        })
        .catch(err => console.log('error',err))
    },[])



    function handleFilterChange(e) {
        setFilterCategory(e.target.value)

    }





    function onCharityClicked(charity){
        const foundIndex = likedList.findIndex(item => charity.charityName === item.charityName);
        if (foundIndex === -1) {
            setLikedList([...likedList, charity]);
            fetch("http://localhost:3000/likedList", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(charity),
            })
            .then(response => response.json())
            .catch(error => console.error("Error:", error))
        } else {
            console.log("Charity already on list");
        }
    }

    function handleDelete (charity){
        if(likedList.find(item => item.orgID === charity.orgID)) {
            const newList = likedList.filter(item => item !== charity)
            setLikedList(newList)
            fetch("http://localhost:3000/likedList/"+charity.id, {
            method: "DELETE" })
        } else {
            console.log("Not found")
        }
    }



    function deleteDummy(){
        console.log("Error!")
    }

    function onSearchChange(input){
            setSearch(input)
    }



    return(
        <BrowserRouter>
            <NavBar onChangePage = {setPage} className="nav" />
            <Switch>
                <Route exact path="/">
                    <StarterList charity={inventory} onCharityClicked={onCharityClicked} onDelete = {deleteDummy} />
                </Route>
                <Route path="/search">
                    <Filter onFilterChange={handleFilterChange} onSearchChange={onSearchChange}  />
                    <StarterList charity={savedInventory} onCharityClicked={onCharityClicked} onDelete = {deleteDummy} />
                </Route>
                <Route path="/liked">
                    <LikedList charity = {likedList} handleDelete = {handleDelete}/>
                </Route>
                <Route path="*">
                    <h1>404 not found</h1>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default FullPage;




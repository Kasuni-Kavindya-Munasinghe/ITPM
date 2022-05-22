
import React, { useState, useEffect } from "react";
import axios from 'axios';
import Header from "../HeaderFooter/Header";
import Footer from "../HeaderFooter/Footer";




function SearchPlace() {
    const [search, setSearch] = useState('');
    const [int, setPlace] = useState([]);
    const [filteredIntData, setFilteredData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8070/place/')
            .then((response) => {
                setPlace(response.data);
            })
    }, [])

     

useEffect(() => {
    setFilteredData(
        int.filter((int) => int.Category.toLowerCase().includes(search.toLowerCase()))
        )
}, [search], int)



return ( 
    
    <div class="containerg">
       
            <div>
        <Header/>
        </div>
        
        <div>
      <div className="placeSearchContainer">
    <div className="searchPlace">
        <br/>
    <div className="container" id="searchPlaceForm">
        <h1 className="searchPlaceDetail">SEARCH PLACE DETAILS </h1><br/><br/><br/>
        <h4> Enter You Want Place Location To View The Place Details</h4><br/>
        <input className="searchBarInt.A" type="text" placeholder="enter place location" onChange={(e) => {
            setSearch(e.target.value);
        }}/>
        <br/><br/>

        
        
        <table className="table.A">
            <thead className="thead-light">
                <tr>
                    
                </tr>
            </thead>
            
            <tbody>
                {filteredIntData.map((val) =>{
                    return <div key={val.id}>
                        <div class="form-group">
                        <tr><td>Category : {val.Category}</td></tr>
                        <tr><td>Name : {val.Place_Name} </td></tr>
                        <tr><td>Schedule Details : {val.Schedule_Details} </td></tr>
                        <tr><td>Adult Price : {val.Adult_Price} </td></tr>
                        <tr><td>Child Price : {val.Child_Price} </td></tr>
                        </div>
                        <br></br>
                        <br></br>
                        
                        </div>
                        
                     })}
            </tbody>
           
        </table>
        </div>
        </div>
        </div>
        </div>
        
        <div>
        
        </div>
        
        <div>
            <Footer/>
            </div>
    </div>
  
);
 }
 
 export default SearchPlace;

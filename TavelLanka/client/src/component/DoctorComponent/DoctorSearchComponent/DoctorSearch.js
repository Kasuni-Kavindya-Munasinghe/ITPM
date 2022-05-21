import React, { useState, useEffect } from "react";
import axios from 'axios';
import './DoctorSearch.css';
import imgsdoc from '../../../Images/People search-cuate.png'
import DoctorSideMenu from '../DoctorSideMenuComponent/DoctorSideMenu'

function SearchDoc() {
    const [search, setSearch] = useState('');
    const [doc, setDoctor] = useState([]);
    const [filteredDocData, setFilteredData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8087/doctor/')
            .then((response) => {
                setDoctor(response.data);
            })
    }, [])

useEffect(() => {
    setFilteredData(
        doc.filter((doc) => doc.vehicle_type.toLowerCase().includes(search.toLowerCase()))
        )
}, [search], doc)


return ( 
    <div class="containerg">
       
            <div>
        <DoctorSideMenu/>
        </div>
        <div>
      <div className="DocSearchContainer">
    <div className="searchDoctor">
        <br/>
    <div className="container" id="searchDoctorForm">
        <h1 className="searchDoctorDetail">SEARCH HIRE VEHICLE DETAILS </h1><br/><br/><br/>
        <h2> Enter Hire ID to view the HIRE VEHICLE details</h2><br/>
        <input className="searchBarDoc.A" type="text" placeholder="Search..." onChange={(e) => {
            setSearch(e.target.value);
        }}/>
        <br/><br/>
        
        
        <table className="table.A">
            <thead className="thead-light">
                <tr>
                    <th> hire Vehicle Details </th>
                </tr>
            </thead>
            <tbody>
                {filteredDocData.map((val) =>{
                    return <div key={val.vehicle_type}>
                        
                        <tr><td>Doctor Name : {val.vehicle_Owner_Name}</td></tr>
                        <tr><td>Doctor Id : {val.vehicle_type} </td></tr>
                        <tr><td>Contact Number : {val.Vehicle_modle} </td></tr>
                        <tr><td>Specialization : {val.Driver_name} </td></tr>
                        <tr><td>Department : {val.Driver_age} </td></tr>
                        <tr><td>Designation : {val.Driving_license} </td></tr>
                        <tr><td>Department : {val.availableDate} </td></tr>
                        <tr><td>Designation : {val.availableTime} </td></tr>
                        
                        </div>
                       
                     })}
            </tbody>
        </table>
        </div>
        </div>
        </div>
        </div>
        
        <div>
        <img className="imgsdoc1" src={imgsdoc} alt="Search icon" ></img>
        </div>
        
      
    </div>
  
);
 }
 
 export default SearchDoc;

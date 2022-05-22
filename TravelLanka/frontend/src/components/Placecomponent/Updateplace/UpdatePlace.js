
import React, { useState } from 'react'
import axios from 'axios';


const UpdatePlace = (prop) => {

    const id = prop.match.params.id;

    //console.log(id);

    const [PUpdate, setPUpdate] = useState([]);

    axios.get(`http://localhost:8070/place/get/${id}`)
    .then((res) => setPUpdate(res.data))
    .catch((err) => console.log(err.message));
    //console.log(PUpdate);

    const [category,setCategory]= useState("");
    const [name,setName]= useState("");
    const [details,setDetails]= useState("");
    const [adultP,setAdultP]= useState("");
    const [childP,setChildP]= useState("");

    const getPlaceDetails = (e) => {
        e.preventDefault();
        const updatePlace = {
          category,
          name,
          details,
          adultP,
          childP



        }

        //console.log(datasetInt);

        axios.put(`http://localhost:8087/places/update/${id}`, updatePlace)
        .then(() => alert ("Place Details updated successfully"))
        .catch((err) => console.log(err.message));
        window.location = "/viewplace";
    }

    

    return(

<div>
        
        <div className="container">
            
            <h1> Update Place Details</h1>
        <div className="formUpdateRoom">
            <form onSubmit={getPlaceDetails}>
                <div className="addplace">
                    <label for = "category" className = "form-label">Hotel_Name</label>
                    <input type="text" 
                    className="form-control"
                    name="Category"
          
                    placeholder="category"
                    defaultValue={PUpdate.Category}
                    onChange = {(e) =>  setCategory(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label for="Place_Name">Name</label>
                    <input type="text" className="form-control" name="Name"  placeholder="name"
                    defaultValue={PUpdate.Name}
                    onChange={(e)=>{
                    setName(e.target.value);
                    }}/>
                </div>

                <div className="form-group">
                 <label for="Schedule_Details">Schedule Details</label>
                 <textarea className="form-control" name="Details"  placeholder="details"
                 defaultValue={PUpdate.Details}
                 onChange={(e)=>{ 
                 setDetails(e.target.value);
                 }}/>
                </div>

                 <div className="form-group">
                  <label for="Adult_Price">Adult Price</label>
                  <input type="text" className="form-control" name="AdultP"  placeholder="Rs.adultP"
                  defaultValue={PUpdate.AdultP}
                  onChange={(e)=>{
                  setAdultP(e.target.value);
                  }}/>
                </div>

                <div className="form-group">
                 <label for="Child_Price">Child Price</label>
                 <input type="text" className="form-control" name="ChildP"  placeholder="Rs.childP"
                 defaultValue={PUpdate.ChildP}
                 onChange={(e)=>{
                 setChildP(e.target.value);
                 }}/>
                </div>


                <button className="btn btn-success" type="submit" /* onClick={this.onSubmit} */>
                    <i className="far fa-check-square">
                        &nbsp; Update
                    </i>
                </button>

            </form>
            </div>
        </div>
        <div>
            
            </div>
        </div>
    )
}

export default UpdatePlace;


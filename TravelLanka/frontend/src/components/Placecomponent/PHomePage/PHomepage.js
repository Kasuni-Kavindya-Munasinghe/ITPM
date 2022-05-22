import React, { Component } from "react";
import axios  from "axios";
import Footer from "../HeaderFooter/Footer";
import Header from "../HeaderFooter/Header";
import PlaceSideMenu from "../PlaceSideMenu/PlaceSideMenu";

export default class PlaceHome extends Component{
    constructor(props){
        super(props);
        this.state={places:[],
            category:"",
            name:"",
            details:"",
            adultP:"",
            childP:""
        
        }
    }
    componentDidMount(){
        axios.get("http://localhost:8070/place/")
        .then((res)=>{
            console.log("data",res.data);
            this.setState({
                places:res.data
            })

            console.log(this.state.places);
            this.state.places.map((place,key)=>{
                console.log("place",place);
            })
        }).catch((err)=>{
            console.log(err);
        })
        
    }
    render(){
        return(
            <div>
                <Header/>
            <div className="IntContainer">
                <PlaceSideMenu/> 
                <div className="container"> 
                <br></br><h1> Enjoy your Holiday </h1><br></br>
                
                
                <table class="table table-success table-striped">

                <thead className="thead-light">
                    <tr>
                        <th scope="col"> Category </th>
                        <th scope="col"> Name </th>
                        <th scope="col"> Detalis</th>
                        <th scope="col"> Adult Price </th>
                        <th scope="col"> Child Price </th>
                       

                    </tr>
                </thead>

                <tbody>
                 { this.state.places.map((place,key) =>(
                 <tr>
                    <td> {place.category} </td>
                    <td> {place.name} </td> 
                    <td> {place.details} </td>
                    <td> {place.adultP}</td>
                    <td> {place.childP} </td>
                    
                 </tr>
                ))}
                </tbody>
             
                
                </table>
                </div><br></br>
           </div><br></br>
           <Footer/>
           </div>
        )
    }
}
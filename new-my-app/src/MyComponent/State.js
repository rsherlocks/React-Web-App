import React,{Component} from 'react';

class Welcome extends  Component{

    constructor(){

        super();

        var obj={
            name:"Rakib Hasan",
            age: ["23","25","27"],
            country:"Bangladesh",
            Zilla:"Gazipur",
            address:{
                vill:"Sadar",
                thana:"Joydevpur",
                post:"Gazipur Cant"

            }
        }

        this.state=obj;
        
    }
    render(){

         return(
             <div>
                 <h1>Name Is: {this.state.name} & Age Is : {this.state.age[0]}</h1>
                <h2>Zilla: {this.state.Zilla}, Country:{this.state.country}</h2>
         <h3>Village: {this.state.address.vill}, Thana: {this.state.address.thana}</h3>
             </div>
         
         )
    }
}
export default Welcome;
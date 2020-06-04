import React,{Component} from 'react';

class Hello extends  Component{

    constructor(){

        super();

        var obj={
            name:"Rakib Hasan Change State"
        }

        this.state=obj;
        
    }
    change(a)
    {
        this.setState({name:a})
    }
    render(){

         return(
             <div>
                 <h1>Name Is: {this.state.name}</h1>
                 <button onClick={this.change.bind(this,"Amin Change name")}>Chnage Name</button>
                
             </div>
         
         )
    }
}
export default Hello;
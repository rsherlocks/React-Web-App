import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Click=(a)=>{
    alert(a);
}


const Arrow=()=>{
    return(

        <button onClick={Click.bind(this,"Booststrap Arrow Function")} className="btn btn-danger">Bootstrap click</button>
    );

}
export default Arrow;
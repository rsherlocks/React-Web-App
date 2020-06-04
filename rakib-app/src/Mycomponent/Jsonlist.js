import React, {Component} from 'react';
class List extends Component{
    render()
    {
        const country=[
            {
                 city:"Dhaka",
                 Zip:"1200"        
             },
             {
                city:"Gazipur",
                Zip:"1700"        
            },
            {
                city:"Comilla",
                Zip:"5100"        
            }
    ];
        const listdata=country.map((mydata)=>{
        return(<li>{mydata.city}</li>);
        });
        const list=country.map((mydata)=>{
            return(<option>{mydata.Zip}</option>);
            });
        return(<div>
            <ol>{listdata}</ol>
        <select>{list}</select>
            </div>);
    }

}
export default List;
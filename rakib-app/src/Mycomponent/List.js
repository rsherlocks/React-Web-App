import React, {Component} from 'react';
class List extends Component{
    render()
    {
        const country=['Bangladesh','India','America','Africa'];
        const listdata=country.map((mydata)=>{
        return(<li>{mydata}</li>);
       
        });
        const list=country.map((mydata)=>{
            return(<option>{mydata+' '+'Rakib'}</option>);
            });
        return(<div>
            <ol>{listdata}</ol>
        <select>{list}</select>
            </div>);
    }

}
export default List;
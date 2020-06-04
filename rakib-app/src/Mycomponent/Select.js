import React,{Component} from 'react';
class Select extends Component{
    constructor()
    {
        super();
        this.state={
            zilla1:"dhaka",
            zilla2:"gazipur",
            zilla3:"comilla",
            show:""
        }
    }
    onCgangehandler=(event)=>{
        var inputValue=event.target.value;
        this.setState({show:inputValue});

    }
render()
{
    return(
        <div>
            <p>{this.state.show}</p>
             <select onChange={this.onCgangehandler}>
                <option>{this.state.zilla1}</option>
                <option>{this.state.zilla2}</option>
                <option>{this.state.zilla3}</option>
            </select>
        </div>
    );
}
}
export default Select;
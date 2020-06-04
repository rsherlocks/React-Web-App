import React,{Component} from 'react';
class MultipleEvent extends Component{
    constructor()
    {
        super();
        this.state={
            name:""

        }
       
    }
    onChangeHandler=(event)=>{
        var myname = event.target.value;
        this.setState({name:myname});

    }
    render()
    {
        return(
            <div>
                <h3>My From</h3><br></br>
                <p>{this.state.name}</p>
                <input onChange={this.onChangeHandler} type="text" placeholder="Your Name"></input><br></br><br></br>
                <input type="submit" value="Submit"></input>
            </div>
        );
    }
}
export default MultipleEvent;
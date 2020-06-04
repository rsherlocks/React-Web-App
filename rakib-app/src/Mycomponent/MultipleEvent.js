import React,{Component} from 'react';
class From extends Component{
    constructor()
    {
        super();
        this.state={
            username:""

        }
       
    }
    onChangeHandler=(event)=>{
        var username=event.target.name;
        var myname = event.target.value;
        this.setState({[username]:myname});

    }
    onSubmitHandler=()=>
    {
        alert(this.state.username);
    }
    render()
    {
        return(
            <div>
                <form onSubmit={this.onSubmitHandler}>
                <h3>My Form</h3><br></br>
                <p>{this.state.username}</p>
                <input name="username" onChange={this.onChangeHandler} type="text" placeholder="Your Name"></input><br></br><br></br>
                <input type="submit" value="Submit"></input>
                </form>
            </div>
           
        );
    }
}
export default From;
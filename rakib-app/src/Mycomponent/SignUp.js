import React,{Component} from 'react';
class SignUp extends Component{

    constructor()
    {
        super();
        this.state={
            fname:"",
            lname:"",
            email:"",
            mobile:""
        }
    }
    OnChangeHandler=(event)=>
    {
        var inputName=event.target.name;
        var inputValue=event.target.value;
        this.setState({[inputName]:inputValue});
     
        if(inputName==="fname")
        {
            var namePattern=/^([a-zA-z]){2,30}$/;
            if(!namePattern.test(inputValue))
            {
                this.setState({fname:"It's Unvalid"});
            }

        }
        if(inputName==="lname")
        {
            var namePattern=/^([a-zA-z]){2,30}$/;
            if(!namePattern.test(inputValue))
            {
                this.setState({lname:"It's Unvalid"})
            }
            
        }
        if(inputName==="email")
        {
            var emailPattern=/\s+@\s+\.\s+/;
            if(!emailPattern.test(inputValue))
            {
                this.setState({email:"It's Unvalid"})
            }
            
        }
        if(inputName==="mobile")
        {
            if(!Number(inputValue))
            {
                this.setState({mobile:"It's Unvalid"})

            }
            
        }
        
    }
    render()
    {
        return(
            <div>
                <form>
                    <p>FastName:{this.state.fname}</p>
                    <p>LastName:{this.state.lname}</p>
                    <p>Email:{this.state.email}</p>
                    <p>Mobile:{this.state.mobile}</p>
                    
                    <input type="text" onChange={this.OnChangeHandler} name="fname" placeholder="Enter fname"></input><br></br>
                    <input type="text" onChange={this.OnChangeHandler} name="lname" placeholder="Enter lname"></input><br></br>
                    <input type="text" onChange={this.OnChangeHandler} name="email" placeholder="Enter email"></input><br></br>
                    <input type="text" onChange={this.OnChangeHandler} name="mobile" placeholder="Enter mobile"></input><br></br>
                    <input type="submit" value="Save Now"></input>
                </form>
            </div>
        );
    }
}
export default SignUp;
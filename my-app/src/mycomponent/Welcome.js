import React,{ Component } from "react";
class Welcome extends Component{
    click(b)
    {
        alert(b);
    }
    render()
    {
    return <div>
        <button onClick={this.click.bind(this,"I Am Class Alert Click")}>Class Click</button>
        <h1>{this.props.name}</h1>
        </div>

    }
}
export default  Welcome;

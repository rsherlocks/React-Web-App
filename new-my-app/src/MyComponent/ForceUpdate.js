import React,{Component} from 'react';
class Force extends Component{
    constructor()
    {
        super();
        this.change=this.change.bind(this);
        
    }
    change()
    {
        this.forceUpdate();
    }
    render()
    {
        return(
            <div>
                <button onClick={this.change}>Refress</button><br></br>
                <h3>{Math.random()}</h3>
            </div>

            )


    }
}
export default Force;
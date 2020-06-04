import React,{Component} from 'react';
class Condation extends Component{
    constructor()
    {
        super();
        this.sate={
            login:false
        }
    }
    render()
    {
        return(
            this.sate.login?
            (

            <h1>Condation is true</h1>
        
            )
            :
            (
                <h1>Condation is false</h1>

            )


        )

    }
}
export default Condation;
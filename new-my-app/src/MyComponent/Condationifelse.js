import React,{Component} from 'react';
class Condation extends Component{
    constructor()
    {
        super();
        this.sate={
            login:true
        }
    }
    render()
    {
        if(this.sate.login==true)
        {
            return(<button>LogOut</button>)
        }
        else{
            return(<button>LogIn</button>)

        }


    }
}
export default Condation;
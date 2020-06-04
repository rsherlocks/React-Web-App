import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class domenode extends Component{
    changImage()
    {
        var imgid=document.getElementById("img");
        ReactDOM.findDOMNode(imgid).src="https://homepages.cae.wisc.edu/~ece533/images/boat.png";
    }
    render()
    {
        return(
            <div>
                <button onClick={this.changImage}>Change Image</button><br></br>
                <img id="img" src="https://homepages.cae.wisc.edu/~ece533/images/airplane.png"></img>


            </div>
        );
    }
}
export default domenode;
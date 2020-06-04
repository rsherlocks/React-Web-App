import React,{Component} from 'react';
class TextArea extends Component{
    constructor()
    {
        super();
        this.state={
            text:""
        }
    }


    onChangeHandler=(event)=>
    {
        var inputValue=event.target.value;
        this.setState({text:inputValue});

    }

    render()
    {
        return(
            <div>
                <p>{this.state.text}</p>
                <textarea onChange={this.onChangeHandler}></textarea>
            </div>
        );
    }
}
export default TextArea;
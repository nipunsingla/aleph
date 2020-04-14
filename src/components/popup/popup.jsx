import React from 'react';
import './style.css';
import CloseIcon from '@material-ui/icons/Close';
class Popup extends React.Component {
    constructor(props){
        super(props);
        this.state={
                userId:'1',
                id:'1',
                title:'',
                body:'',
            
        }
    }
    title(e){
        this.setState({
            title:e.target.value
        })
        
    }
    body(e){
        console.log(e.target.value,'amdklsndjk')
        this.setState({
            body:e.target.value
        })
    }
    Add(){
        console.log('new post ',this.state)
        this.props.AddPosts(this.state);

    }
    render() {
        return (
            <div className='popup w-10 h-10'>
                 <button className='float-right' onClick={this.props.closePopup}>
                        <CloseIcon/>
                    </button>

                <div className='popup\_inner'>
                    <h1>{this.props.text}</h1>
                        <div className="form-group">
                            <label>Enter the title </label>
                            <input name="title" type="text"  value={this.state.title} onChange={this.title.bind(this)} className="form-control" placeholder="Enter Title"/>
                        </div>

                        <div className="form-group">
                            <label>Enter the body </label>
                            <input name="body" value={this.state.body} type="text" className="form-control" onChange={this.body.bind(this)} placeholder="Enter body"/>
                        </div>

                         <button onClick={()=>this.Add()} className="btn btn-primary">Submit</button>
               
                          
                        </div>
                        </div>
        );
    }
}

export default Popup;
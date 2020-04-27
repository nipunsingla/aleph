import React from 'react';
import Popup from '../popup/popup'
import ProfileIcon from '../ProfileIcon/ProfileIcon'
import axios from 'axios'
import {DisplayPosts} from '../../components/displayposts/displaypost';
class PostPage extends React.Component {
    
    constructor(){
        super();
        this.state={ShowPopup:false ,
            res:[],
            loading:false
        };

    }
    async FakeData(){
    
        const res=await axios.get('https://jsonplaceholder.typicode.com/posts');
       
        res.data.map((val)=>this.state.res.push(val));
       
        this.setState({
            loading:true,
            res:this.state.res
        });
        console.log('my state is  ',this.state.res)
    }
    componentDidMount(){
        this.FakeData();
        console.log(this.state.res)
}
    togglePopup(){
    
        this.setState({
            ShowPopup:!this.state.ShowPopup
        })
    
    }
    AddPosts(res){
    
        this.state.res.unshift(res)
        this.togglePopup();
        alert('added succesfully');
        console.log(this.state.res);

    }
    render() {
        return (
            <div>
                <div className='ml-auto row bg-light'>
                    <button className='col-sm btn btn-light'>
                        Post
                </button>

                    <button className='col-sm btn btn-light'>
                        Chats
                </button>
                    <button className='col-sm btn btn-light'>
                        Assignments
                </button>
                    <button className='col-sm btn btn-light'>
                        Work
                </button>

                    <button className='col-sm btn btn-light'>
                        More
                </button>
                </div>
                <div className='border-5 row form-control h-25 ml-auto mr-auto'>
                    <ProfileIcon className='d-inline ml-auto'/>
                    <button className='d-inline ml-4 btn-primary' onClick={this.togglePopup.bind(this)}>Your Post Here </button>
                    </div>
                  
     {         this.state.loading?
                <div className='row'>
                    <DisplayPosts data={this.state.res}/>
                </div>:null
    
}

                    {
                        this.state.ShowPopup?
                        <Popup text='MAKE YOUR POST' AddPosts={this.AddPosts.bind(this)}  closePopup={this.togglePopup.bind(this)}></Popup>:null
                    }

              
            </div>


        )
    }
}
export { PostPage };
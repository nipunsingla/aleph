import React from 'react';
import Popup from '../popup/popup'
import ProfileIcon from '../ProfileIcon/ProfileIcon'
import axios from 'axios'
import { DisplayPosts } from '../../components/displayposts/displaypost';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import PhotoLibraryTwoToneIcon from '@material-ui/icons/PhotoLibraryTwoTone';




class PostPage extends React.Component {

    constructor() {
        super();
        this.state = {
            ShowPopup: false,
            res: [],
            loading: false,
            Announcements:['1','2','3','4']
        };

    }
    async FakeData() {

        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');

        res.data.map((val) => this.state.res.push(val));

        this.setState({
            loading: true,
            res: this.state.res
        });
        console.log('my state is  ', this.state.res)
    }
    componentDidMount() {
        this.FakeData();
        console.log(this.state.res)
    }
    togglePopup() {

        this.setState({
            ShowPopup: !this.state.ShowPopup
        })

    }
    AddPosts(res) {

        this.state.res.unshift(res)
        this.togglePopup();
        alert('added succesfully');
        console.log(this.state.res);

    }
    render() {
        return (
            <div className='row mx-auto' >
                <div className='col-sm-8'>

    <div className="row bg-light border-1 my-auto">
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
                <div className='row my-2 bg-light'>

    <ProfileIcon className='col-sm-3'/>
               <h5 onClick={this.togglePopup.bind(this)} className='col-sm-8 text-muted mt-4'>Your Post Here.....</h5>  
            

                <FolderOpenIcon  font-size='large' className='col-sm-1 my-auto'/>  
                <PhotoLibraryTwoToneIcon color='primary' fontSize='large' className='col-sm-1 my-auto'/>
</div>
                    {this.state.loading ?
                        <div className='row'>
                            <DisplayPosts data={this.state.res} />
                        </div> : null

                    }

                    {
                        this.state.ShowPopup ?
                            <Popup text='MAKE YOUR POST' AddPosts={this.AddPosts.bind(this)} closePopup={this.togglePopup.bind(this)}></Popup> : null
                    }
                </div>
                <div className='col-sm-2'>
                    <h2>
                        Announcements
                        <div className='text-center mt-1'>
                        
                        
                        {this.state.Announcements.map((val)=>{
                               return      <h4> Announcement{val}</h4>
                        })
                            }

                        </div>

                        <h4 className='text-primary'> See all...</h4>
                </h2>

                </div>
            </div>


        )
    }
}
export { PostPage };

import React  ,{ Fragment } from 'react';
import Popup from '../popup/popup'
import ProfileIcon from '../ProfileIcon/ProfileIcon'
import axios from 'axios'
import { DisplayPosts } from '../../components/displayposts/displaypost';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import PhotoLibraryTwoToneIcon from '@material-ui/icons/PhotoLibraryTwoTone';
import ReactPlayer from 'react-player'
import './post.css'

class FeedPost extends React.Component {

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

    <div className="row border-4 m-auto " >
                    <ReactPlayer url='https://youtu.be/rlR4PJn8b8I' controls light volume playsinline  playing width='100%' height='20vh'/>
                </div>
                <div className='row my-4 mx-auto bg-light'>

    <ProfileIcon className='col-sm-3'/>
               <h5 onClick={this.togglePopup.bind(this)} className='col-sm-8 text-muted mt-4'>Your Post Here.....</h5>  
            

                <FolderOpenIcon  font-size='large' className='col-sm-1 my-auto'/>  
                <PhotoLibraryTwoToneIcon color='primary' fontSize='large' className='col-sm-1 my-auto'/>
</div>
                    {this.state.loading ?
                        <div>
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
                <h2 className='mt-4'>
                    Suggested
                        <div className='row'>
                        
                        
                        {this.state.Announcements.map((val)=>
                               <div className=''>
                              
                                 <img  src='https://cdn3.iconfinder.com/data/icons/mixed-communication-and-ui-pack-1/48/general_pack_NEW_glyph_profile-512.png' 
                                  style={{
                                       'border-radius':'100px',
                                       height:'4rem'
                           
                                  }} alt="Profile"/>
                                  
                                      profile
                                  
                        
                        </div>)
                            }

                        </div>

                        <h4 className='text-primary'> See all...</h4>
                </h2>

                </div>
            </div>


        )
    }
}
export { FeedPost };
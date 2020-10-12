
import React, { Fragment } from 'react';
import Popup from '../popup/popup'
import ProfileIcon from '../ProfileIcon/ProfileIcon'
import axios from 'axios'
import openSocket from 'socket.io-client';
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
      posts: [],
      loading: false,
      Announcements: ['1', '2', '3', '4']
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
    this.loadPosts();
    const socket = openSocket('https://aleph-server.vercel.app/graphql');
    socket.on('posts', data => {
      if (data.action === 'create') {
        this.addPost(data.post);
      }
    });
    // console.log("I am showing posts");
    // console.log(this.state.posts);
  }

  addPost = post => {
    this.setState(prevState => {
      const updatedPosts = [...prevState.posts];
      updatedPosts.unshift(post);
      return {
        posts: updatedPosts
      };
    });
  };


  loadPosts = async (direction) => {
    this.setState({ posts: [] });
    const graphqlQuery = {
      query: `
      query{
        getPosts{
          posts{
            _id
            title
            content
            imageUrl
            creator {
              name
            }
            createdAt
          }
        }
      }
          `
    };
    console.log("@@@@@@@", this.props.accessToken);
    fetch('https://aleph-server.vercel.app/graphql', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + this.props.accessToken,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(graphqlQuery)
    })
      .then(res => {
        return res.json();
      })
      .then(resData => {
        if (resData.errors) {
          throw new Error('Fetching posts failed!');
        }
        console.log("here trying to fetch posts");
        console.log(resData);
        this.setState({
          loading: true,
          posts: resData.data.getPosts.posts
        });
        //console.log("is it done?", this.state.posts);
      })
      .catch(this.catchError);
    //console.log("can i reach here?");
  };

  togglePopup() {

    this.setState({
      ShowPopup: !this.state.ShowPopup
    })

  }
  AddPosts = (postData) => {
    this.togglePopup();
    alert('added succesfully');
    console.log(postData);


    const formData = new FormData();
    formData.append('imageUrl', postData.imageUrl);
    formData.append('content', postData.content);
    formData.append('title', postData.title);

    let graphqlQuery = {
      query: `
      mutation createPost($title: String!, $content: String!, $imageUrl: String!) {
        createPost(postInput: {title: $title, content: $content, imageUrl: $imageUrl}) {
          _id
          title
          content
          imageUrl
          creator {
            name
          }
          createdAt
        }
      }
    `,
      variables: {
        title: postData.title,
        content: postData.content,
        imageUrl: postData.imageUrl
      }
    };
    console.log("@@@@@@@", this.props.accessToken);
    fetch('https://aleph-server.vercel.app/graphql', {
      method: 'POST',
      body: JSON.stringify(graphqlQuery),
      headers: {
        Authorization: 'Bearer ' + this.props.accessToken,
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        return res.json();
      })
      .then(resData => {
        if (resData.errors && resData.errors[0].status === 422) {
          throw new Error(
            "Validation failed. Make sure the email address isn't used yet!"
          );
        }
        if (resData.errors) {
          console.log(resData.errors);
          throw new Error('User login failed!');
        }
        let resDataField = 'createPost';
        const post = {
          _id: resData.data[resDataField]._id,
          title: resData.data[resDataField].title,
          content: resData.data[resDataField].content,
          creator: resData.data[resDataField].creator,
          createdAt: resData.data[resDataField].createdAt,
          imagePath: resData.data[resDataField].imageUrl
        };
        let updatedPosts;
        this.setState(prevState => {
          updatedPosts = [...prevState.posts];
          updatedPosts.unshift(post);
        });
        return {
          posts: updatedPosts
        };
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className='row mx-auto' >
        <div className='col-sm-8'>

          <div className="row border-4 m-auto " >
            <ReactPlayer url='https://youtu.be/rlR4PJn8b8I' controls light volume playsinline playing width='100%' height='20vh' />
          </div>
          <div className='row my-4 mx-auto bg-light'>

            <ProfileIcon className='col-sm-3' />
            <h5 onClick={this.togglePopup.bind(this)} className='col-sm-8 text-muted mt-4'>Your Post Here.....</h5>


            <FolderOpenIcon font-size='large' className='col-sm-1 my-auto' />
            <PhotoLibraryTwoToneIcon color='primary' fontSize='large' className='col-sm-1 my-auto' />
          </div>
          {this.state.loading ?
            <div>
              <DisplayPosts data={this.state.posts} />
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


              {this.state.Announcements.map((val) => {
                return <h4> Announcement{val}</h4>
              })
              }

            </div>

            <h4 className='text-primary'> See all...</h4>
          </h2>
          <h2 className='mt-4'>
            Suggested
                        <div className='row'>


              {this.state.Announcements.map((val) =>
                <div className=''>

                  <img src='https://cdn3.iconfinder.com/data/icons/mixed-communication-and-ui-pack-1/48/general_pack_NEW_glyph_profile-512.png'
                    style={{
                      'border-radius': '100px',
                      height: '4rem'

                    }} alt="Profile" />

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
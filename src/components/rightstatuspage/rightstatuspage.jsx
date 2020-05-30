import React, { Component } from 'react';

import Stories from 'react-insta-stories';
import DeleteIcon from '@material-ui/icons/Delete';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import ProfileIcon from '../ProfileIcon/ProfileIcon'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import styled from 'styled-components';
import { AllEmoji } from '../emojis/emoji.jsx'
const Story = styled.img`
    width:27%;
    height:34%;
    margin-left:2%;
    :hover{
        width:38%;
        height:40%;
    }
    `
const imgUrl = "https://www.chatlineconnect.com/wp-content/uploads/2019/04/manhole1.jpg";
const stories = [
    {
        url: 'https://picsum.photos/1080/1920',
        seeMore: ({ close }) => (
            <div style={{ width: '100%', height: '100%' }}>Hello</div>
        ),
        header: {
            heading: 'Mohit Karekar',
            subheading: 'Posted 5h ago',
            profileImage: 'https://picsum.photos/1000/1000'
        }
    },
    {
        url:
            'https://fsa.zobj.net/crop.php?r=dyJ08vhfPsUL3UkJ2aFaLo1LK5lhjA_5o6qEmWe7CW6P4bdk5Se2tYqxc8M3tcgYCwKp0IAyf0cmw9yCmOviFYb5JteeZgYClrug_bvSGgQxKGEUjH9H3s7PS9fQa3rpK3DN3nx-qA-mf6XN',
        header: {
            heading: 'Mohit Karekar',
            subheading: 'Posted 32m ago',
            profileImage: 'https://picsum.photos/1080/1920'
        }
    },
    {
        url:
            'https://media.idownloadblog.com/wp-content/uploads/2016/04/iPhone-wallpaper-abstract-portrait-stars-macinmac.jpg',
        header: {
            heading: 'mohitk05/react-insta-stories',
            subheading: 'Posted 32m ago',
            profileImage:
                'https://avatars0.githubusercontent.com/u/24852829?s=400&v=4'
        }
    },
    {
        url: 'https://storage.googleapis.com/coverr-main/mp4/Footboys.mp4',
        type: 'video',
        duration: 1000
    },
    {
        url:
            'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        type: 'video',
        seeMore: ({ close }) => (
            <div style={{ width: '100%', height: '100%' }}>Hello</div>
        )
    },
    {
        url:
            'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        type: 'video'
    },
    'https://images.unsplash.com/photo-1534856966153-c86d43d53fe0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80'
];
class RightStatusPage extends Component {
    constructor() {
        super();
        this.state = {
            stories: stories,
            isPaused: false
        }
    }
    render() {
        return (
            <div>
                <div className='row ml-auto mb-auto'>
                    <div className='col-sm-9' style={{
                        backgroundImage: 'url("https://i2.wp.com/files.123freevectors.com/wp-content/original/110419-black-blurred-background-vector.jpg?w=800&q=95")',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        height:'100vh'
                    }}>
                        <div className='row'>
                            <div className='col-sm-1' >
                                <ProfileIcon style={{ height: '10%' }} />
                            </div>
                            <div className='col-sm-1'>
                                <DeleteIcon fontSize={'large'} style={{
                                    color: 'silver',
                                    height: '10%',

                                }} />

                            </div>
                            <div className='col-sm-1'>
                                <PauseCircleFilledIcon style={{
                                    color: 'silver',
                                    height: '10%'
                                }}
                                    onClick={() => {
                                        this.setState({
                                            isPaused: !this.state.isPaused
                                        })
                                    }} />

                            </div>
                            <div className='col-sm-1' style={{ paddingTop: '20%' }}>
                                <NavigateBeforeIcon style={{ backgroundColor: 'silver', width: '50px', height: '50px', borderStyle: 'solid', borderRadius: '100px', borderColor: 'silver' }} />
                            </div>
                            <div className='col-sm-6'>

                                <Stories
                                    stories={this.state.stories}
                                    defaultInterval={1500}
                                    height={610}
                                    isPaused={this.state.isPaused}
                                />
                            </div>
                            <div className='col-sm-1' style={{ paddingTop: '20%' }}>
                                <NavigateNextIcon style={{ backgroundColor: 'silver', width: '50px', height: '50px', borderStyle: 'solid', borderRadius: '100px', borderColor: 'silver' }} />
                            </div>
                        </div>
                        <div className='row mt-3'>


                            <input style={{ backgroundColor: 'rgba(0,0,0,0)', borderRadius: '20px', color: 'white', marginLeft: '30%', padding: '5px', width: '40%' }} placeholder='Reply....' />

                            <AllEmoji />

                        </div>
                    </div>
                    <div className='col-sm-3' style={{ backgroundColor: 'rgba(40,40,40,0.9)' }}>
                        <h3 style={{ color: 'white' }}>Story detail</h3>
                        {this.state.stories.map((
                            value, index) => {
                            return (
                                index < 2 ?
                                    <Story src={value.url} />
                                    : null
                            )
                        })}

                        <Story style={{ background: 'white', paddingTop: '10vh', paddingBottom: '10vh', paddingLeft: '1vw', paddingRight: '1vw' }} src={'https://cdn4.iconfinder.com/data/icons/material-design-content-icons/512/add-circle-512.png'} />
                        <hr style={{ borderTop: '1px solid white' }} />
                        <div>
                            <h4 style={{ color: 'white' }} > No Viewers Yet
                           <DeleteIcon fontSize={`large`} />

                            </h4>
                            <h6 className='mt-1 ' style={{ color: 'white' }}>
                                any people can see your story,you will see details here
                           </h6>
                            <h3 style={{ color: 'white' }}>
                                101 views
</h3>
                            <div className="viewOwnStatus">
                                <div>
                                    <img src={imgUrl} />
                                </div>
                                <div>
                                    <p className="userName" style={{ color: 'white' }}>{'user'}</p>
                                </div>
                                <div>
                                    <p className='userName' style={{ "fontSize": "10px" }}>3 mins ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export { RightStatusPage };
import React, { Component } from 'react';
import {AddStory} from '../../components/addstory/AddStory';
import StatusCard from '../../components/statuscard/StatusCard'

/*
    status object:
    {
        id:"asdasdas12312",
        name: "Alexa",
        profile: "...link to his pic",
        entries: [...status card object],
        new : 2
    }

    status card object:
    {
        id: "statusId1",
        ownerId: "asdasdas12312"
        url: "..link to the status or video",
        views: 123(maybe)
    }
*/

export default class StatusSelect extends Component {
    state ={
        userName: "Sagar Singh Rawal",
        imgUrl: "https://www.chatlineconnect.com/wp-content/uploads/2019/04/manhole1.jpg",
        new: 1,
        myStories : [
            {
                someJSON: "somthing"
            }
        ],
        allStories: [
            {
                name: "Alexa",
                imgUrl: "https://img1.kpopmap.com/2019/10/alexa-profile.jpg",
                new: 0
            },
            {
                name: "Ryan",
                imgUrl: "https://images.squarespace-cdn.com/content/v1/5a13450b32601e19896cedac/1557789518740-W5PAFJCN0L8DT34GXK7M/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/FFTF_Profile_500x500_Justin-Lester.jpg",
                new: 2
            },
            {
                name: "Paul",
                imgUrl: "https://66.media.tumblr.com/41c050315fed8eca4d5558661521aff8/tumblr_piury2fckD1valwms_540.jpg",
                new: 3
            }
        ]
    }
    statusSetting = ()=>{
        alert("Settings!!!");
    }


    render() {
        const {myStories, allStories, userName, imgUrl} = this.state;
        const {onClickAllStatus} = this.props;

        let allStatusContent = null, myStatusContent = null;
        if(allStories.length > 0) allStatusContent = allStories.map(story => {
            return (
                <StatusCard status={story} onClick={onClickAllStatus}/>
            )
        });
        return (
            <div style={{backgroundColor:'#262626',color:'white',height:'100vh'}}>
                {/* -------Header --------*/}
                <div className="statusHeader">
                    <div>
                        <h1 className="bold">Stories</h1>
                    </div>
                    <div>
                        <span className="material-icons screw" onClick={this.statusSetting}>settings</span>
                    </div>
                </div>
                {/* ------------------------*/}


                {/*  --------My Stories ---------*/}
                <h4>Your Story</h4>

                {this.state.myStories.length == 0 ?
                    <div className="addStatus">
                        <AddStory imgUrl = {imgUrl}/>
                        <div>
                            <a className="btn">
                                Add a Story
                            </a>
                            <p>Share a photo, video, or write something</p>
                        </div>
                    </div> : 
                    <div className="viewOwnStatus">
                        <div>
                            <img src={imgUrl} onClick={onClickAllStatus.bind(this, userName)}/>
                        </div>
                        <div>
                            <p className="userName">{userName}</p>
                        </div>
                        <div>
                            <AddStory imgUrl = {imgUrl}/>
                            <p style={{"fontSize":"10px"}}>Add another</p>
                        </div>
                    </div>
                }
                {/*  ------------------------*/}


                {/*--------All stories-----------*/}
                <h4>All Stories</h4>
                {this.state.allStories.length == 0 ? 
                    <h5 style={{"color":"gray"}}>
                        Nothing To Show
                    </h5>:
                    allStatusContent
                }
                {/*  ------------------------*/}
            </div>
        )
    }
}

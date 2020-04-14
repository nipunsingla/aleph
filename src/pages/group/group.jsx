import React from 'react';
import Course from '../../components/Course/Course';
import {GroupDetail} from '../../components/groupdetail/groupdetail'
import {PostPage} from '../../components/post/post'
class Group extends React.Component{
    constructor(){
        super();
        
    }
    render(){
        return(
            <div>
                <GroupDetail/>
                < PostPage />
            </div>
        )
    }
}
export {Group};
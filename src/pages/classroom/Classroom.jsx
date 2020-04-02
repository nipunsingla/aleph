import React, { Component } from 'react'
import ClassCourses from '../../components/ClassCourses/ClassCourses'
import LeftBar from '../../components/LeftBar/LeftBar'
import {Row,Col} from 'react-bootstrap'
export default class Classroom extends Component {
    render() {
        return (
                <div className='row ml-1' style={{
                    height:'100%'
                }}>
                 <LeftBar/>

                   <ClassCourses/>
           
           </div>

        )
    }
}

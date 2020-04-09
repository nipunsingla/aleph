import React from 'react'
import { Form, Media, Button } from 'react-bootstrap'
import Course from '../Course/Course'
import COURSE from './Courses.js'
import OtherDropDown from '../otherdropdown/otherdropdown'
import OTHERDROPDOWN from './otherdropdown.js';
class ClassCourses extends React.Component {
    constructor() {
        super();
        this.state={
            List: [],
            k:0,
            TotalList:COURSE
        }
    };
    

    AddClass = (e) => {
        this.setState({
            k:this.state.k+1,
        })
    }
    SeeAll=(e)=>{
        this.setState({
            k:COURSE.length,

        })
    }
    //   this.k=this.k+1;
    render() {
        return (
            <div className='mr-2'>
                
                   <div className='my-3 p-2' style={
                        {
                             'border-style':'solid',
                            'border-radius':'14px'
                            }
                    }>
                    <svg className="bi bi-search ml-1" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z" clip-rule="evenodd"/>
  <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" clip-rule="evenodd"/>
</svg>                   <input className='border-0'
type='text'  placeholder='search here...'></input>    
                    </div>

                <h3>
                    Classroom
        </h3>
                <ul className='list-unstyled'>
                {COURSE.slice(0,this.state.k).map((course,index)=><Course key={index} Course={course} onClick={this.props.action({subject:course.title, code:'abcd',set:'1'})}/>)}

                </ul>

                <Media as='li' className='mr-3 mt-2'>
                
                    <svg onClick={this.AddClass} className="bi bi-plus-circle-fill " width="3em" height="2.3em" viewBox="0 0 16 16" fill="blue" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M16 8A8 8 0 110 8a8 8 0 0116 0zM8.5 4a.5.5 0 00-1 0v3.5H4a.5.5 0 000 1h3.5V12a.5.5 0 001 0V8.5H12a.5.5 0 000-1H8.5V4z" clip-rule="evenodd"/>
</svg>
                    <Media.Body>
                        <h5 className='float-left ml-5 mt-2'>
                          
                            ADD Classes
              </h5>

                    </Media.Body>

                </Media>

            <a onClick={this.SeeAll} className='text-decoration-none text-primary btn'>
                See All Classes
            </a>



            {
            OTHERDROPDOWN.map((topic,index)=><OtherDropDown key={index} topic={topic}/>)}
      
           </div>
        )
    }
}
export default ClassCourses;
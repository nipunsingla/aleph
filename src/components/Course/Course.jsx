import React from 'react';

import { Form, Media, Button } from 'react-bootstrap'
const Course=({Course})=>{
    return(

        <Media as='li' className='mr-3 mt-2'>
        <img src={Course.imgUrl} style={{
            width: '4vw',
            height: '6vh'
            

        }}>
        </img>
        <Media.Body>
            <h5 className='float-left ml-5 mt-2'>
               {Course.title}
              </h5>
              <svg className="bi bi-three-dots float-right mt-2" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M3 9.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" clip-rule="evenodd"/>
</svg>

        </Media.Body>

    </Media>
    )
}
export default Course;
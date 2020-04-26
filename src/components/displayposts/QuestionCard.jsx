import React, { Component } from 'react'
import {Card} from 'react-bootstrap'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';


export default class QuestionCard extends Component {
    render() {
        const {userId, id, title, body} = this.props;
        return (
            <div>
                <Card>
                    <Card.Text className='row container'>
                        <div className='col-sm-2 '>
                        <img src='https://cdn.pixabay.com/photo/2015/06/19/21/24/the-road-815297__340.jpg'
                        style={{
                            width:'3rem',
                            height:'3rem',
                            borderRadius:"2rem",
                            borderColor:'skyblue',
                            borderBlockWidth:'2rem'
                        }}
                        
                        />
                            
                        </div>
                        <div className='col-sm-3'>
            Name
            <br>
            </br>
            Designation
        
                        </div>
                        <div className='col-sm-2 ml-auto mt-1'>
                            1 hour ago
                        </div>  
                        <div className='col-sm-1 mr-1'>
<MoreHorizIcon fontSize='large'/>
                        </div>  
                    </Card.Text>
<Card.Text className="mx-2 my-2">
    {body}
</Card.Text>
                            <img  className='card-img-top w-100 h-2' src='https://cdn.pixabay.com/photo/2015/06/19/21/24/the-road-815297__340.jpg'
                            style={{
                                height:'30vh'
                            }}
                            
                            ></img>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                  
                </Card>
                
            </div>
        )
    }
}

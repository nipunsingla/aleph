import React from 'react';
const dummy = [
    {
        title: 'Nipun',
        Desc: 'Quench your thrist of curosity'
    },
    {
        title: 'Partha',
        Desc: 'Quench your thrist of curosity'
    },
    {
        title: 'Sagar',
        Desc: 'Quench your thrist of curosity'
    },
    {
        title: 'Sonika',
        Desc: 'Quench your thrist of curosity 0574bb dummmy text jksdnkdn ndnfndjfndjnbjnj'
    }
    



]
class FeedCard extends React.Component {
    constructor() {
        super();

    }
    render() {
        return (
            <div className='row ml-auto mr-auto '>
                {dummy.map((value) => 
                    <div style={{
                        color:'white',
                        cursor:'pointer',
                        backgroundColor:'#0574bb',borderRadius:'14px',borderStyle:'solid',borderColor:'#0574bb'}} className='col-sm m-3'>
                            <h4 className='text-center border-0 my-1'>{value.title}</h4>
                            <p className='text-center border-0 my-2'>
                    {value.Desc}
                            </p>
                        </div>

                        )}
                    </div>
                )
    }
}
export {FeedCard};
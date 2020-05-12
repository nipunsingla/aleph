import React from 'react';
import SimpleBar from 'simplebar-react';

export const Chat = ({ chat, user ,wid}) => (

    <div style={{
        height:wid+'vh',
        overflow:'auto'
    }}
    >
            {

                chat.map((chats) => {
                    if (user != chats.sender) {
                        return (
                            <div className='list-group-item border-0'>
                            <div  className='col-12 my-2' >
                                    {user == chats.sender ? null : <span className='text-primary'>{chats.sender + ' '}</span>}
                                    <span className='text-muted ml-auto'>
                                        {chats.time}
                                    </span>
                                </div>
                            <div className='col-12 my-2'>
                                <div className='border-0'>

                                    <span style={{
                                        borderRadius: '20px',
                                        backgroundColor: 'grey',
                                        padding: '1%',
                                    }}>
                                        {chats.text}
                               
                                    </span>
                                    </div>
                               

                            </div>
                        </div>
                            )

                    }
                    else {
                        return (
                            <div style={{marginTop:'-1.3%',marginBottom:'-1.3%'}}>
                            <div  className=' border-0 list-group-item d-flex justify-content-end align-items-end'>
                                    {user == chats.sender ? null : <span className='text-primary'>{chats.sender + ' '}</span>}
                                
                                    <span className='text-muted'>
                                        {chats.time}
                                    </span>
</div>      <div style={{
    marginTop:'-1.6%',
}} className='list-group-item border-0 d-flex justify-content-end align-items-end'>
                      
                                    <span style={{
                                        borderRadius: '20px',
                                        backgroundColor: 'skyblue',
                                        padding: '1%',
                                        color:'white'
                                    }}>
                                        {chats.text}
                               
                                    </span>
                               

                        </div>
                        </div>
                        )
                    }

                }


                )
            }
</div>
)
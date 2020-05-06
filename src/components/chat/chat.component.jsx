import React from 'react';
import './chat.css'
import CustomScroll from 'react-custom-scroll';
export const Chat = ({ chat, user }) => (


    <CustomScroll>
            {

                chat.map((chats) => {
                    if (user != chats.sender) {
                        return (
                            <div  className='row ml-2'>
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
                            
                            <div  className='float-right row ml-2'>
                            <div  className='col-12 my-2' >
                                    {user == chats.sender ? null : <span className='text-primary'>{chats.sender + ' '}</span>}
                                    <span className='text-muted'>
                                        {chats.time}
                                    </span>
                                </div>
                            <div className='col-12 my-2'>
                                <div className='border-0'>

                                    <span style={{
                                        borderRadius: '20px',
                                        backgroundColor: 'skyblue',
                                        padding: '3%',
                                        color:'white'
                                    }}>
                                        {chats.text}
                               
                                    </span>
                                    </div>
                               

                            </div>
                        </div>
                        )
                    }

                }


                )
            }
</CustomScroll>
)
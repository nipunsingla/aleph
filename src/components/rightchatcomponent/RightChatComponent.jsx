import React, { useState } from 'react';
import VideocamIcon from '@material-ui/icons/Videocam';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import MicIcon from '@material-ui/icons/Mic';
import FolderIcon from '@material-ui/icons/Folder';
import { Chat } from '../../components/chat/chat.component'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import SendIcon from '@material-ui/icons/Send';
import Picker from 'emoji-picker-react';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

const url = 'data:image/jpeg;base64,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'

const dummy =
    [
        {
            sender: "Rishabh",
            text: "Hey, this is what I was talking about!",
            time: "22:01"
        },
        {
            sender: "Lucky",
            text: "same here, bro!",
            time: "22:07"
        },
        {
            sender: "Sagar",
            text: "hey buddy,How you doing?",
            time: "22:01"
        },
        {
            sender: "Rishabh",
            text: "Hey, this is what I was talking about!",
            time: "22:01"
        },
        {
            sender: "Rishabh",
            text: "Guys, you sure about this??. so I am gonna final this now!",
            time: "22:01"
        },
        {
            sender: "Lucky",
            text: "Hey, this is what I was talking about!",
            time: "22:01"
        }
        ,
        {
            sender: "Rishabh",
            text: "Hey, this is what I was talking about!",
            time: "22:01"
        },
        {
            sender: "Rishabh",
            text: "Guys, you sure about this??. so I am gonna final this now!",
            time: "22:01"
        },
        {
            sender: "Lucky",
            text: "Hey, this is what I was talking about!",
            time: "22:01"
        }
    ]

class RightChatComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            textHolder: '',
            openPanel: false,

        }
    }
    onEmojiClick = (event, emojiObject) => {
        if (emojiObject != null) {
            this.setState({
                textHolder: this.state.textHolder + emojiObject.emoji + ''
            })
        }
    }
    Add = () => {
        this.setState({
            openPanel: !this.state.openPanel
        })
    }
    AddText = (event) => {
        this.setState({

            textHolder: event.target.value
        })
    }
    render() {
        return (
            <div >
                <div className='row overflow-hidden'>
                    <div className='col-sm-6'>
                        <ul className="float-left list-group list-group-horizontal">
                            <li className='list-group-item border-0'>
                                <img src={url} style={{width:'5vw'}} />

                            </li>
                            <li className="border-0 my-auto" style={{width:'5vw'}}>
                                <h3>Web Development
</h3>

                            </li>
                        </ul>

                    </div>
                    <div className='col-sm-6 my-auto'>
                        <ul className="float-right list-group list-group-horizontal">
                            <li className='list-group-item border-0'><VideocamIcon fontSize={`large`} /></li>
                            <li className="list-group-item border-0"><AttachFileIcon fontSize={`large`} /></li>
                            <li className="list-group-item border-0"><MoreVertIcon fontSize={`large`} /></li>
                        </ul>
                    </div>
                </div>
                <div className='row'>

                    <div className='col-sm-4'>
                        <ul className="list-group list-group-horizontal">
                            <li className='list-group-item border-0'><span> Post</span></li>
                            <li className="list-group-item border-0"><span> Chat</span></li>
                            <li className="list-group-item border-0"><span> Files</span></li>
                            <li className="list-group-item border-0"><span> More </span></li>
                        </ul>
                    </div>
                    <div className='col-sm-8'>
                        <ul className='float-right mr-3' style={
                            {
                                'border-style': 'solid',
                                'border-radius': '15px',
                                padding: '0.3%'
                            }}
                        >

                            <svg className="bi bi-search ml-1" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z" clip-rule="evenodd" />
                                <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" clip-rule="evenodd" />
                            </svg>
                            <input className='border-0' type='text' placeholder='search here...'></input>

                        </ul>
                    </div>


                </div>
                <div className='overflow-hidden'>
                    <Chat chat={dummy} user={'Sagar'} />
                </div>
                <div className='fixed-bottom' style={{ backgroundColor: 'white' }}>

                   
                    <div className='col-sm-12'>
                        <ul className="list-group list-group-horizontal">
                            <li className='list-group-item border-0'><AddCircleOutlineIcon fontSize={`large`} /></li>
                            <li className="list-group-item border-0"><AttachFileIcon fontSize={`large`} /></li>

                            <li className="list-group-item border-0"><PhotoLibraryIcon fontSize={`large`} /></li>
                            <li className="list-group-item border-0"><MicIcon fontSize={`large`} /></li>
                            <div style={{
                                borderRadius: '20vw',
                                paddingLeft: '1%',
                                width: '100%',
                                borderColor:'black',
                                borderStyle:'solid',
                                'max-height':'1%'

                            }} className="my-2"
                            >
                                <input
                                style={{
                                    width:'94%',

                                borderRadius: '30px',
                                    borderBlockEndStyle:'none',
                                }}
                                className='mt-1 ml-0 border-0'
                                    placeholder="Your text here" value={this.state.textHolder} onChange={this.AddText.bind(this)} />

                                    <InsertEmoticonIcon style={{
                                    width:'5%'
                                    }}className=' float-right mr-1 display-inline' color={`light`} onClick={this.Add.bind(this)} fontSize={`large`} />

                            </div>
                            <li className='list-group-item border-0'><SendIcon fontSize={`large`} style={{ color: 'rgb( 231, 84, 128)' }} /></li>
                        </ul>
                    </div>
                    <div className='col-sm-12'>


{this.state.openPanel ?
    (<div 
        style={{
            float:'right'
        }}>
        <Picker style={{
            width:'100%'

        }}
            onEmojiClick={this.onEmojiClick.bind(this)} />

    </div>) : null
}
</div>
                </div>

            </div >
        )
    }
}
export { RightChatComponent }
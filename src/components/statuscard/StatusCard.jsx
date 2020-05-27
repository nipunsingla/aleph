import React, { Component } from 'react'

export default class StatusCard extends Component {
    onHorizClick = () =>{
        alert("Dots Clicked");
    }
    blueBorder = {
        "border":"3px solid #027bfe"
    }
    grayBorder = {
        "border":"3px solid #373737"
    }
    render() {
        const {status, onClick} = this.props;
        let st = status.new === 0 ? this.grayBorder : this.blueBorder;
        return (
            <div className="statusCard">
                <div>
                    <img src={status.imgUrl} onClick={onClick.bind(this, status)} style={st}/>
                </div>
                <div onClick={onClick.bind(this, status.name)}>
                    <h5>{status.name}</h5>
                    {/* <p>{status.new == 0 ? null : status.new + " new"}</p> */}
                    <p>{status.new} new</p>
                </div>
                <div>
                    <span class="material-icons" onClick={this.onHorizClick}>
                        more_horiz
                    </span>
                </div>
            </div>
        )
    }
}

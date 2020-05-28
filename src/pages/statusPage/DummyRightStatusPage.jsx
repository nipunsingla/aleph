import React, { Component } from 'react'
import './DummyRightStatusPage.style.scss';
import sv from './s.svg'
export default class DummyRightStatusPage extends Component {
    render() {
        const { current } = this.props;
        return (
            <div className="border1">
                <img src={sv} />
     
                    <h3>
                        Click On To View Their Stories
                </h3>
     
    
                <h2>
                    "Stories Make Changes"
                </h2>
    
            </div>
        )
    }
}

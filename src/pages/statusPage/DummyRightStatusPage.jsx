import React, { Component } from 'react'

export default class DummyRightStatusPage extends Component {
    render() {
        const {current} = this.props;
        return (
            <div className="border">
                <h1>{current}</h1>
            </div>
        )
    }
}

import React from 'react';

class OtherDropDown extends React.Component {
    constructor() {
        super();
        this.state = {
            k: false
        }
    }
    Change() {
        console.log('dnsjdjs')
        this.setState({
            k: (!this.state.k)
        })
    }
    render() {
        return (
            <div className='card'>
                <div className='list-group'>
                <h5 className='card-title mr-auto ml-1 mt-2 text-decoration-none btn'
                    onClick={() => this.Change()}>
                    {this.props.topic.title}
                
                <svg class="ml-3 bi bi-caret-down-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 01.753 1.659l-4.796 5.48a1 1 0 01-1.506 0z"/>
</svg></h5>
                {
                    this.state.k ? 
        this.props.topic.topic.map((a) => <li className='list-group-item'>{a.title}</li>)
                   :
                   <div></div>
               }

</div>
            </div>)

    }
}
export default OtherDropDown;
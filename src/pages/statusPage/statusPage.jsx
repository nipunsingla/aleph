import React ,{Component} from 'react';

import Stories from 'react-insta-stories'
import GroupSelect from '../../components/group/GroupSelect';
import {RightStatusPage} from '../../components/rightstatuspage/rightstatuspage'
class statusPage extends React.Component{
    render(){
        return(
            <div className='row'>
                <div className='col-sm-12'>
                <RightStatusPage/>

                </div>
            </div>
        )
    }
}
export {statusPage};
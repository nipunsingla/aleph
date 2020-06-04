import React, { Fragment } from "react";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './ProfileIcon.css';

const Profile = () => {

  return (
    <Fragment className='ml-1'>

      <img className='ml-1' height='60rem'
        style={{
          'border-radius': '100px'

        }} alt="Profile" />

    </Fragment>
  );
};

export default Profile;
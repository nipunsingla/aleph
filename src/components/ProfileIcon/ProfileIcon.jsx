import React, { Fragment } from "react";
import { useAuth0 } from "../../auth/react-auth0-spa";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './ProfileIcon.css';

const Profile = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <Fragment className='ml-1'>
   
      <img className='ml-1' src={user.picture} height='60rem'
       style={{
            'border-radius':'100px'

       }} alt="Profile"/>
   
    </Fragment>
  );
};

export default Profile;
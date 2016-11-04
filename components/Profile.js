import React from 'react'

class Profile extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div className='form-control sideInfo'>
      <img className='largeProfilePic' src='https://source.unsplash.com/random' alt='FILE' />
      <ul className='list-unstyled'>
        <li>Following</li>
        <li>Followers</li>
        <li>My Chirps</li>
        <li>All Chirps</li>
        <li>Logout</li>
      </ul>
    </div>
  }
}

export default Profile

import React from 'react'

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      file: ''
    }
  }
  componentDidMount(){
    fetch('https://fathomless-gorge-57039.herokuapp.com/api/user/?api_token=' + sessionStorage.getItem('chirp'))
    .then(response => response.json())
    .then((response) => { this.setState ({file: 'https://fathomless-gorge-57039.herokuapp.com/' + response.user.file})
  })
}

  render() {
    return <div className='form-control sideInfo'>
      <img className='largeProfilePic' src={this.state.file} alt='FILE' />
      <ul className='list-unstyled'>
        <li>Following</li>
        <li>My Chirps</li>
        <li>All Users</li>
        <li>Logout</li>
      </ul>
    </div>
  }
}

export default Profile

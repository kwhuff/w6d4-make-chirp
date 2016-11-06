import React from 'react'

class Chirp extends React.Component {
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
    return <div className='individualChirp'>
      <img className='chirpFilePic' src={this.state.file} alt='profile photo' /> @{this.props.data.user.name}
      <p>
        {this.props.data.chirp}<span className='timeStamp'> - Chirped at {this.props.data.created_at}</span>
      </p>
    </div>
  }
}

export default Chirp

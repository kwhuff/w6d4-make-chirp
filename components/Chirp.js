import React from 'react'

class Chirp extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <div className='individualChirp'>
      <img className='chirpFilePic' src={'https://ngroki.io' + this.props.data.user.avatar} alt='profile photo' /> @{this.props.data.username}
      <p>
        {this.props.data.chirp}<span className='timeStamp'> - Chirped at TIME STAMP</span>
      </p>
    </div>
  }
}

export default Chirp

import React from 'react'
import ChirpTimeline from './ChirpTimeline'

class NewChirp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chirpText: '',
      chirpToGo: [],
      updatedChirps: props.updatedChirps
      // chirps: []
    }
    this.typing = this.typing.bind(this)
    this.click = this.click.bind(this)
    this.render = this.render.bind(this)
    // this.newTweets = this.newTweets.bind(this)
    // this.updatingTheTweets = this.updatingTheTweets.bind(this)
    }
  typing(e){
    this.setState({
      chirpText: e.target.value
    })
  }
  click(e){
    fetch('https://fathomless-gorge-57039.herokuapp.com/api/chirp?api_token=' + sessionStorage.getItem('chirp'), {
      body: JSON.stringify({
        chirp: this.state.chirpText,
      }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(this.state.updatedChirps)
    // .then(response => console.log(response))
    // .then(ChirpTimeline.updateChirps)

    this.setState({
      chirpText: ''
    })
    // window.location.reload()
}


  render() {
    return <div className='form-control chirpArea'>
      <input type='text' id='chirp' name='chirp' onChange={this.typing} value={this.state.chirpText} maxLength='170'/>
      <button type='button' id='chirpSubmit' className='btn btn-primary chirpButton' onClick={this.click}>Chirp!</button>
      {NewChirp}
    </div>
  }
}

export default NewChirp

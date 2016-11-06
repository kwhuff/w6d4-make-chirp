import React from 'react'
import ChirpTimeline from './ChirpTimeline'

class NewChirp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chirpText: '',
      chirpToGo: [],
      // chirps: []
    }
    this.typing = this.typing.bind(this)
    this.click = this.click.bind(this)
    this.render = this.render.bind(this)
    // this.fetchChirps = this.fetchChirps.bind(this)
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
    .then((response) => { this.setState ({chirps: response.posts})
  })
}
componentDidMount(){
  fetch('https://fathomless-gorge-57039.herokuapp.com/api/all?api_token=' + sessionStorage.getItem('chirp'))
  .then(response => response.json())
  .then((response) => { this.setState ({chirps: response.posts})
  // console.log(this.state.chirps)
})
}
// fetchChirps(){
//   fetch('https://fathomless-gorge-57039.herokuapp.com/api/users/index?api_token=' + sessionStorage.getItem('chirp'))
//   .then(response => response.json())
//   .then((response) => { this.setState ({chirps: response.posts})
// })
// }

  render() {
    // var newChirps = this.state.chirpText
    // console.log(this.state.chirpText)
    fetch('https://fathomless-gorge-57039.herokuapp.com/api/all?api_token=' + sessionStorage.getItem('chirp'))
    .then(response => response.json())
    .then((response) => { this.setState ({chirps: response.posts})
  })
    return <div className='form-control chirpArea'>
      <input type='text' id='chirp' name='chirp' onChange={this.typing} value={this.state.chirpText} maxLength='170'/>
      <button type='button' id='chirpSubmit' className='btn btn-primary chirpButton' onClick={this.click}>Chirp!</button>
      {NewChirp}
    </div>
  }
}

export default NewChirp

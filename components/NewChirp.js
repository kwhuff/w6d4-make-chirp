import React from 'react'

class NewChirp extends React.Component {
  constructor(props) {
    super(props)
    // window.location.reload()
  }
  render() {
    return <div className='form-control chirpArea'>
      <input type='text' id='chirp' name='chirp' onChange={this.updateValue} value={this.state.value} />
      <button type='button' id='chirpSubmit' className='btn btn-primary chirpButton' onClick={this.sendChirp}>Chirp!</button>
    </div>
  }
}

export default NewChirp

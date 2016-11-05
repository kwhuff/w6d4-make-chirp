import React from 'react'

class NewChirp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chirpText: ''
    }
    // window.location.reload()
    this.typing = this.typing.bind(this)
    this.click = this.click.bind(this)
  }
  typing(e){

  }
  click(e){
    
  }
  render() {
    return <div className='form-control chirpArea'>
      <input type='text' id='chirp' name='chirp' onChange={this.updateValue} value={this.state.value} />
      <button type='button' id='chirpSubmit' className='btn btn-primary chirpButton' onClick={this.sendChirp}>Chirp!</button>
    </div>
  }
}

export default NewChirp

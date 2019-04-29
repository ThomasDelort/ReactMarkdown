import React, { Component } from 'react'
import './App.css'

import marked from 'marked'
import { sampleText } from './sampleText'

class App extends Component {
  state = {
    text: sampleText
  }

  componentDidMount () {
    const text = localStorage.getItem('text')
    text ? this.setState({ text }) : this.setState({ text:sampleText })
  }

  componentDidUpdate () {
    localStorage.setItem('text', this.state.text)
  }

  handleChange = event => this.setState({ text : event.target.value })

  renderText = text => marked(text, { sanitize:true })

  render() {
    return (
      <div className="container">
        <div className="row">

          <div className="col-sm-6">
            <textarea 
            className="form-control" 
            rows="35"
            onChange={this.handleChange}
            value={this.state.text} />
          </div>

          <div className="col-sm-6">
            <div dangerouslySetInnerHTML={{ __html:this.renderText(this.state.text)}}></div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;

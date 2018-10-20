import React, { Component } from 'react';
import './App.css';
// import { request } from 'http';
import axios from 'axios'

class App extends Component {

  state = {
    data: [],
    select: false
  }

  componentDidMount() {
    this.moveHome()
  }

  handleonClick = (author) => {
    axios.get('http://34.223.226.117:5000/author/' + author) //
      .then(res => {
        this.setState({
          data: res.data,
          select: true
        })
      })
      .catch(err => console.log('err', err))
  }

  moveHome = () => {
    axios.get('http://34.223.226.117/images')//
      .then(res => {
        this.setState({
          data: res.data,
          select: false
        })
      })
      .catch(err => console.log('err', err))
  }

  render() {
    console.log('render', this.state.select)
    return (
      <div className="App">
        <div className='codesplash' onClick={() => this.moveHome()}>
          Code Splash
        </div>
        <div className='title'>{this.state.select ?
          (<span>{this.state.data[0].author}</span>)
          : ''
        }
        </div>
        <ul>
          {this.state.data.length ?
            this.state.data.map((data) => {
              var url = 'https://picsum.photos/200/300?image=' + data.id;
              return <span className='thumnail' onClick={() => this.handleonClick(data.author)}><img src={url} key={data.id} alt={data.filename} /></span>
            })
            : 'loading...'}
        </ul>
      </div>
    );
  }
}

export default App;

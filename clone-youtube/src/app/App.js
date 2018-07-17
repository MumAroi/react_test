import React, { Component } from 'react'
import YTSearch from 'youtube-api-search'
import './style.css'

import SearchBar from '../components/search_bar'
import VideoDetail from '../components/video_detail'
import VideoList from '../components/video_list'

const API_KEY = "AIzaSyCqjaLUdTMEAXsFShA_f-QWVnZSsOUD5Io"


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      videos: []
    }

    YTSearch({ key: API_KEY, term: 'test' }, (videos) => {
      console.log(videos)
      this.setState({ videos })
    })

  }


  render() {
    return (
      <div className="App">
        <SearchBar />
        <VideoDetail  video={this.state.videos[0]} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App

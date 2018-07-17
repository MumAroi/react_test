import React, { Component } from 'react'
import YTSearch from 'youtube-api-search'
import _ from 'lodash'
import './style.css'

import SearchBar from '../components/search_bar'
import VideoDetail from '../components/video_detail'
import VideoList from '../components/video_list'

const API_KEY = "AIzaSyCqjaLUdTMEAXsFShA_f-QWVnZSsOUD5Io"


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null
    }
    this.videoSearch('dota2')
    
  }
  
  videoSearch(term){
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      // console.log(videos)
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    })
  }

  render() {
    // console.log(this.state)
    const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300)
    return (
      <div className="App">
        <SearchBar onSelectTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList videos={this.state.videos} onVideoSelect={ (selectedVideo)=>{this.setState({selectedVideo})} }/>
      </div>
    );
  }
}

export default App

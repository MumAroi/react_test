import React, { Component } from 'react';

import Header from '../component/header';
import AlbumList from '../component/albumlist';

import '../style/artists.css';

const REQ_URL = 'http://localhost:3004/artists';

class Artists extends Component {
    constructor(props){
        super(props);
        this.state = {
            artist: ''
        };
    }

    componentDidMount(){
        const { artistid }  = this.props.match.params;
        if(artistid){
            fetch(`${REQ_URL}/${artistid}`,{
                method: 'get'
            })
            .then(response => response.json())
            .then(json => {
                this.setState({
                    artist:json
                });
            });
        }
    }

    render(){
        const styles = {
            background: `url('/images/covers/${this.state.artist.cover}.jpg') no-repeat`
        };
        return(
            <div>
                <Header/>
                <div className="artist_bio">
                    <div className="avatar">
                        <span style={styles} ></span>
                    </div>
                    <div className="bio">
                        <h3>{this.state.artist.name}</h3>
                        <div className="bio_text">
                            {this.state.artist.bio}
                        </div>
                    </div>
                    <AlbumList albumList={this.state.artist.albums} />
                </div>
            </div>
        );
    }
}

export default Artists;
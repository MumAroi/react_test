import React, { Component } from 'react';

// step 66 : create url teams
const URL_TEAMS = 'https://json-server-nba.herokuapp.com/teams';

class Team extends Component {
    constructor(props){
        super(props);

        this.state = {
            data: []
        }
    }

    // step 67 : create  func componentDidMount
    componentDidMount(){
        fetch(`${URL_TEAMS}?&name=${this.props.match.params.id}`,{method: 'GET' })
        .then(response=>response.json())
        .then(json=>{
            this.setState({
                data: json
            });
        });
    }

    // step 68 : create func renderData
    renderData = ({data}) =>{
        return data.map((item)=>{
            return(
                <div key={item.id} className="team-data-wrapper" >
                    <div className="left" >
                        <img alt={item.name} src={`/images/teams/${item.logo}`} />
                    </div>
                    <div className="right" >
                        <h1>{item.name}</h1>
                        <p>{item.description}</p>
                        <hr/>
                        <div className="squad" >
                            {this.renderSquad(item.squad)}
                        </div>
                    </div>
                </div>
            );
        });
    }

    // step 69 : create func renderSquad
    renderSquad = (squad) => {
        return squad.map((item)=>{
            return(
                <div key={item.name} className="item" >
                    <img alt={item.name} src={'/images/avatar.png'} />
                    <h4>{item.name}</h4>
                    <div className="node" >
                        <span>Number:</span>{item.number}
                    </div>
                    <div className="node" >
                        <span>PPG:</span>{item.PPG}
                    </div>
                    <div className="node" >
                        <span>APG:</span>{item.APG}
                    </div>
                    <div className="node" >
                        <span>RPG:</span>{item.RPG}
                    </div>
                </div>
            );
        });
    }

    render(){
        return(
            <div className="team-data">
                {this.renderData(this.state)}
            </div>
        );
    }
}

export default Team;
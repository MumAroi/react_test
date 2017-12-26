import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';

// step 57 : create URL_TEAMS
const URL_TEAMS = 'https://json-server-nba.herokuapp.com/teams';

// strp 60 : create fadeAnimation setting
const fadeAnimation = {
    transitionName: 'fade',
    transitionAppear: true,
    transitionAppearTimeout:500,
    transitionEnter: true,
    transitionEnterTimeout: 500,
    transitionLeave: true,
    transitionLeaveTimeout: 500
};

class Teams extends Component {
    constructor(props){
        super(props);
        // step 55 : cteate default state
        this.state = {
            teams: '',
            filtered: [],
            keyword:''
        };
    }

    // step 58 : create func componentDidMount
    componentDidMount(){
        fetch(URL_TEAMS,{
            method: 'GET'
        })
        .then(response=>response.json())
        .then((json)=>{
            this.setState({
                teams: json,
                filtered: json
            });
        });
    }

    // step 59 : create func renderList
    renderList = ({filtered}) => {
        return filtered.map((item)=>{
            return(
                <Link to={`/team/${item.name}`} key={item.id} className="team-item">
                    <img alt={item.name} src={`/images/teams/${item.logo}`} />
                </Link>
            );
        })
    }

    render(){
        return(
            // step 56 : create layout
            <div className="teams-component">
                <div className="teams-input">
                    <input type="text" placeholder="Seach for a team" />
                </div>
                <div className="teams-container">
                    <CSSTransitionGroup {...fadeAnimation}>
                        {this.renderList(this.state)}
                    </CSSTransitionGroup>
                </div>
            </div>
        );
    }
} 
export default Teams;
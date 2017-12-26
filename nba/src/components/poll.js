 import React, { Component } from 'react' ;

// url fetch
 const URL_HOME = 'https://json-server-nba.herokuapp.com/teams';
//  step 47 : create Poll component
 class Poll extends Component {
    constructor(props){
        super(props);
        this.state = {
            pollTeams:[]
        };
    }
    
    
    // step : 49 create func fetchPoll
    fetchPoll(){
        fetch(`${URL_HOME}?poll=true&_sort=count&_order=desc`, {method: 'GET'})
        .then(response => response.json())
        .then(json => {
            console.log(json)
            this.setState({
                pollTeams: json
            });
        });
    }

    // step 50 : creact componentDidMount
    componentDidMount(){
        this.fetchPoll();
    }

    // step 51 : create addCount
    addCount(count, id){
        fetch(`${URL_HOME}/${id}`,{
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({count: count+1})
        })
        .then(()=>{
            this.fetchPoll();
        });
    }

    // step : 48 create func renderPoll
    renderPoll(){
        // if(this.state.pollTeams){  // if this.state.pollTeams == array can skip error
            const position = ['1ST','2ND','3RD'];
            return this.state.pollTeams.map((item, index)=>{
                return(
                    <div key={item.id} className="poll-item" onClick={()=>this.addCount(item.count, item.id)} >
                        <img alt={item.name} src={`/images/teams/${item.logo}`} />
                        <h4>{position[index]}</h4>
                        <div>{item.count} Vote</div>
                    </div>
                );
            });
        // }
    }

     render(){
         return(
             <div className = "home-poll">
                <h3>Who will be next champion ?</h3>
                <div className = "poll-container">
                    {this.renderPoll()}
                </div>
             </div>
         );
     }
 }

 export default Poll;
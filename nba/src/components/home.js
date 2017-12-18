// step 10 :  import react and React-Component
import React, {Component} from 'react';

// step 19 : import component featured
import Featured from './featured';
// step 31 : import Subscriptions
import Subscriptions from './subscriptions';
// step 38 : import Block
import Blocks from './blocks';
// step 46 : import poll
import Poll from './poll';
// step 24 : create variable URL_HOME
const URL_HOME = 'https://json-server-nba.herokuapp.com/home';

// step 11 : create Home class
class Home extends Component {
    constructor(props){
        super(props);
        // step 22 : create state default
        this.state = {
            home: ''
        }
    }
    // step 23 : load data
    componentDidMount(){
        fetch(URL_HOME, {method: 'GET'})
        .then(response =>  response.json())
        .then(json => {
            this.setState({ 
                home: json
            });
        });
    }

    render(){
        return(
            <div>
                {/* step 21 : load featured and put props*/}
                <Featured slides={this.state.home.slider} />
                {/* step 33 : load component Subscription */}
                <Subscriptions/>
                {/* step 40 : load component Blocks */}
                <Blocks blocks={this.state.home.blocks} />
                <Poll />
            </div>
        );
    }
}

// step 12 : export class 
export default Home;
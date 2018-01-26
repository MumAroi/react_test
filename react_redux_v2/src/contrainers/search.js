import React, { Component } from 'react';
// step 19 : connect redux
import { connect } from 'react-redux';
// step 20 : import getCars from action
import getCars from '../actions';
// step 23 : bindActionCreators
import { bindActionCreators } from 'redux';

class Search extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            keyword: ''
        }
    }

    // step 9 : create func handleChange
    handleChange = (event) => {
        this.setState({
            keyword: event.target.value
        });
    }

    // strp 10 : use componentDisMount
    componentDidMount(){
        // console.log(this.state);
    }

    // step 11 : create func searchCars
    searchCars = (event) => {
        event.preventDefault();
        // step 26 : uase func from acontion
        this.props.getCars(this.state.keyword);
    }

    render(){
        return(
            // step 5 : component search
            <div className="main-search">
                <form onSubmit={this.searchCars}>
                    <input type="text"  valur={this.state.keyword} onChange={this.handleChange} />
                </form>
            </div>
        );
    }
}

// step 22 : map dispath to props
function mapDispathToProps(dispath){
    return(
        // step 24 : bind action
        bindActionCreators({getCars},dispath)
    );
}

// step 25 : connect store
export default connect(null, mapDispathToProps)(Search);
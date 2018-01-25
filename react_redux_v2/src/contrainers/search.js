import React, { Component } from 'react';

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
        console.log(this.state);
    }

    // step 11 : create func searchCars
    searchCars = (event) => {
        event.preventDefault();
        console.log(this.state);
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

export default Search;
import React, { Component } from 'react'

class SearchBar extends Component {
    render(){
        return (
            <from calssName="input-grouop">
                <input/>
                <span calssName="input-group-btn">
                    <button type="submit" calssName="btn btn-secondary">Submit</button>
                </span>
            </from>
        )
    }
}

export default SearchBar
import React, { Component } from 'react'

class SearchBar extends Component {

    constructor(props) {
        super(props)

        this.state = {
            term: ""
        }
    }

    handleInputChange = (event) => {
        const target = event.target
        const { value, name } = target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <from calssName="input-grouop">
                <div class="input-group mb-3">
                    <input className="form-control" name="term" placeholder="Enter your contries." value={this.state.term} onChange={this.handleInputChange} />
                    <div class="input-group-append">
                        <button type="submit" className="btn btn-outline-secondary">Submit</button>
                    </div>
                </div>
            </from>
        )
    }
}

export default SearchBar
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../../actions'

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

    handleSubmit= (event) => {
        event.preventDefault()
        // console.log(this.state)
        this.props.fetchWeather(this.state.term)
        this.setState({
            term: ''
        })
    }

    render() {
        return (
            <form className="input-grouop" onSubmit={this.handleSubmit}>
                <div className="input-group mb-3">
                    <input className="form-control" name="term" placeholder="Enter your contries." value={this.state.term} onChange={this.handleInputChange} />
                    <div className="input-group-append">
                        <button type="submit" className="btn btn-outline-secondary">Submit</button>
                    </div>
                </div>
            </form>
        )
    }
}

function mapDispatchToProps(dispath) {
    return bindActionCreators({ fetchWeather }, dispath)
}
// export default SearchBar
export default connect(null, mapDispatchToProps)(SearchBar)
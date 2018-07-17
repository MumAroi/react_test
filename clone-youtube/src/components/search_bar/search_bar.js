import React, {
    Component
} from 'react'


class SearchBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            term: ''
        }
    }

    render() {
        return (
            <div className="search-bar">
                <input name="term" value={this.state.term} onChange={this.handleInputChange} />
            </div>
        )
    }

    handleInputChange = (event) => {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name
        this.setState({
            [name]: value
        })
        this.props.onSelectTermChange(value)
    }
}

export default SearchBar
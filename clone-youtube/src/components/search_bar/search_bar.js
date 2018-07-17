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
        return <input name="term" value={this.state.term} onChange={this.handleInputChange} />
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
}

export default SearchBar
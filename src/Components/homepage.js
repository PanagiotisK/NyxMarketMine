import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import SearchCriteria from './searchCriteria';
import Products from './products';

class homepage extends Component {

    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('Will search TVs in : ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                {/* <SearchCriteria /> */}


                <form onSubmit={this.handleSubmit}>
                    <label>
                        Choose a store:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="">&nbsp;</option>
                            <option value="plaisio">Plaisio</option>
                        </select>
                    </label>
                    <input type="submit" value="Search.." />
                </form>

                <Products />
            </div >
        );
    }
}

export default homepage;
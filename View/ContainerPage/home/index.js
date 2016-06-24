import React from 'react'
import {
    Link
} from 'react-router'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {}
    componentWillMount() {}
    render() {
        return (
            <div id="Home">
                        <h1 style={{textAlign:'center',lineHeight:'300px'}}>Welcome YSMC FE UI !</h1>
            </div>
        );
    }
}

module.exports = Home
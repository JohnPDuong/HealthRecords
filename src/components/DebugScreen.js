import React from 'react'

export default class DebugScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }

    handleResize = e => {
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }

    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
    }

    render() {
        return (
            <div>
                {this.state.width}px / {this.state.height} px        
            </div>
        );
    }
};
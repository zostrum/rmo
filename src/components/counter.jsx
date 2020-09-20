import React, { Component } from "react";

class Counter extends Component {
    
    render() {
        return (
            <div>
                <span className={this.getBadgeClasses()}>
                    {this.formatCount()}
                </span>
                <button
                    onClick={() => {
                        this.props.onIncrement(this.props.counter);
                    }}
                    className="btn btn-secondary btn-sm"
                >
                    Increment
                </button>
                <button onClick={ () => { this.props.onRemove(this.props.counter.id)} } className="btn btn-danger m-2 btn-sm">Delete</button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value ? value : "zero";
    }
}

export default Counter;

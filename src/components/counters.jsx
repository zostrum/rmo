import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
    state = {};
    render() {
        return (
            <div>
                <button
                    onClick={this.props.onReset}
                    className="btn btn-primary sm m-2"
                >
                    Clear
                </button>
                
                {this.props.counters.map((counter) => (
                    <Counter
                        key={counter.id}
                        onRemove={this.props.onRemove}
                        onIncrement={this.props.onIncrement}
                        counter={counter}
                    />
                ))}
            </div>
        );
    }
}

export default Counters;

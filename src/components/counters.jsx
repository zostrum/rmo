import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
    state = {};

    render() {
        const {
            onReset,
            counters,
            onRemove,
            onIncrement,
            onDecrement,
        } = this.props;

        return (
            <div>
                <button onClick={onReset} className="btn btn-primary sm m-2">
                    Clear
                </button>
                {counters.map((counter) => (
                    <Counter
                        key={counter.id}
                        onRemove={onRemove}
                        onIncrement={onIncrement}
                        onDecrement={onDecrement}
                        counter={counter}
                    />
                ))}
            </div>
        );
    }
}

export default Counters;

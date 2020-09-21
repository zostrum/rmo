import React, { Component } from "react";

class Counter extends Component {
    render() {
        const { counter, onRemove, onIncrement, onDecrement } = this.props;

        return (
            <div className="row">
                <div className="col-1">
                    <span className={this.getBadgeClasses()}>
                        {this.formatCount()}
                    </span>
                </div>
                <div className="col">
                    <button
                        onClick={() => {
                            onIncrement(counter);
                        }}
                        className="btn btn-secondary btn-sm m-1"
                    >
                        +
                    </button>
                    <button
                        onClick={() => {
                            onDecrement(counter);
                        }}
                        className="btn btn-secondary btn-sm m-1"
                        disabled={counter.value === 0 ? "disabled" : ""}
                    >
                        -
                    </button>
                    <button
                        onClick={() => {
                            onRemove(counter.id);
                        }}
                        className="btn btn-danger m-2 btn-sm m-1"
                    >
                        X
                    </button>
                </div>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes = classes + (this.props.counter.value === 0 ? "warning" : "primary");
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value ? value : "zero";
    }
}

export default Counter;

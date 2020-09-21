import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";
import React, { Component } from "react";

class App extends Component {
    state = {
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 1 },
            { id: 3, value: 3 },
            { id: 4, value: 4 },
        ],
    };

    render() {
        return (
            <div>
                <Navbar counters={this.state.counters.filter(c => c.value).length}/>
                <main className="container">
                    <Counters
                        counters={this.state.counters}
                        onReset={this.handleReset}
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                        onRemove={this.handleRemove}
                    />
                </main>
            </div>
        );
    }

    handleReset = () => {
        const counters = this.state.counters.map((counter) => {
            counter.value = 0;
            return counter;
        });
        this.setState({ counters });
    };

    handleIncrement = (counter) => {
        const counters = [...this.state.counters];
        counters.map((c) => {
            if (c.id === counter.id) {
                c.value++;
            }
            return c;
        });
        this.setState({ counters });
    };

    handleDecrement = (counter) => {
        const counters = [...this.state.counters];
        counters.map((c) => {
            if (c.id === counter.id && c.value > 0) {
                c.value--;
            }
            return c;
        });
        this.setState({ counters });
    };

    handleRemove = (id) => {
        this.setState({
            counters: this.state.counters.filter(
                (counter) => counter.id !== id
            ),
        });
    };
}

export default App;

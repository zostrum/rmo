import React, { Component } from "react";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <span>
                    Navbar{" "}
                    <span className="badge badge-pill badge-secondary">
                        {this.props.counters}
                    </span>{" "}
                </span>
            </nav>
        );
    }
}

export default Navbar;

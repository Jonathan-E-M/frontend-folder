import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    state = {
        nums: [
            { id: 1 },
            { id: 2 },
            { id: 3 },
            { id: 4 }
        ]

    }

    render() {
        return (
            <div>

                {this.state.nums.map(num =>
                    <Link key={num.id} to={{ pathname: '/component' + num.id }} style={{ padding: '5px' }}>
                        Component {num.id}
                    </Link>
                )}

                <Link to="/">
                    Redux Container
                </Link>

            </div>
        );
    }
}
export default Header;
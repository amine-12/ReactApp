import React, {Component} from 'react'

class NavBar extends Component {
    render() {
        return (
            <div class="nav-container">
                <nav>
                    <h1>Portfolio</h1>
                    <ul>
                    <li><a class="sign" href="./login form/login.html">Sign in</a></li>
                    <li><a class="sign" href="./login form/register.html">Sign up</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default NavBar;
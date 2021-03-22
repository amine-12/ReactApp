import React, {Component} from 'react'

class Features extends Component {
    render() {
        return (
            <div class="features-container">
                <div class="card">
                    <svg width="30rem" height="7rem" viewBox="0 0 16 16" class="bi bi-wallet2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.5 4l10-3A1.5 1.5 0 0 1 14 2.5v2h-1v-2a.5.5 0 0 0-.5-.5L5.833 4H2.5z"/>
                        <path fill-rule="evenodd" d="M1 5.5A1.5 1.5 0 0 1 2.5 4h11A1.5 1.5 0 0 1 15 5.5v8a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 13.5v-8zM2.5 5a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-11z"/>
                    </svg>
                    <h4>All at one place</h4>
                    <p>Portfolio will link with your bank account and keep track of all your transactions.</p>
                </div>
                <div class="card">
                    <img src="./img/money.png" alt="" />
                    <h4>Personalized subscription</h4>
                    <p>We belive that our clients should pay only for what they use. This is why made your subscription fee based on the number of transactions done within a month.</p>
                </div>
                <div class="card">
                    <img src="./img/secure.png" alt="" />
                    <h4>Secure</h4>
                    <p>Your privacy and security is our top priority. We use measures like multi-factor authentication, designed to help you protect access to your account.</p>
                </div>
                 <img class="wave" src="./img/wave.png" alt=""/>
            </div>
        );
    }
}

export default Features;
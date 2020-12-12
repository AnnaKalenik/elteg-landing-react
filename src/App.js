import React from 'react';
import Header from './components/Header/Header.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Clients from './components/Clients.jsx';
import Calculations from './components/Calculations.jsx';
import Contacts from './components/Contacts/Contacts.jsx';
import Request from './components/Request.jsx';
import Map from './components/Map.jsx';
import Footer from './components/Footer.jsx';

import './css/style.css';
class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="elteg-landing">
                <Header />
                <About />
                <Services />
                <Clients />
                <Calculations />
                <Contacts />
                <Request />
                <Map />
                <Footer />
            </div>
        );
    }
}

export default App;
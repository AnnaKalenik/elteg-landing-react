import React from 'react';
import Header from './components/Header/Header.jsx';
import About from './components/About.jsx';
import Services from './components/Services/Services.jsx';
import Clients from './components/Clients.jsx';
import Contacts from './components/Contacts/Contacts.jsx';
import Form from './components/Form.jsx';
import Map from './components/Map.jsx';
import Footer from './components/Footer.jsx';

import './css/style.css';
import './css/media.css';

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
                <Contacts />
                <Form />
                <Map />
                <Footer />
            </div>
        );
    }
}

export default App;
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import { Provider } from 'react-redux';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={this.props.store}>
                <div className="app">
                    <Header />
                    <Content />
                    <Footer />
                </div>
            </Provider>
        );
    }
}

export default App;

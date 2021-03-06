import React from 'react'
import {
    Grid,
    Row
} from 'react-bootstrap'
import { connect } from 'react-redux'
import Main from './Main';
import Docs from './Docs';
import Tests from './Tests';
import Results from './Results'
import About from './About';
import FAQ from './FAQ'
import { questions } from '../questions'

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.switchContent = this.switchContent.bind(this);
    }

    switchContent(currentPage) {
        switch(currentPage.pageName) {
            //case 'MAIN': return <Main />
            case 'RESULTS': return <Results />;
            case 'DOCS': return <Docs subPageName={currentPage.subPageName} anchor={currentPage.anchor} />;
            case 'TESTS': return <Tests testID={currentPage.subPageName} questions={questions} />;
            case 'ABOUT': return <About />;
            case 'FAQ': return <FAQ />
            default: return <Main />
        }
    }

    render() {
        return (
            <Grid>
                <Row>
                    {this.switchContent(this.props.currentPage)}
                </Row>
            </Grid>
        );
    }
}

export default connect(
    state => ({
        currentPage: state.currentPage
    })
)(Content);

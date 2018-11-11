import React from 'react'
import {
    Grid,
    Row,
    Col,
} from 'react-bootstrap'
import { connect } from 'react-redux'
import Main from './Main';
import Docs from './Docs';
import Tests from './Tests';
import Results from './Results'
import About from './About';
import FAQ from './FAQ'
import Learning from './Learning'
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
            case 'FAQ': return <FAQ />;
            case 'LEARNING': return <Learning />;
            default: return <Main />
        }
    }

    render() {
        return (
            <Grid className="content">
                <Row>
                    <Col xs={1} sm={1} md={1} lg={1}>Sidebar</Col>
                    <Col xs={10} sm={10} md={10} ls={10}>{this.switchContent(this.props.currentPage)}</Col>
                    <Col xs={1} sm={1} md={1} ls={1}>Sidebar</Col>
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

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
import Purpose from './Purpose'
import Tacitcs from './Tactics'
import Description from './Description'
import Software from './Software'
import Work from './Work'
import TechData from './TechData'
import TechDescription from './TechDescription'
import AboutProg from './AboutProg'
import Deploy from './Deploy'
import LearningProg from './LearningProg'
import SectionLearning from './SectionLearning'
import SectionMain from './SectionMain'
import SectionTheory from './SectionTheory'
import Issues from './Issues'
import Prepare from './Prepare'
import Usage from './Usage'
import { questions } from '../questions'

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.switchContent = this.switchContent.bind(this);
    }

    switchContent(currentPage) {
        if (window.__debug__) debugger;
        switch(currentPage.pageName) {
            //case 'MAIN': return <Main />
            case 'RESULTS': return <Results />;
            case 'DOCS': return <Docs subPageName={currentPage.subPageName} anchor={currentPage.anchor} />;
            case 'TESTS': return <Tests testID={currentPage.subPageName} questions={questions} />;
            case 'ABOUT': return <About />;
            case 'FAQ': return <FAQ />;
            case 'LEARNING': return <Learning />;
            case 'PURPOSE': return <Purpose />;
            case 'TACTICS': return <TechData />;
            case 'DESCRIPTION': return <Description />;
            case 'SOFTWARE': return <Software />;
            case 'WORK': return <Work />;
            case 'TECHDATA': return <TechData />;
            case 'TECHDESCRIPTION': return <TechDescription />;
            case 'ABOUT_PROG': return <AboutProg />;
            case 'DEPLOY': return <Deploy />;
            case 'LEARNING_PROG': return <LearningProg />;
            case 'SECTION_LEARNING': return <SectionLearning />;
            case 'SECTION_MAIN': return <SectionMain />;
            case 'SECTION_THEORY': return <SectionTheory />;
            case 'ISSUES': return <Issues />;
            case 'PREPARE': return <Prepare />;
            case 'USAGE': return <Usage />;
            default: return <Main />
        }
    }

    render() {
        return (
            <Grid className="content">
                {this.switchContent(this.props.currentPage)}
            </Grid>
        );
    }
}

export default connect(
    state => ({
        currentPage: state.currentPage
    })
)(Content);

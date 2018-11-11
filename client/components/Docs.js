import React from 'react'
import { connect } from 'react-redux'
import {
    Nav,
    NavItem,
    Button,
} from 'react-bootstrap'
import * as docs from '../docs'
import { navigate } from '../actions'
import { docsCategoryNames as categoryNames } from '../constants';

require('smoothscroll-polyfill').polyfill();


class Docs extends React.Component {
    constructor(props) {
        super(props);
        this.state = { activeKey: this.props.subPageName || 0 }
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(eventKey) {
        this.setState({
            activeKey: eventKey
        });
    }

    componentDidMount() {
        if(this.props.currentPage.anchor != undefined) {
            document.getElementById(this.props.currentPage.anchor).scrollIntoView({ behavior: 'smooth' });
            document.getElementById(this.props.currentPage.anchor).classList.add('anchor');
        }
    }

    showDocs(ID) {
        return [docs.tp, docs.cables, docs.application, docs.composition, <docs.structure />, docs.safety][ID] || 'succ';
    }

    render() {
        return (
            <div>
                <Button bsStyle="link" onClick={() => this.props.navigate('MAIN')}>Вернуться в главное меню</Button>
                <Nav bsStyle="tabs" activeKey={this.state.activeKey} onSelect={this.handleSelect}>
                    {categoryNames.map((e,i) => {
                        return <NavItem href='#' title={e} key={i} eventKey={i}>{e}</NavItem>
                    })}
                </Nav>
                {this.showDocs(this.state.activeKey)}
            </div>
        );
    }
}

export default connect(
    state => state,
    dispatch => ({
        navigate(pageName, subPageName, anchor) {
            dispatch(navigate(pageName, subPageName, anchor))
        }
    })
)(Docs);

import React from 'react'
import { connect } from 'react-redux'
import {
    Nav,
    NavItem,
    Navbar,
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
                <div>
                    <Navbar>
                        <Nav>
                            <NavItem eventKey={1} onClick={() => this.props.navigate('MAIN')}><span className="glyphicon glyphicon-home" aria-hidden="true"></span>Главное меню</NavItem>
                        </Nav>
                    </Navbar>
                </div>
                <div>
                    <Navbar>
                        <Nav className="docs-nav">
                            <NavItem className="docs-item" eventKey={1} onClick={() => this.props.navigate('PURPOSE')}>Назначение</NavItem>
                            <NavItem className="docs-item" eventKey={2} onClick={() => this.props.navigate('TACTICS')}>Тактико-технические характеристики</NavItem>
                            <NavItem className="docs-item" eventKey={3} onClick={() => this.props.navigate('WORK')}>Состав</NavItem>
                            <NavItem className="docs-item" eventKey={4} onClick={() => this.props.navigate('SOFTWARE')}>Программное обеспечение</NavItem>
                            <NavItem className="docs-item" eventKey={5} onClick={() => this.props.navigate('DESCRIPTION')}>Принцип работы</NavItem>
                        </Nav>
                    </Navbar>
                </div>
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

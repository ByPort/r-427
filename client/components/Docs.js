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
                <Button bsStyle="link" onClick={() => this.props.navigate('MAIN')}>Вернуться в главное меню</Button>
                <div>
                    <Navbar>
                        <Nav>
                            <NavItem eventKey={1} onClick={() => this.props.navigate('PURPOSE')}>Назначение и состав</NavItem>
                            <NavItem eventKey={2} onClick={() => this.props.navigate('TACTICS')}>Тактико-технические характеристики</NavItem>
                            <NavItem eventKey={3} onClick={() => this.props.navigate('DESCRIPTION')}>Описание конструкции</NavItem>
                            <NavItem eventKey={4} onClick={() => this.props.navigate('SOFTWARE')}>Программное обеспечение</NavItem>
                            <NavItem eventKey={5} onClick={() => this.props.navigate('WORK')}>Принцип работы</NavItem>
                            <NavItem eventKey={6} onClick={() => this.props.navigate('TECHDATA')}>Технические данные</NavItem>
                            <NavItem eventKey={7} onClick={() => this.props.navigate('TECHDESCRIPTION')}>Техническое описание</NavItem>
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

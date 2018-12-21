import React from 'react'
import { connect } from 'react-redux'
import {
    Nav,
    NavItem,
    Navbar,
    Button,
    PageHeader,
} from 'react-bootstrap'
import * as docs from '../docs'
import { navigate } from '../actions'
import { docsCategoryNames as categoryNames } from '../constants';

require('smoothscroll-polyfill').polyfill();

import '../assets/teory.jpg';


class SectionTheory extends React.Component {
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
                <Navbar>
                    <Nav>
                        <NavItem className="nav-prev-section" eventKey={1} onClick={() => this.props.navigate('ABOUT')}><span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>Предыдущий раздел</NavItem>
                        <NavItem className="nav-main-menu" eventKey={2} onClick={() => this.props.navigate('MAIN')}><span className="glyphicon glyphicon-home" aria-hidden="true"></span>Главное меню</NavItem>
                    </Nav>
                </Navbar>
                <PageHeader>Раздел "Теория"</PageHeader>
                <div className="greater">
                    <p>Скриншот раздела теории</p>
                    <img className="pic1" src="img/teory.jpg"/>
                    <p>
                        <span className="bold">Назначение основных элементов:</span>
                    </p>
                    <ul>
                    <li>подраздел «Назначение и состав» предназначен для ознакомления с назначением АТС ФМ с основными её составными частями.</li>
                    <li>подраздел «Тактико-технические данные предназначен для ознакомления с тактико-техническими характеристиками АТС ФМ.</li>
                    <li>подраздел «Программное обеспечание» предназначен для ознакомления с архитектурой программной настройки АТС ФМ.</li>
                    <li>подраздел «Принцип работы» предназначен для ознакомления с основным принципом работы автоматической телефонной станции.</li>
                    </ul>
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
)(SectionTheory);

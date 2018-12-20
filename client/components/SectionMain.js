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

import '../assets/ИКМ.png';
import '../assets/КИ.png';
import '../assets/коммутация.png';
import '../assets/модельЦАТС.png';
import '../assets/ттх.jpg';
import '../assets/main.jpg';
import '../assets/obychenie.jpg';
import '../assets/bloki.jpg';


class SectionMain extends React.Component {
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
                <PageHeader>Главная страница</PageHeader>
                <div className="greater">
                    <p>Скриншот главного окна</p>
                    <img className="pic1" src="img/bloki.jpg"/>
                    <p>
                        <span className="bold">Назначение основных элементов:</span>
                    </p>
                    <ul>
                    <li>
                    «БЛОК 1» разработан для вывода основного меню программы, благодаря которому можно свободно переходить по разделам, ознакомиться с версией программы и ее требованиями.
                    </li>
                    <li>
                    «БЛОК 2» разработан для перехода к разделу теории, где обучаемый сможет ознакомиться с основными тактико-техническими данными АТС ФМ, основными комплектующими с подробным описанием каждого элемента входящего в состав автоматической телефонной станции.
                    </li>
                    <li>
                    «БЛОК 3» разработан для обучения принципу работы автоматической телефонной станции, комплексной её настройке, ознакомления с возомжными неисправностями и способами их устранения.
                    </li>
                    <li>
                    «БЛОК 4» разработан для проверки уровня знаний обучаемого с помощью группы тестов.
                    </li>
                    <li>
                    «БЛОК 5» разработан для перехода к разделу помощи, где обучаемый сможет получить помощь в освоении данного программного комплекса.
                    </li>
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
)(SectionMain);

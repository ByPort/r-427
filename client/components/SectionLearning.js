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


class SectionLearning extends React.Component {
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
                <PageHeader>Раздел "Обучение"</PageHeader>
                <div className="greater">
                    <p>Скриншот раздела «Обучение»</p>
                    <img className="pic1" src="img/obychenie.jpg" alt=""/>
                    <p>
                        <span className="bold">Назначение основных элементов:</span>
                    </p>
                    <ol>
                    <li>
                    <span className="bold">«Порядок подготовки АТС к применению»</span> - подраздел с указанием мер безопасноти, требований к электропитанию и ознакомлением с порядком включения АТС ФМ
                    </li>
                    <li>
                    <span className="bold">«Порядок обучения использования АТС»</span> - ознакомление с правилами эксплуатации АТС Бета
                    </li>
                    <li>
                    <span className="bold">«Отображение возможных неисравностей»</span> - ознакомление с возможными возникающими неисправностями и способами их устранения
                    </li>
                    </ol>
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
)(SectionLearning);

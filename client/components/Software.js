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

import '../assets/Struktura-PO.jpg';


class Software extends React.Component {
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
                        <NavItem className="nav-prev-section" eventKey={1} onClick={() => this.props.navigate('DOCS')}><span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>Предыдущий раздел</NavItem>
                        <NavItem className="nav-main-menu" eventKey={2} onClick={() => this.props.navigate('MAIN')}><span className="glyphicon glyphicon-home" aria-hidden="true"></span>Главное меню</NavItem>
                    </Nav>
                </Navbar>
                <PageHeader>Программное обеспечение</PageHeader>
                <div className="greater">
                    <p>Программное обеспечение АТСЭ ФМ состоит из двух основных частей:</p>
                    <ul>
                        <li>Системное ПО</li>
                        <li>Прикладное ПО</li>
                    </ul>
                    <p>
                        Системное ПО - программное обеспечение собственно АТС – поддерживает межпроцессорный обмен, контролирует состояние оборудования с выдачей аварийных сообщений, позволяет осуществлять управление коммутационным полем, производить первичную обработку линейной и абонентской сигнализации.
                    </p>
                    <p>
                        Прикладное ПО обеспечивает связь пульта оператора ПЭВМ с АТС и позволяет оператору производить контроль функционирования всех блоков АТС, сбор и анализ диагностической и статистической информации, тарификацию, а также производить изменение конфигурации системы.
                    </p>
                    <p>
                        Наиболее полную информацию о состоянии АТС можно получить только с пульта управления, который является неотъемлемой частью системы. Наличие центрального пульта управления станцией позволяет организовать специализированное рабочее место для организации получения информации о работе АТС и ее управления.
                    </p>
                    <p>
                        Структура пульта управления показана ниже:
                    </p>
                    <img className="pic1" src="img/Struktura-PO.jpg"/>
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
)(Software);

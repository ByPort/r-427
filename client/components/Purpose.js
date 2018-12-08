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


class Purpose extends React.Component {
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
                <div style={{fontSize: '1.5em'}}>
                    <PageHeader>Назначение</PageHeader>
                    <p>
                        АТС предназначена для обеспечения открытой автоматической и полуавтоматической (заказной) телефонной связи на стационарных пунктах различных звеньев управления
                    </p>
                    <p>
                        АТС ФМ это комплекс цифрового коммутационного оборудования, основу которого составляет коммутационная система с распределенным полем и децентрализованным управлением (модульный принцип построения с многоступенчатой иерархией).
                    </p>
                    <p>
                        АТС обеспечивает:
                    </p>
                    <ul>
                        <li>автоматическую внутристанционную связь;</li>
                        <li>автоматическую исходящую и входящую связь в пределах местной телефонной сети;</li>
                        <li>входящую и исходящую дальнюю автоматическую связь;</li>
                        <li>транзитную связь между входящими и исходящими линиями;</li>
                        <li>транзитную связь между входящими и исходящими линиями;</li>
                        <li>передачу данных.</li>
                    </ul>
                    <p>
                        Дополнительные возможности и виды обслуживания:
                    </p>
                    <ul>
                        <li>полное или частичное ограничение внешней связи;</li>
                        <li>регистрация информации об исходящих разговорах;</li>
                        <li>возможность отмены всех услуг абонента по директиве администрации;</li>
                        <li>серийное искание;</li>
                        <li>наведение справки во время разговора;</li>
                        <li>передача вызова на указанный ТА (переадресация);</li>
                        <li>передача вызова в случае занятости абонента;</li>
                        <li>повторный вызов без набора номера</li>
                        <li>ввод, отмена, проверка код-пароля;</li>
                        <li>замена код-пароля;</li>
                        <li>передача вызова в случае неответа абонента;</li>
                        <li>конференц-связь трех и более абонентов;</li>
                        <li>уведомление о поступлении нового вызова;</li>
                        <li>сокращенный набор номера.</li>
                    </ul>
                    <p>
                        Использование стандартизованных интерфейсов для реализации внутренних и внешних подключений обеспечивает интеграцию станций АТС и сетей на их основе в существующие системы связи, а также последовательное наращивание функциональных возможностей АТС.
                    </p>
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
)(Purpose);

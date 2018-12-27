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

import '../assets/t1.jpg';
import '../assets/t2.jpg';
import '../assets/t3.jpg';


class Control extends React.Component {
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
                        <NavItem className="nav-prev-section" eventKey={1} onClick={() => this.props.navigate('LEARNING')}><span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>Предыдущий раздел</NavItem>
                        <NavItem className="nav-main-menu" eventKey={2} onClick={() => this.props.navigate('MAIN')}><span className="glyphicon glyphicon-home" aria-hidden="true"></span>Главное меню</NavItem>
                    </Nav>
                </Navbar>
                <PageHeader>Раздел "Контроль знаний"</PageHeader>
                <div className="greater">
                <img className="pic1" src="img/t1.jpg"/>
                <p className="text-center font-italic">Скриншот раздела «Контроль знаний»</p>
                <p>После выбора соответствующего раздела тестирования осуществляется переход к тесту, состоящему из 10 вопросов</p>
                <p>Необходимо указать свои имя и фамилию, а также номер группы и выбрать вариант теста</p>
                <img className="pic1" src="img/t2.jpg"/>
                <p>В конце тестирования система выдает:</p>
                <ul>
                    <li>Общее затраченное время</li>
                    <li>Количество правильных ответов</li>
                    <li>Выставляет оценку обучаемому</li>
                </ul>
                <img className="pic1" src="img/t3.jpg"/>
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
)(Control);

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

import '../assets/ввод пароля.jpg';
import '../assets/вход в меню генерации 1.jpg';
import '../assets/вход в меню генерации 2.jpg';
import '../assets/вход в меню пучков.jpg';
import '../assets/выбор атс.jpg';
import '../assets/генерация.jpg';
import '../assets/загрузка из атс 1.jpg';
import '../assets/загрузка из атс 2.jpg';
import '../assets/меню генерации.jpg';
import '../assets/меню программы.jpg';
import '../assets/создание пучка 1.jpg';
import '../assets/создание пучка 2.jpg';
import '../assets/создание пучка 3.jpg';
import '../assets/создание пучка 4.jpg';
import '../assets/создание пучка 5.jpg';


class Usage extends React.Component {
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
                <PageHeader>Порядок обучения использования АТС</PageHeader>
                <div className="greater">
                <img className="pic1" src="img/ввод пароля.jpg"/>
                <p className="text-center font-italic">Ввод пароля</p>
                <img className="pic1" src="img/вход в меню генерации 1.jpg"/>
                <p className="text-center font-italic">Вход в меню генерации 1</p>
                <img className="pic1" src="img/вход в меню генерации 2.jpg"/>
                <p className="text-center font-italic">Вход в меню генерации 2</p>
                <img className="pic1" src="img/вход в меню пучков.jpg"/>
                <p className="text-center font-italic">Вход в меню пучков</p>
                <img className="pic1" src="img/выбор атс.jpg"/>
                <p className="text-center font-italic">Выбор атс</p>
                <img className="pic1" src="img/генерация.jpg"/>
                <p className="text-center font-italic">Генерация</p>
                <img className="pic1" src="img/загрузка из атс 1.jpg"/>
                <p className="text-center font-italic">Загрузка из атс 1</p>
                <img className="pic1" src="img/загрузка из атс 2.jpg"/>
                <p className="text-center font-italic">Загрузка из атс 2</p>
                <img className="pic1" src="img/меню генерации.jpg"/>
                <p className="text-center font-italic">Меню генерации</p>
                <img className="pic1" src="img/меню программы.jpg"/>
                <p className="text-center font-italic">Меню программы</p>
                <img className="pic1" src="img/создание пучка 1.jpg"/>
                <p className="text-center font-italic">Создание пучка 1</p>
                <img className="pic1" src="img/создание пучка 2.jpg"/>
                <p className="text-center font-italic">Создание пучка 2</p>
                <img className="pic1" src="img/создание пучка 3.jpg"/>
                <p className="text-center font-italic">Создание пучка 3</p>
                <img className="pic1" src="img/создание пучка 4.jpg"/>
                <p className="text-center font-italic">Создание пучка 4</p>
                <img className="pic1" src="img/создание пучка 5.jpg"/>
                <p className="text-center font-italic">Создание пучка 5</p>
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
)(Usage);

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


class AboutProg extends React.Component {
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
                <PageHeader>О программе</PageHeader>
                <div className="greater">
                    <p><span className="bold">Разработчик:</span> Драгунов Сергей Игоревич</p>
                    <p><span className="bold">Версия:</span> 1.0</p>
                    <p><span className="bold">Год выпуска:</span> 2019 г.</p>
                    <p><span className="bold">Оборудование:</span> АТС ФМ</p>
                    <p>
                        <span className="bold">Системные требования, предъявляемые к программе:</span>
                        <ul>
                            <li>процессор 1  ГГц и выше</li>
                            <li>оперативная память 1024 Мб и выше</li>
                            <li>видеокарта 128 Мб и выше</li>
                            <li>свободное место на жестком диске ~500 Мб</li>
                            <li>устройства взаимодействия с пользователем - клавиатура и мышь</li>
                            <li>ОС Windows x86 или x64</li>
                            <li>установленный .NET Framework версии не ниже 3.5</li>
                        </ul>
                    </p>
                    <hr/>
                    <p>
                        Данная программа позволяет в несколько раз уменьшить время изучения принципа автономатической телефонной станции и может заметно увеличить уровень подготовки личного состава подразделений и войск связи, а также совершенствовать образовательный процесс при подготовке специалистов войск связи.
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
)(AboutProg);

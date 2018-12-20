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
import '../assets/de1.jpg';
import '../assets/de2.jpg';
import '../assets/de3.jpg';
import '../assets/de4.jpg';
import '../assets/de5.jpg';


class Deploy extends React.Component {
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
                <PageHeader>Руководство по установке и удалению</PageHeader>
                <div className="greater">
                    <p>
                        <span className="bold">Требования</span>
                    </p>
                    <ul>
                    <li>процессор 1  ГГц и выше</li>
                    <li>оперативная память 1024 Мб и выше</li>
                    <li>видеокарта 128 Мб и выше</li>
                    <li>свободное место на жестком диске ~500 Мб</li>
                    <li>устройства взаимодействия с пользователем - клавиатура и мышь</li>
                    <li>ОС Windows x86 или x64</li>
                    <li>установленный .NET Framework версии не ниже 3.5</li>
                    </ul>
                    <p>
                        <span className="bold">Установка</span>
                    </p>
                    <ol>
                    <li>
                    Запустить установщик программы, для этого запустить 'ATS-FM_Setup_1_0_0.exe'. Выполнить установку согласно пунктам установщика.
                    <img className="pic1" src="img/de1.jpg" alt=""/>
                    <img className="pic1" src="img/de2.jpg" alt=""/>
                    </li>
                    <li>
                    По завершению установки появится возможность сразу запустить обучающую программу, либо зайти в папку у становленным программным комплексом и запустить в ней файл 'ATS-FM.exe'(По-умолчанию, полный путь к файлу с программой следующий: 'C:\Program Files\ATS-FM\ATS-FM.exe' )
                    <img className="pic1" src="img/de3.jpg" alt=""/>
                    </li>
                    </ol>
                    <p>
                        <span className="bold">Удаление</span>
                    </p>
                    <ul>
                    <li>
                    Зайти в папку у становленным программным комплексом и запустить в ней файл 'Uninstall ATS-FM.exe'(По-умолчанию, полный путь к файлу с программой следующий: 'C:\Program Files\ATS-FM\Uninstall ATS-FM.exe' ) и действовать далее согласно пунктам мастера по установке.
                    <img className="pic1" src="img/de4.jpg" alt=""/>
                    <img className="pic1" src="img/de5.jpg" alt=""/>
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
)(Deploy);

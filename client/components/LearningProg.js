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
import '../assets/de3.jpg';


class LearningProg extends React.Component {
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
                <PageHeader>Обучающая программа</PageHeader>
                <div className="greater">
                    <p>Обучающая программа представляет собой программный комплекс, оформленный по принципу веб-сайтов, и предназначена для изучения тактико-технических характеристик автоматической телефонной станции, для просмотра и изучения фотографий, основных её комплектующих, а также ознакомления с принципом настройки и работы с программным обеспечением.</p>
                    <p>
                        <span className="bold">Начало работы:</span>
                    </p>
                    <ol>
                    <li>
                    Запустить файл 'ATS-FM.exe'(По-умолчанию, полный путь к файлу с программой следующий: 'C:\Program Files\ATS-FM\ATS-FM.exe' )
                    <img className="pic1" src="img/de3.jpg" alt=""/>
                    </li>
                    <li>
                    После запуска файла появится стартовое окно обучающей программы
                    <img className="pic1" src="img/main.jpg" alt=""/>
                    </li>
                    </ol>
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
)(LearningProg);

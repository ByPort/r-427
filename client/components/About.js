import React from 'react';
import { connect } from 'react-redux'
import {
    PageHeader,
    Button,
    Navbar,
    Nav,
    NavItem,
} from 'react-bootstrap';
import { navigate } from '../actions'

const About = (props) => (
    <div>
        <Navbar>
            <Nav>
                <NavItem eventKey={1} onClick={() => props.navigate('MAIN')}><span className="glyphicon glyphicon-home" aria-hidden="true"></span>Главное меню</NavItem>
            </Nav>
        </Navbar>
        <div style={{fontSize: '1.5em', marginTop: '20px'}}>
        <p>Данный программный комплекс позволяет в несколько раз уменьшить время изучения принципа работы автоматической телефонной станции и может заметно увеличить уровень подготовки личного состава подразделений войск связи, а также совершенствовать образовательный процесс при подготовке специалистов войск связи.</p>
        <p>Данный раздел помощи поможет в освоении данного программного комплекса.
        Для ознакомления с тем или иным разделом, выберите интересующий Вас раздел из списка. Удачи!</p>
        </div>
        <div>
            <Navbar>
                <Nav className="docs-nav">
                <NavItem className="docs-item" eventKey={1} onClick={() => props.navigate('DEPLOY')}>Руководство по установке и удалению</NavItem>
                <NavItem className="docs-item" eventKey={2} onClick={() => props.navigate('LEARNING_PROG')}>Обучающая программа</NavItem>
                <NavItem className="docs-item" eventKey={3} onClick={() => props.navigate('SECTION_MAIN')}>Главная страница</NavItem>
                <NavItem className="docs-item" eventKey={4} onClick={() => props.navigate('SECTION_THEORY')}>Раздел "Теория"
</NavItem>
                <NavItem className="docs-item" eventKey={5}>Раздел "Контроль знаний"</NavItem>
                <NavItem className="docs-item" eventKey={6} onClick={() => props.navigate('SECTION_LEARNING')}>Раздел "Обучение"</NavItem>
                <NavItem className="docs-item" eventKey={7} onClick={() => props.navigate('ABOUT_PROG')}>О программе</NavItem>
                </Nav>
            </Navbar>
        </div>
    </div>
)

export default connect(
    state => state,
    dispatch => ({
        navigate(pageName, subPageName, anchor) {
            dispatch(navigate(pageName, subPageName, anchor))
        }
    })
)(About);

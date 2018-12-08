import React from 'react';
import { connect } from 'react-redux'
import {
    PageHeader,
    Button,
    Nav,
    NavItem,
    Navbar,
} from 'react-bootstrap';
import { navigate } from '../actions'
import '../assets/f1.jpg';
import '../assets/f2.jpg';
import '../assets/f3.jpg';
import '../assets/f4.jpg';
import '../assets/f5.jpg';
import '../assets/f6.jpg';
import '../assets/f7.jpg';
import '../assets/f8.jpg';
import '../assets/f9.jpg';
import '../assets/f10.jpg';
import '../assets/f11.jpg';
import '../assets/f12.jpg';
import '../assets/f13.jpg';
import '../assets/f14.jpg';
import '../assets/f15.jpg';
import '../assets/f16.jpg';
import '../assets/f17.jpg';
import '../assets/f18.jpg';
import '../assets/f19.jpg';
import '../assets/f20.jpg';
import '../assets/f21.jpg';
import '../assets/f22.jpg';
import '../assets/f23.jpg';
import '../assets/f24.jpg';
import '../assets/f25.jpg';
import '../assets/f26.jpg';
import '../assets/f27.jpg';
import '../assets/f28.jpg';
import '../assets/f29.jpg';
import '../assets/f30.jpg';
import '../assets/f31.jpg';

const Learning = (props) => (
    <div className='faq'>
        <Navbar>
            <Nav>
                <NavItem eventKey={1} onClick={() => props.navigate('MAIN')}><span className="glyphicon glyphicon-home" aria-hidden="true"></span>Главное меню</NavItem>
            </Nav>
        </Navbar>
        <div>
            <Navbar>
                <Nav className="docs-nav">
                    <NavItem className="docs-item" eventKey={1} onClick={() => this.props.navigate('PURPOSE')}>Порядок подготовки АТС к применению</NavItem>
                    <NavItem className="docs-item" eventKey={2} onClick={() => this.props.navigate('TACTICS')}>Порядок обучения использования АТС</NavItem>
                    <NavItem className="docs-item" eventKey={3} onClick={() => this.props.navigate('WORK')}><span style={{lineHeight: 1}}>Возможные неисправности и способы их устранения</span></NavItem>
                </Nav>
            </Navbar>
        </div>
    </div>
);

export default connect(
    state => state,
    dispatch => ({
        navigate(pageName, subPageName, anchor) {
            dispatch(navigate(pageName, subPageName, anchor))
        }
    })
)(Learning);

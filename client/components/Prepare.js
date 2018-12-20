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


class Prepare extends React.Component {
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
                <PageHeader>Порядок подготовки АТС к применению</PageHeader>
                <div className="greater">
                <p>Перед включением электропитания АТС проверить, что напряжение минус 60В на УГП</p>

<p>или ПС-60 (или другом источнике) в норме.</p>

<p>Включение электропитания АТС производится в следующей последовательности:</p>
<ol>
<li>1) на блоках БВ включить каналы, подающие электропитание на стативы АТС;</li>

<li>2) включить блоки БПП в кассетах;</li>

<li>3) включить блоки БПП в кассетах;</li>

<li>4) включить блоки БПУ в кассетах;</li>

<li>5) включить каналы блоков БВ, подающие напряжение минус 60В аналоговое на блоки БАЛ1, БАЛ2, САК1-САК4 и БФСЛ1.</li>
</ol>

<p>Выключение электропитания АТС производится в обратном порядке</p>
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
)(Prepare);

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


class Issues extends React.Component {
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
                <PageHeader>Возможные неисправности</PageHeader>
                <div className="greater">
                <p>Основные типовые неисправности:</p>

<p>При наборе номера автоинформатор воспроизводит фразу <strong>«Неправильно набран номер»</strong>:</p>

<ul>
    <li>
        набранный номер отсутствует в плане нумерации станции (нет маршрута). Способы устранения:
        <ul>
            <li>проверить правильность набора номера;</li>
            <li>проверить наличие набираемого номера в номерах выхода <strong>ИП01</strong> (при наборе номера «своей» станции) или внешнего направления (при наборе внешнего номера), выполнив пункт <strong>4.3</strong>. настоящего руководства и выбрав в поле <strong>Направления/Тип</strong> необходимое направление, при отсутствии номера выхода в направлении добавить его, выполнив пункт <strong>4.7</strong>. настоящего руководства;</li>
        </ul>
    </li>
</ul>

<p>При наборе номера автоинформатор воспроизводит фразу <strong>«На данном направлении перегрузка»</strong>:</p>

<ul>
    <li>
        при выходе на заданное внешнее направление станция не может направить вызов, поскольку в пучке (пучках), распределенном (распределенных) за направлением, нет ни одной свободной соединительной линии в исходном состоянии (нет канала). Способы устранения:
        <ul>
            <li>
                проверить, есть ли свободные соединительные линии в пучке (пучках), закрепленном (закрепленных) за направлением, выполнив пункт 3.14. настоящего руководства. В зависимости от состояния соединительных линий произвести следующие действия:
                <ul class="list-unstyled">
                    <li>а) в случае занятости всех соединительных линий (состояние – <strong>«Разговор/ожидание отбоя»</strong>) дождаться окончания разговора и повторить попытку выхода;</li>

                    <li>б) в случае состояния соединительных линий <strong>«закрыто»</strong> включить соединительные линии, выполнив пункт <strong>3.15</strong>. настоящего руководства;</li>

                    <li>в) в случае длительного (более 10 сек.) состояния соединительных линий <strong>«ожидание отбоя»</strong> при организации пучка <strong>ТЧ канал</strong> произвести сброс индексного процессора, выполнив пункт <strong>3.18</strong>. настоящего руководства;</li>

                    <li>г) в случае состояния соединительных линий <strong>«блокировка встречным»</strong> или <strong>«сбой синхронизации»</strong> проверить состояние ИКМ между АТС;</li>
                </ul>
            </li>
            <li>
                проверить правильность выбора пучка (пучков), входящего в направление, при необходимости выполнить пункт <strong>4.10</strong>. настоящего руководства;
            </li>
        </ul>
    </li>
</ul>

<p>После набора внешнего номера (сигнализация <strong>1ВСК</strong>) происходит сброс, при этом набираемый абонент заведомо свободен. Для анализа причины необходимо включить опрос соединительных линий (пункт <strong>3.14</strong>. настоящего руководства) и набрать внешний номер.</p>

<p>В случае, когда соединительная линия занимается, но трансляции номера не происходит, возможны следующие неисправности:</p>

<ul>
    <li>не прописана трасса соединительных линий до встречной АТС за ближайшим мультиплексорным оборудованием или в сторону АТС стоит шлейф;</li>

    <li>на мультиплексорном оборудовании не установлен режим трансляции СУВ в 16 канальном интервале ИКМ;</li>

    <li>различные настройки пучков на своей и встречной АТС (например, различные цифры в поле <strong>Код ЧК</strong>);</li>
</ul>

<p>В случае трансляции номера (набранный номер появляется в поле <strong>Набр.номер</strong>) сброс соединения происходит на встречной или промежуточных АТС. Причиной устранения неисправности необходимо связаться с операторами встречной и промежуточных АТС и согласовать с ними настройки пучков и направлений (количество транслируемых цифр, типы сигнализаций и т.д.).</p>
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
)(Issues);

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
    Carousel,
    PageHeader,
    Media,
    Tooltip,
    Modal,
    Grid,
    Navbar,
    Nav,
    NavItem,
} from 'react-bootstrap'
import { navigate } from '../actions'
import ImageMapper from '../ImageMapper'
import '../assets/ppu.jpg';
import '../assets/g1.jpg';
import '../assets/g2.jpg';
import '../assets/g3.jpg';
import '../assets/g4.jpg';
import '../assets/g5.jpg';
import '../assets/g6.jpg';
import '../assets/g7.jpg';
import '../assets/g8.jpg';
import '../assets/g9.jpg';
import '../assets/g10.jpg';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {mX: 0, mY: 0, tooltipVisible: false, tooltipText: 'text', modalOpen: false, activeIndex: 0};
        this.mouseMove = this.mouseMove.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    mouseMove(e) {
        this.setState({
            mX: e.pageX,
            mY: e.pageY
        });
    }

    toggleModal(i) {
        this.setState({
            modalOpen: !this.state.modalOpen,
            activeIndex: i
        });
    }

    render() {
        const map = {
            name: "my-map",
            areas: [
                { shape: "rect", coords: [52,141,100,184], description: 'Тумблер включения питания', anchor: 10 },
                { shape: "rect", coords: [111,194,175,233], description: 'Порт для подключения электропитания', anchor: 8 },
                { shape: "rect", coords: [202,157,227,225], description: 'Индикаторы световой сигнализации', anchor: 14 },
                { shape: "rect", coords: [229,69,283,120], description: 'Кнопка вызова корреспондента', anchor: 11 },
                { shape: "rect", coords: [236,152,278,221], description: 'Порт служебной связи для подключения микротелеф. гарнитуры', anchor: 6 },
                { shape: "rect", coords: [309,149,408,185], description: 'Псследовательный порт управления RS-232', anchor: 3 },
                { shape: "rect", coords: [299,187,415,231], description: 'Порт внешней сигнализации', anchor: 4 },
                { shape: "rect", coords: [418,150,518,231], description: 'Порты Ethernet 10/100/1000 Base-T', anchor: 1 },
                { shape: "rect", coords: [519,148,617,230], description: 'Порты Е1', anchor: 2 },
                { shape: "rect", coords: [622,184,675,228], description: 'Порт для подключения резервного ППУ', anchor: 5 },
                { shape: "rect", coords: [677,214,703,228], description: 'Переключатель режимов резервирования', anchor: 12 },
                { shape: "rect", coords: [702,190,784,221], description: 'Порт измерения напряжения входного сигнала', anchor: 7 },
                { shape: "rect", coords: [690,148,793,185], description: 'Резервный порт управления' },
                { shape: "rect", coords: [977,164,1031,213], description: 'Винт подключения заземления', anchor: 13 },
                { shape: "rect", coords: [1064,154,1143,231], description: 'Порт СВЧ для подключения кабеля снижения', anchor: 9 }
            ]
        }
        const photoCaptions = [
            'Антенна \"волновой канал\" в обтекателе на мачте',
            'Антенна \"волновой канал\" в обтекателе',
            'Антенна \"волновой канал\" в обтекателе на кунге Р-409Б1',
            'Антенна параболическая решетчатого типа',
            'Вариант организации связи с использованием Р-427 из состава Р-409МБ1 (КАС)',
            'Внешний вид интерфейсов ППУ',
            'Внешний вид ППУ Р-427',
            'Интерфейсы для управления и подключения потоков Е1',
            'ППУ Р-427 в стативе',
            'Служебная связь и индикация'
        ];
        return (
            <div>
                <PageHeader>Главное меню</PageHeader>
                <div>
                    <Navbar>
                        <Nav>
                            <NavItem active={this.props.currentPage.pageName == 'DOCS'} eventKey={1} onClick={() => this.props.navigate('DOCS')}>Теория</NavItem>
                            <NavItem active={this.props.currentPage.pageName == 'LEARNING'} eventKey={2} onClick={() => this.props.navigate('LEARNING')}>Обучение</NavItem>
                            <NavItem active={this.props.currentPage.pageName == 'TESTS'} eventKey={3} onClick={() => this.props.navigate('TESTS', 0)}>Контроль знаний</NavItem>
                            <NavItem active={this.props.currentPage.pageName == 'ABOUT'} eventKey={4} onClick={() => this.props.navigate('ABOUT')}>Помощь</NavItem>
                        </Nav>
                    </Navbar>
                </div>
                <PageHeader>Галерея</PageHeader>
                <Carousel slide={this.state.modalOpen} className='carousel-main'>
                    {new Array(10).fill(0).map((e,i) => {
                        return (
                            <Carousel.Item key={i} onClick={() =>this.toggleModal(i)}>
                                <div className='flex'>
                                    <img alt="800x600" src={`img/g${i + 1}.jpg`} />
                                </div>
                            </Carousel.Item>
                        );
                    })}
                </Carousel>
                <Modal bsSize='lg' show={this.state.modalOpen} onHide={() => this.toggleModal(0)}>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-lg">{photoCaptions[this.state.activeIndex]}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Carousel indicators={false} onSelect={() => this.setState({activeIndex: this.state.activeIndex < 9 ? this.state.activeIndex + 1 : 0})} activeIndex={this.state.activeIndex} slide={false} className='carousel-secondary'>
                            {new Array(10).fill(0).map((e,i) => {
                                return (
                                    <Carousel.Item className='text-center' key={i}>
                                        <div className='flex'>
                                            <img alt="800x600" src={`img/g${i + 1}.jpg`} />
                                        </div>
                                    </Carousel.Item>
                                );
                            })}
                        </Carousel>
                        {/* <img className='modal-img' src={`img/g${this.state.activeIndex + 1}.jpg`} /> */}
                    </Modal.Body>
                </Modal>
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
)(Main);

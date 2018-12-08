import React from 'react';
import { connect } from 'react-redux'
import {
    ButtonToolbar,
    ToggleButtonGroup,
    ToggleButton,
    FormControl,
    FormGroup,
    Button,
    Panel,
    Table,
    PageHeader,
    Nav,
    NavItem,
    Navbar,
} from 'react-bootstrap';
import secToMin from 'sec-to-min'
import { saveResults, validateAnswers, login, setTime, navigate, retry } from '../actions';
import { userStatus } from '../constants';

class Tests extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            elapsedTime: 0,
            answers: new Array(this.props.questions.length).fill(null),
            name: '',
            group: '',
            variant: null,
            question: null,
        };
        this.maxTime = 420;
        this.validateInput = this.validateInput.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleAnswers = this.handleAnswers.bind(this);
        this.tick = this.tick.bind(this);
        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.startTest = this.startTest.bind(this);
        this.endTest = this.endTest.bind(this);
        this.nextQuestion = this.nextQuestion.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.validateSelect = this.validateSelect.bind(this);
    }

    componentDidUpdate() {
        if(this.props.currentUser.status == userStatus.LOGGED_OUT && this.state.elapsedTime != 0) {
            this.stopTimer();
            this.setState({
                elapsedTime: 0,
                answers: new Array(this.props.questions.length).fill(null),
                name: '',
                group: '',
                variant: null,
                question: null,
                selectedQ: null,
            });
        }
    }

    validateInput() {
        return (this.state.name.length == 0 || this.state.group.length == 0 || this.state.variant == null);
    }

    handleChange(e) {
        if(e.target == undefined) {
            this.setState({
                variant: e
            });
            return;
        }
        const value = e.target.value.trim();
        const name = e.target.name;
        const state = this.state;
        state[name] = value;
        this.setState({
            state
        })
    }

    handleAnswers(e) {
        const answers = this.state.answers;
        const qN = e.split('-')[0];
        const aN = e.split('-')[1];
        answers[qN] = aN;
        this.setState({ answers });
    }

    startTimer() {
        const startTime = new Date();
        this.timer = setInterval(this.tick(new Date()), 50)
    }

    stopTimer() {
        // this.setState({
        //     elapsedTime: 0
        // });
        clearInterval(this.timer);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    tick(startTime) {
        return () => {
            const elapsedTime = Math.floor((new Date() - startTime) / 1000)
            if(elapsedTime.toFixed() <= this.maxTime) this.setState({
                elapsedTime
            });
            else this.endTest();
        };
    }

    startTest() {
        this.setState({question: 0});
        this.props.login(this.state.name, this.state.group, this.state.variant);
        this.startTimer();
    }

    nextQuestion() {
        this.setState((prevState, props) =>
        ({
            question: prevState.question + 1,
            selectedQ: null
        }));
    }

    handleSelect(e) {
        this.setState({selectedQ: e.target.value});
    }

    validateSelect() {
        return this.state.selectedQ == null;
    }

    endTest() {
        this.stopTimer();
        this.setState({selectedQ: null});
        this.props.setTime(this.state.elapsedTime);
        this.props.validateAnswers(this.props.testID, this.state.answers);
    }

    render() {
        const answerAllies = { TRUE: 'Верно', FALSE: 'Неверно', NONE: 'Нет ответа' }
        const testNames = ['Тест по теории', 'Тест по настройке оборудования', 'Комплексный тест']
        if (this.props.currentUser.status == userStatus.LOGGED_OUT) return (
            <div>
                <Navbar>
                    <Nav>
                        <NavItem eventKey={1} onClick={() => this.props.navigate('MAIN')}>Главное меню</NavItem>
                    </Nav>
                </Navbar>
                <PageHeader>{testNames[this.props.testID] + ' '}<small>Регистрация</small></PageHeader>
                <FormGroup controlId="name">
                    <FormControl
                    type="text"
                    name='name'
                    placeholder="Введите имя и фамилию"
                    onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup controlId="group">
                    <FormControl
                    type="text"
                    name='group'
                    placeholder="Введите номер группы"
                    onChange={this.handleChange}
                    />
                </FormGroup>
                <ButtonToolbar>
                    <ToggleButtonGroup type="radio" name="variant" defaultValue={null}>
                        {this.props.questions[this.props.testID].map((e,i) => {
                            return <ToggleButton onClick={() => this.handleChange(e)} key={i} value={i}>{`Вариант ${i + 1}`}</ToggleButton>
                        })}
                    </ToggleButtonGroup>
                </ButtonToolbar>
                <hr />
                <ButtonToolbar>
                    <Button
                    bsStyle='primary'
                    disabled={this.validateInput()}
                    onClick={this.startTest}>
                        Начать тестирование
                    </Button>
                </ButtonToolbar>
            </div>
        );
        else if(this.props.currentUser.status == userStatus.WORKING) {
            let button = null;
            console.log(this.state.selectedQ);
            if (this.state.question + 1 === this.props.questions[this.props.testID][this.props.currentUser.variant].length) {
                button = <Button bsStyle='success' onClick={this.endTest} disabled={this.validateSelect()}>Закончить тестирование</Button>
            }
            else {
                button = <Button bsStyle='primary' onClick={this.nextQuestion} disabled={this.validateSelect()}>Следующий вопрос</Button>
            }
            return (
            <div>
                <Navbar>
                    <Nav>
                        <NavItem eventKey={1} onClick={() => this.props.navigate('MAIN')}>Главное меню</NavItem>
                    </Nav>
                </Navbar>
                <PageHeader>{testNames[this.props.testID] + ' '}<small>Времени осталось: {secToMin(this.maxTime - this.state.elapsedTime.toFixed())}</small></PageHeader>
                <Panel key={this.state.question} header={<h3>{`${this.state.question + 1}. ${this.props.questions[this.props.testID][this.props.currentUser.variant][this.state.question].q}`}</h3>}>
                    <ButtonToolbar>
                        <ToggleButtonGroup vertical onChange={this.handleAnswers} type="radio" name={`q-${this.state.question}`} defaultValue={null}>
                            {this.props.questions[this.props.testID][this.props.currentUser.variant][this.state.question].a.map((e,j) => {
                                return <ToggleButton key={j} value={`${this.state.question}-${j}`} onChange={this.handleSelect}>{e}</ToggleButton>
                            })}
                        </ToggleButtonGroup>
                    </ButtonToolbar>
                </Panel>
                <ButtonToolbar>
                    {button}
                </ButtonToolbar>
            </div>
        )}
        else if(this.props.currentUser.status == userStatus.FINISHED) return (
            <div>
                <Navbar>
                    <Nav>
                        <NavItem eventKey={1} onClick={() => this.props.navigate('MAIN')}>Главное меню</NavItem>
                    </Nav>
                </Navbar>
                <PageHeader>
                    {'Результаты '}
                    <small>
                        {this.props.currentUser.name},
                        гр. {this.props.currentUser.group},
                        вариант №{this.props.currentUser.variant + 1},
                        затраченное время {secToMin(this.state.elapsedTime.toFixed())}
                    </small>
                </PageHeader>
                <Table responsive bordered condensed>
                    <thead>
                        <tr>
                            <th>№</th>
                            <th>Вопрос</th>
                            <th>Ответ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.questions[this.props.testID][this.props.currentUser.variant].map((question, i) => {
                            return (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{question.q}</td>
                                    <td>{answerAllies[this.props.currentUser.result[i]]}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
                <h3>Ваша отметка: {Math.round(this.props.currentUser.result.filter(e => e == 'TRUE').length / this.props.currentUser.result.length * 10)}</h3>
                <ButtonToolbar>
                    <Button
                    onClick={this.startTest}>
                        Пройти заново
                    </Button>
                    <Button
                    onClick={() => { this.props.navigate('TESTS', this.props.testID) }}>
                        Вернуться назад
                    </Button>
                    <Button
                    onClick={this.props.navigateToMain}>
                        Вернуться на главную
                    </Button>
                </ButtonToolbar>
            </div>
        );
        else return (
            <div>
                <Navbar>
                    <Nav>
                        <NavItem eventKey={1} onClick={() => this.props.navigate('MAIN')}>Главное меню</NavItem>
                    </Nav>
                </Navbar>
                <h1>Неизвестная ошибка.</h1>
            </div>
        );
    }
}

export default connect(
    state => state,
    dispatch => ({
        login(name, group, variant) {
            dispatch(login(name, group, variant));
            console.log(name, group, variant);
        },
        validateAnswers(testID, answers) {
            dispatch(validateAnswers(testID, answers))
        },
        setTime(value) {
            dispatch(setTime(value));
        },
        saveResults(currentUser, elapsedTime, testID, date) {
            dispatch(saveResults(currentUser, elapsedTime, testID, date))
        },
        navigateToMain() {
            dispatch(navigate('MAIN'));
        },
        navigate(pageName, subPageName, anchor) {
            dispatch(navigate(pageName, subPageName, anchor))
        },
        retry() {
            dispatch(retry())
        }
    })
)(Tests);

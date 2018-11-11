import React from 'react'
import {
    Navbar,
    Nav,
    NavItem,
    NavDropdown,
    MenuItem,
    Jumbotron,
    Row,
    Media,
    Grid
} from 'react-bootstrap'
import {connect} from 'react-redux'
import { navigate } from '../actions'
import { docsCategoryNames } from '../constants'
import '../assets/bsuir.png';
import '../assets/mf.png';
import '../assets/logo.png'

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className='pre-header'>
                    <Grid>
                        <Row className="text-center">
                            <Media>
                                <Media.Left>
                                    <img width={80} height={80} style={{display:'inline'}} src="img/bsuir.png" alt="Image" />
                                </Media.Left>
                                <Media.Body>
                                    <h1>Программа для обучения специалистов связи устройству и эксплуатации АТС ФМ</h1>
                                </Media.Body>
                                <Media.Right>
                                    <img width={80} height={80} style={{display:'inline'}} src="img/mf.png" alt="Image" />
                                </Media.Right>
                            </Media>
                        </Row>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        currentPage: state.currentPage
    }),
    dispatch => ({
        navigate(pageName, subPageName, anchor) {
            dispatch(navigate(pageName, subPageName, anchor))
            // console.log('Navigated to ', pageName)
        }
    })
)(Header);

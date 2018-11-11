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

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className='pre-header'>
                    <Grid>
                        <Row className="text-center">
                            <p>&copy; Все права защищены, Военный факультет в УО "БГУИР"</p>
                        </Row>
                    </Grid>
                </div>
            </div>
        );
    }
}

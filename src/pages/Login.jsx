import React, { Component } from 'react';
import { connect } from 'react-redux';
import { savePlayersName } from '../redux/actions';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            p1Name: '',
            p2Name: '',
        }
    }

    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value })
    }

    goToPlay = (evt) => {
        const { history, dispatch } = this.props;
        const { p1Name, p2Name } = this.state;
        evt.preventDefault()
        dispatch(savePlayersName({ p1Name, p2Name }));
        history.push('/game')

    }

    render() {
        const { p1Name, p2Name } = this.state;

        const isButtonHidden = p1Name.length > 2 && p2Name.length > 2 ? false : true;

        return (
            <div className='login-conteiner' >
                <div className='background-image' ></div>

<div id="login">
                <form>
                    <label htmlFor="p1-name">Player 1:
                        <input type="text" placeholder='name' id='p1-name' name='p1Name' onChange={this.handleChange} value={p1Name} />
                    </label>
                    <label htmlFor="p2-name">Player 2:
                        <input type="text" placeholder='name' id='p1-name' name='p2Name' onChange={this.handleChange} value={p2Name} />
                    </label>
                    <button className='btnBora' hidden={isButtonHidden} onClick={this.goToPlay} >Bora pra batalha !!!</button>
                </form>
            </div>
            </div>
            
        )
    }
}

export default connect()(Login);

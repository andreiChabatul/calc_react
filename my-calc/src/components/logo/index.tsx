import './index.css';
import logoImg from './../../assets/img/logo.png'

const Logo = () => {

    return (
        <a className='logo-container' href="https://github.com/andreiChabatul/calc_react">
            <img className='logo_img' src={logoImg} alt="logo img" />
            <p className='logo_text'>Chabatul</p>
        </a>
    )
}

export default Logo;

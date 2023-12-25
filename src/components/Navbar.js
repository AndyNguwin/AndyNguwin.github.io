// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Button from 'react-bootstrap/Button';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col';
// import logo from './logo.svg';
import './Navbar.css';

function MyNavbar() {
    return (
        <div className='bg-navbar-bg text-navbar-text flex flex-row items-center gap-10 justify-end drop-shadow-md outline outline-navbar-outline outline-2'>
            <div className='flex flex-row items-center gap-10'>
                <ul className='flex flex-row items-center gap-10'>
                    <button className="btn btn-blue"><li>About Me</li></button>
                    <button className="btn btn-blue"><li>Skills</li></button>
                    <button className="btn btn-blue"><li>Projects</li></button>
                </ul>
            </div>
        </div>
    );
}

export default MyNavbar;
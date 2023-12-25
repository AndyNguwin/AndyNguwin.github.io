// import logo from './logo.svg';
import '../style.css';

function MyNavbar() {
    return (
        <div className='bg-navbar-bg text-navbar-text drop-shadow-md outline outline-navbar-outline outline-2 items-center'>
            <ul className='flex flex-row items-center justify-end gap-4 px-4'>
                <button className="btn-blue"><li>About Me</li></button>
                <button className="btn-blue"><li>Skills</li></button>
                <button className="btn-blue"><li>Projects</li></button>
            </ul>
        </div>
    );
}

export default MyNavbar;
import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faTerminal, faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo flex flex-col gap-2' to='/'>
            <FontAwesomeIcon icon={faTerminal} />
        </Link>
        <nav className="flex flex-col mt-60 space-y-12">
            <NavLink className="self-center" exact="true" to="/">
                <FontAwesomeIcon icon={faHome} />
            </NavLink>
            <NavLink exact="true" className="about-link self-center" to="/about">
                <FontAwesomeIcon icon={faUserAstronaut} />
            </NavLink>
            <NavLink exact="true" className="contact-link self-center" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} />
            </NavLink>
        </nav>
        <div className="absolute bottom-4 w-full">
            <div className='flex flex-row justify-between'>
                <a href="https://www.linkedin.com/in/aidan-wadin" className='smallLinkIcon'>
                    <FontAwesomeIcon icon={faLinkedin} />

                </a>
                <a href="https://github.com/awadin" className='smallLinkIcon'>
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>

        </div>
    </div>
)

export default Sidebar;
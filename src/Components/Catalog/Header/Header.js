import { Link , useLocation} from 'react-router-dom';
import style from '../../../styles/Header.module.css'

const Header = () => {

    const location = useLocation();

    let links = [];

    if (location.pathname === '/') {
        links = [
        { to: '/search', label: 'Search' },
        { to: '/create', label: 'Create' },
        ];
    } else {
        links = [
        { to: '/', label: 'Main' }
        ];
        
    }

    return(
        <header className={style.header}>
            <h1 className={style.logo}>Movies</h1>
            <nav className={style.menu}>
                {links.map((link) => (
                <Link to={link.to}>{link.label}</Link>
          ))}
            </nav>
        </header>
    )
        
}

export default Header;
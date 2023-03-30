import { Link , useLocation} from 'react-router-dom';
import style from '../../../styles/Header.module.css'

const Header = () => {

    const location = useLocation();
    let mainUrl = location.pathname === '/'

    return(
        <header className={style.header}>
            <h1 className={style.logo}>Movies</h1>
            <nav className={style.menu}>
                {
                    mainUrl ? 
                    <div>
                        <Link to = '/search'>Search</Link>
                        <Link to = '/create'>Create</Link>
                    </div>
                     : 
                    <Link to = '/'>Main</Link>
                }
            </nav>
        </header>
    )
        
}

export default Header;
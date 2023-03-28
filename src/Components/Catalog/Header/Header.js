import { Link } from 'react-router-dom';
import style from '../../../styles/Header.module.css'

const Header = (currentPage) => {

    return(
        <header className={style.header}>
            <h1 className={style.logo}>Movies</h1>
            <div className={style.menu}>
                <Link to="#">Search</Link>
                <Link to="#">Create</Link>
                <Link to="/">Main</Link>
            </div>
        </header>
    )
        
}

export default Header;
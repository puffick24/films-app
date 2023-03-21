import style from '../../../styles/Header.module.css'

function Header(){
    return(
        <header className={style.header}>
            <h1 className={style.logo}>Movies</h1>
            <div className={style.menu}>
                <p><a href='#'>Search</a></p>
                <p><a href='#'>Create</a></p>
            </div>
        </header>
    )
        
}

export default Header;
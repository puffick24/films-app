import { Link , useLocation} from 'react-router-dom';
import { useState } from 'react';

import style from './Header.module.css'
import AdaptiveMenu from '../../../images/AdaptiveMenu'
import CloseAdaptiveMenu from '../../../images/CloseAdaptiveMenu'

import DropDownMenu from './DropDownMenu';

const Header = () => {
    const [isActiveMenu,setIsActiveMenu] = useState(false)
    const [isActive,setIsActive] = useState(false)

    const isActiveHandle = () => {
        setIsActiveMenu(!isActiveMenu)
        setIsActive(!isActive)
    }

    const location = useLocation();
    let mainUrl = location.pathname === '/'

    return(
        <header className={style.header}>
            <h1 className={style.logo}>Movies</h1>
            <nav className={style.menu}>
                <div className={style.links}>
                    {
                    mainUrl ? 
                            <div>
                                <Link to = '/search'>Search</Link>
                                <Link to = '/create'>Create</Link>
                            </div>
                        : 
                            <Link to = '/'>Main</Link>
                    }
                </div>
                {
                    isActive ? 
                        <button className={style.adaptive_menu} onClick = {isActiveHandle}>
                            <CloseAdaptiveMenu/>
                        </button>
                    :
                        <button className={style.adaptive_menu} onClick = {isActiveHandle}>
                            <AdaptiveMenu/>
                        </button>
                }
            </nav>   
            {
                isActiveMenu ? <DropDownMenu isActiveHandle = {isActiveHandle} mainUrl= {mainUrl}/> : ''
            }     
        </header>
    )
        
}

export default Header;
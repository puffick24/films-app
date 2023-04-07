import { Link } from 'react-router-dom';
import style from './DropDownMenu.module.css'

const DropDownMenu = ({mainUrl, isActiveHandle}) => {

    return (
        <div className={style.drop_down_menu}>
                {
                    mainUrl ? 
                        <div className={style.drop_down_links}>
                            <Link to = '/search' onClick={isActiveHandle}>Search</Link>
                            <Link to = '/create' onClick={isActiveHandle}>Create</Link>
                        </div>
                    : 
                        <Link to = '/' onClick={isActiveHandle}>Main</Link>
                }
        </div>
    );
}

export default DropDownMenu;
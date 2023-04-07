import NotFoundImg from '../../images/NotFound'

import style from './NotFoundPage.module.css'

const NotFoundPage = () => {
    return ( 
        <div className={style.not_found_wrapper}>
            <div className={style.container}>
                <NotFoundImg/>
                <h1>Page not found</h1>
                <p>Oops! The page you were looking for doesn't exist.</p>
            </div>
        </div>
     );
}

export default NotFoundPage
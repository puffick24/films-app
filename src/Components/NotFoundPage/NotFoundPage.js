import NotFoundImg from '../../images/notFound.svg'

import style from '../../styles/NotFoundPage.module.css'

const NotFoundPage = () => {
    return ( 
        <div className={style.container}>
            <img src = {NotFoundImg}></img>
            <h1>Page not found</h1>
            <p>Oops! The page you were looking for doesn't exist.</p>
        </div>
     );
}

export default NotFoundPage;
import style from '../../styles/Pagination.module.css'

import {Pagination} from '@mui/material'

const Paginations = ({filmsPerPage, totalFilms, paginate})=> {   
    const pageNum = Math.ceil(totalFilms/filmsPerPage);

    const handlePageChange = (event,page) => {
        paginate(page)
    }

    return ( 
        <div className={style.container}>     
            <Pagination onChange = {handlePageChange} className={style.pagination} count = {pageNum} size = 'large'/>
        </div>
     )
}

export default Paginations
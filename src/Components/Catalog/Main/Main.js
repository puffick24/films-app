import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';


import style from '../../../styles/Main.module.css'

import Poster from '../Poster/Poster';
import Paginations from '../../Pagination/Pagination'

function Main(){
    const [films,setFilms] = useState([])
    const [filmsPerPage] = useState(8)
    const [currentPage, setCurrentPage] = useState(1)
    const [loading,setLoading] = useState(false)

    useEffect(() => {
        const getFilms = async () => {
            setLoading(true)
            const res = await axios.get('http://www.omdbapi.com/?s=spiderman&apikey=fb59bcb5')
            console.log(res.data.Search)
            setFilms(res.data.Search)
            setLoading(false)
        }

        getFilms()
    },[])

    const lastFilmIndex = currentPage * filmsPerPage;
    const firstFilnIndex = lastFilmIndex - filmsPerPage
    const currentFilm = films.slice(firstFilnIndex,lastFilmIndex)

    const paginate = pageNum => setCurrentPage(pageNum)

    return(
        <main className={style.main}>
            <Poster films = {currentFilm} loading = {loading}/>
            <Paginations 
                filmsPerPage = {filmsPerPage} 
                totalFilms={films.length}
                paginate = {paginate}
            />
        </main>
    )
}

export default Main;
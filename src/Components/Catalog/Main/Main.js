import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';


import style from '../../../styles/Main.module.css'

import FilmsList from '../FilmsList/FilmsList';
import Paginations from '../Pagination/Pagination'
import { keys } from '../../../keys';

const Main = () => {
    const [films,setFilms] = useState([])
    const [filmsPerPage] = useState(8)
    const [currentPage, setCurrentPage] = useState(1)
    const [loading,setLoading] = useState(false)
    
    useEffect(() => {

        const getFilms = async () => {
            let endpoints = keys.slice(firstFilmIndex,lastFilmIndex)
            setLoading(true)          
            Promise.all(endpoints.map((endpoint) => axios.get(`http://www.omdbapi.com/?i=${endpoint}&apikey=fb59bcb5`)))
            .then(response => {
                    const results = response.map(result => {
                        return {
                            title: result.data.Title,
                            poster: result.data.Poster,
                            year: result.data.Year
                        }               
                    })
                    setFilms(results)    
                }
            )
            .catch(
                error => {console.log(error.message)}
            )    
            setLoading(false)          
        }
        
        getFilms()
    },[currentPage])

    
    const lastFilmIndex = Math.min(currentPage * filmsPerPage, keys.length);
    const firstFilmIndex = (currentPage - 1) * filmsPerPage

    const paginate = pageNum => setCurrentPage(pageNum)

    return(
        <main className={style.main}>
            <FilmsList films = {films} loading = {loading}/>
            <Paginations 
                filmsPerPage = {filmsPerPage} 
                totalFilms={keys.length}
                paginate = {paginate}
                currentPage = {currentPage }
            />
        </main>
    )
}

export default Main;
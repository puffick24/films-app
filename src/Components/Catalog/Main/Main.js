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
    const [currentFilmsPage, setCurrentFilmsPage] = useState(1)
    const [loading,setLoading] = useState(false)
    const [delKeys,setDelKeys] = useState([])
    const [keysState,setKeysState] = useState(keys)
    
    const getFilms = async () => {
        try{
            setKeysState(keysState.filter((i) => i != delKeys))
            let endpoints = keysState.filter((i) => i !== delKeys).slice(firstFilmIndex,lastFilmIndex)
            setLoading(true)          
            const res = await Promise.all(endpoints.map((endpoint) => axios.get(`http://www.omdbapi.com/?i=${endpoint}&apikey=fb59bcb5`)))
            const results = res.map(result => {
                return {
                    
                    title: result.data.Title,
                    poster: result.data.Poster,
                    year: result.data.Year,
                    id: result.data.imdbID
                }               
            })
            setFilms(results)
            setLoading(false)
        }
        catch(error){
            console.log(`${error.name}: ${error.message}`)
        }                    
    }

    useEffect(() => { 
        getFilms()
    },[currentFilmsPage,delKeys])

    
    const lastFilmIndex = Math.min(currentFilmsPage * filmsPerPage, keys.length);
    const firstFilmIndex = (currentFilmsPage - 1) * filmsPerPage

    const paginate = pageNum => setCurrentFilmsPage(pageNum)

    return(
        <main className={style.main}>
            <FilmsList films = {films} loading = {loading} setFilms= {setFilms} keys={keys} setDelKeys= {setDelKeys}/>
            <Paginations 
                filmsPerPage = {filmsPerPage} 
                totalFilms={keysState.length}
                paginate = {paginate}
                currentPage = {currentFilmsPage }
            />
        </main>
    )
}

export default Main;
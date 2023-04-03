import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Pagination} from '@mui/material'

import style from './Main.module.css'

import Film from '../Film';
import ModalDeleteConfirm from '../../ModalDeleteConfirm';
import { keys } from '../../../keys';

const Main = () => {
    const [films,setFilms] = useState([])
    const [currentFilmsPage, setCurrentFilmsPage] = useState(1)
    const [loading,setLoading] = useState(false)
    const [keysState,setKeysState] = useState(keys)
    const filmsPerPage = 8

    const [delKeys,setDelKeys] = useState([])
    const [filmID,setFilmID] = useState('')

    const [active,setModalActive] = useState(false)

    const pageNum = Math.ceil(keysState.length/filmsPerPage);

    const deleteFilm = (id) =>{
        let copy = [...delKeys]
        copy.push(id)
        setDelKeys(copy)
        setModalActive(false)       
    }

    const getFilms = async () => {
        try{
            setLoading(true)
            const lastFilmIndex = Math.min(currentFilmsPage * filmsPerPage, keys.length);
            const firstFilmIndex = (currentFilmsPage - 1) * filmsPerPage

            const newKeysState = keysState.filter((i) => !delKeys.includes(i))
            setKeysState(newKeysState)

            const endpoints = newKeysState.slice(firstFilmIndex,lastFilmIndex)           
            const request = endpoints.map((endpoint) => axios.get(`http://www.omdbapi.com/?i=${endpoint}&apikey=fb59bcb5`))
            
            const res = await Promise.all(request)
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

    const paginate = pageNum => setCurrentFilmsPage(pageNum)

    const handlePageChange = (event,page) => {
        paginate(page)
    }

    const getFilmIDHandle = (filmID) => {
        setModalActive(true)
        setFilmID(filmID)
    }

    if(loading){
        return <h2>Loading...</h2>
    }

    return(
        <main className={style.main}>
            <ul className={style.list}>
            {
                films.map((film, i) => (
                    <Film 
                        film = {film}
                        key = {i}
                        getFilmIDHandle = {getFilmIDHandle}
                    />
                ))             
            }
            </ul>
            <Pagination onChange = {handlePageChange} className={style.pagination} count = {pageNum} size = 'large' page = {currentFilmsPage}/>
            <ModalDeleteConfirm active = {active} setModalActive = {setModalActive} deleteFilm = {deleteFilm} filmID = {filmID}/>
        </main>
    )
}

export default Main;
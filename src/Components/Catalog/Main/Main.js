import style from '../../../styles/Main.module.css'

import Poster from '../Poster/Poster';

import axios from 'axios';
import { useState, useEffect } from 'react';

function Main(){
    const [films,setFilms] = useState([])
    const [filmsPerPage] = useState(8)
    const [currentPage, setCurrentPage] = useState(1)
    const [loading,setLoading] = useState(false)

    useEffect(() => {
        const getFilms = async () => {
            setLoading(true)
            const res = await axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=fb59bcb5')
            setFilms(res.data)
            setLoading(false)
        }

        getFilms()
    },[])

    return(
        <main className={style.main}>
            <Poster films = {films} loading = {loading}/>
        </main>
    )
}

export default Main;
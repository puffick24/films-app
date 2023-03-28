import {useParams} from 'react-router-dom'
import axios from 'axios';
import { useEffect, useState } from 'react';

import style from '../../styles/FilmPage.module.css';
import Rating from './Rating'

const FilmPage = () => {
  const {id} = useParams()

  const [loading,setLoading] = useState(false)
  const [filmInfo,setFilmInfo] = useState({})
  const [ratings, setRatings] = useState([])

  useEffect(() => {

    const getFilmInfo = async () => {
      setLoading(true)
      axios.get(`http://www.omdbapi.com/?i=${id}&apikey=fb59bcb5`)
      .then(response => {
        setFilmInfo(response.data)
        setRatings(response.data.Ratings)
      })
      .catch(error => console.log(error.message))
    
      setLoading(false)
    }
    getFilmInfo()
  },[])

  if(loading){
    return <h2>Loading...</h2>
  }

  return (
      <div className = {style.container}>
        <div className={style.poster}>
          <img src = {filmInfo.Poster} alt = 'Poster'></img>
        </div>
        <div className={style.info}>
          <p className={style.title}>{filmInfo.Title}</p>
          <div className={style.rating}>
            <Rating rating = {filmInfo.imdbRating}/>
            <p className={style.imdbRating}>{filmInfo.imdbRating}/10</p>
          </div>      
          <div className={style.film_info_block}>
            <div className={style.year}>{filmInfo.Year}</div>
            <div className={style.runtime}>{filmInfo.Runtime}</div>
            <div className={style.genre}>{filmInfo.Genre}</div>
            <div className={style.languages}>{filmInfo.Language}</div>
          </div>
          <p className={style.plot}>{filmInfo.Plot}</p>
          <div className={style.other_ratings}>
          <p className={style.ratings}>Other ratings:</p>
              {
              ratings.map((item,i) => (
                <p key = {i}>{item.Source} - {item.Value}</p>
              ))
              } 
          </div>
          <div className={style.edit_block}><button className={style.edit}><a href = "#">Edit</a></button></div>
          <div className={style.production_info_block}>
              <hr color="#45A29E"/>
              <div>
                <span>Production</span>
                <span>{filmInfo.Production}</span>
              </div>
              <hr color="#45A29E"/>
              <div>
                <span>Country</span>
                <span>{filmInfo.Country}</span>
              </div>
              <hr color="#45A29E"/>
              <div>
                <span>Director</span>
                <span>{filmInfo.Director}</span>
              </div>
              <hr color="#45A29E"/>
              <div>
                <span>Writer</span>
                <span>{filmInfo.Writer}</span>
              </div>
              <hr color="#45A29E"/>
              <div>
                <span>Actors</span>
                <span>{filmInfo.Actors}</span>
              </div>
              <hr color="#45A29E"/>
              <div>
                <span>Awards</span>
                <span>{filmInfo.Awards}</span>
              </div>
              <hr color="#45A29E"/> 
          </div>
        </div>
      </div>
    );
}

export default FilmPage;
import {useParams} from 'react-router-dom'
import axios from 'axios';
import { useEffect, useState } from 'react';

import style from './FilmPage.module.css';
import Rating from './Rating'
import InfoBlock from './InfoBlock';

const FilmPage = () => {
  const {id} = useParams()

  const [loading,setLoading] = useState(false)
  const [filmInfo,setFilmInfo] = useState({})
  const [ratings, setRatings] = useState([])

  const getFilmInfo = async () => {
    try{
      setLoading(true)
      const res = await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=fb59bcb5`)
      setFilmInfo(res.data)
      setRatings(res.data.Ratings)
      setLoading(false)
      
    }
    catch(error){
      console.log(`${error.name}: ${error.message}`)
    }    
    
  }

  useEffect(() => {
    getFilmInfo()
  },[])

  if(loading){
    return <h2>Loading...</h2>
  }

  return (
      <div className = {style.container}>
        <div className={style.poster}>
          <img src = {filmInfo.Poster} alt = 'Poster'/>
        </div>
        <div className={style.info}>
          <p className={style.title}>{filmInfo.Title}</p>
          <div className={style.rating}>
            <Rating rating = {filmInfo.imdbRating}/>
            <p className={style.imdb_rating}>{filmInfo.imdbRating}/10</p>
          </div>      
          <div className={style.film_info_block}>
            <InfoBlock info = {filmInfo.Year}/>
            <InfoBlock info = {filmInfo.Runtime}/>
            <InfoBlock info = {filmInfo.Genre}/>
            <InfoBlock info = {filmInfo.Language}/>
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
          <div className={style.edit_block}><button className={style.edit}>Edit</button></div>
          <div className={style.production_info_block}>
              <hr />
              <div>
                <p>Production</p>
                <p>{filmInfo.Production}</p>
              </div>
              <hr color="#45A29E"/>
              <div>
                <p>Country</p>
                <p>{filmInfo.Country}</p>
              </div>
              <hr color="#45A29E"/>
              <div>
                <p>Director</p>
                <p>{filmInfo.Director}</p>
              </div>
              <hr color="#45A29E"/>
              <div>
                <p>Writer</p>
                <p>{filmInfo.Writer}</p>
              </div>
              <hr color="#45A29E"/>
              <div>
                <p>Actors</p>
                <p>{filmInfo.Actors}</p>
              </div>
              <hr color="#45A29E"/>
              <div>
                <p>Awards</p>
                <p>{filmInfo.Awards}</p>
              </div>
              <hr color="#45A29E"/> 
          </div>
        </div>
      </div>
    );
}

export default FilmPage;
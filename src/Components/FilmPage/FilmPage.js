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
  const [isEditing, setIsEditing] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [field,setField] = useState('')

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setField(name)
    setInputValue(value)
  };

  const editHandle = () => {
    setIsEditing(true)
  }

  const saveHandle = () => { 
    setIsEditing(false)
    setFilmInfo((prevState) => ({
      ...prevState,
      [field]: inputValue,
    }));
  }

  const renderField = (field,currValue,isEditing) => {
    switch(true){     
      case isEditing:
        return <input name = {field} value = {currValue} onChange={handleInputChange}/>
      case !isEditing:
        return <span>{currValue}</span>
    }
     
  }

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
          <div className={style.edit_block}>
            {
              isEditing ? <button className={style.edit} onClick = {saveHandle}>Save</button> : <button className={style.edit} onClick = {editHandle}>Edit</button>
            }
            </div>
          <div className={style.production_info_block}>
              <hr color="#45A29E"/>      
              <div>
                <span>Production</span>
                {renderField('Production',filmInfo.Production,isEditing)}
              </div>
              <hr color="#45A29E"/>
              <div>
                <span>Country</span>
                {renderField('Country',filmInfo.Country,isEditing)}
                {/* <span>{filmInfo.Country}</span> */}
              </div>
              <hr color="#45A29E"/>
              <div>
                <span>Director</span>
                {renderField('Director',filmInfo.Director,isEditing)}
                {/* <span>{filmInfo.Director}</span> */}
              </div>
              <hr color="#45A29E"/>
              <div>
                <span>Writer</span>
                {renderField('Writer',filmInfo.Writer,isEditing)}
                {/* <span>{filmInfo.Writer}</span> */}
              </div>
              <hr color="#45A29E"/>
              <div>
                <span>Actors</span>
                {renderField('Actors',filmInfo.Actors,isEditing)}
                {/* <span>{filmInfo.Actors}</span> */}
              </div>
              <hr color="#45A29E"/>
              <div>
                <span>Awards</span>
                {renderField('Awards',filmInfo.Awards,isEditing)}
                {/* <span>{filmInfo.Awards}</span> */}
              </div>
              <hr color="#45A29E"/> 
          </div>
        </div>
      </div>
    );
}

export default FilmPage;
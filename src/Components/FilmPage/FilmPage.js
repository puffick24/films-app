import { useParams} from 'react-router-dom'
import axios from 'axios';
import { useEffect, useState } from 'react';

import style from './FilmPage.module.css';
import Rating from './Rating'
import RenderField from './RenderField';
import InfoBlock from './InfoBlock';
import Spinner from '../../images/Spinner';
import { useDispatch } from 'react-redux';
import SnackbarComponent from '../Snackbar/SnackbarComponent';
import { addSnackStatusAction, addSnackTypeAction } from '../store/SnackbarReducer';

const FilmPage = () => {
  const {id} = useParams()

  const [loading,setLoading] = useState(false)
  const [filmInfo,setFilmInfo] = useState({})
  const [ratings, setRatings] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [isValid, setIsValid] = useState(false);

  const dispatch = useDispatch()

  const setSaveStyle = `${style.edit} ${isValid ? style.save_disabled : ''}`

  const handleFieldChange = (fieldName, newValue) => {
    setFilmInfo((prevState) => ({
      ...prevState,
      [fieldName]: newValue,
    }));
    setIsValid(!isValid)
  };

  const editHandle = () => {
    setIsEditing(!isEditing)
  }

  const saveHandle = () => {
    dispatch(addSnackStatusAction({open: true}))
    dispatch(addSnackTypeAction({severity: 'success', message: 'Movie edited successfully'}))
    setIsEditing(!isEditing)
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
    return <Spinner/>
  }

  return (
    <div className = {style.container}>
      <div className={style.poster}>
        <img src = {filmInfo.Poster} alt = 'Poster'/>
      </div>
      <div className={style.info}>
        <div className={style.main_film_info}>
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
          <p>Other ratings:</p>
          <div className={style.ratings}>
            {
            ratings.map((item,i) => (
              <p key = {i}>{item.Source} - {item.Value}</p>
            ))
            } 
          </div>
        </div>
        <div className={style.edit_block}>
          {
            isEditing ? <button className={setSaveStyle} disabled = {isValid} onClick = {saveHandle}>Save</button> : <button className={style.edit} onClick = {editHandle}>Edit</button>
          }
          </div>     
        </div>
        <div className={style.production_info_block}>
          <RenderField
            label="Production"
            value={filmInfo.Production}
            isEditing={isEditing}
            onFieldChange={handleFieldChange}
          />
          <RenderField
            label="Country"
            value={filmInfo.Country}
            isEditing={isEditing}
            onFieldChange={handleFieldChange}
          />
          <RenderField
            label="Director"
            value={filmInfo.Director}
            isEditing={isEditing}
            onFieldChange={handleFieldChange}
          />
          <RenderField
            label="Writer"
            value={filmInfo.Writer}
            isEditing={isEditing}
            onFieldChange={handleFieldChange}
          />
          <RenderField
            label="Actors"
            value={filmInfo.Actors}
            isEditing={isEditing}
            onFieldChange={handleFieldChange}
          />
          <RenderField
            label="Awards"
            value={filmInfo.Awards}
            isEditing={isEditing}
            onFieldChange={handleFieldChange}
          />
        </div>
        <SnackbarComponent/>
      </div>
    </div>
  );
}

export default FilmPage;
import axios from 'axios'
import React, { useEffect } from 'react'
import { options } from '../constans/apiConstans'
import { useDispatch } from 'react-redux'
import { actionTypes } from '../redux/actions/ActionsTypes'
import Hero from '../components/Hero'


const MainPage = () => {
    const dispatch = useDispatch()
    useEffect(()=> {


        axios.get("https://api.themoviedb.org/3/movie/popular",options)
        .then((response) => 
            dispatch({
                type:actionTypes.SET_MOVIES,
                payload: response.data.results

            })
        )
        .catch(err => console.log(err))
    },[])
  return (
    <div>
        <Hero/>
    </div>
  )
}

export default MainPage
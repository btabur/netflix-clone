import axios from "axios";
import {actionTypes} from './ActionsTypes'
import {options} from '../../constans/apiConstans'


axios.defaults.baseURL ='https://api.themoviedb.org/3'


// export  const setLoading =(payload) => {
//     return {
//         type:actionTypes.SET_LOADING,
//         payload
//     }
// }

// yukarıdaki ile aynıdır return olduğunu beklirtmek için normal paranteze aldık
export  const setLoading =(payload) => ({
        type:actionTypes.SET_LOADING,
        payload
    
})

export const getMovies = () => {
    return async function(dispatch) {
        axios.get("/movie/popular",options)
        .then((response) => 
            dispatch({
                type:actionTypes.SET_MOVIES,
                payload: response.data.results

            })
        )
        .catch(err => console.log(err))
    }
}
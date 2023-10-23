import { actionTypes } from "../actions/ActionsTypes"

const initialState = {
    popularMovies:[],
    genres:[],  //kategoriler
    isLoading:true
}

export  const movieReducer = (state=initialState,action) => {

    switch(action.type)  {
        case actionTypes.SET_MOVIES:
            return {...state,popularMovies:action.payload,isLoading:false}
            case actionTypes.SET_CATEGORİES:
                return {
                    ...state,
                    genres:action.payload
                }
        default:
            return state
    }

}
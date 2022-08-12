export const LOAD_BOLLYWOOD = 'LOAD_BOLLYWOOD';
export const LOAD_HOLLYWOOD='LOAD_HOLLYWOOD';
export const ADD_FAVOURITES = 'ADD_FAVOURITES';
export const WATCH_LATER = 'WATCH_LATER';
export const REMOVE_FAV = 'REMOVE_FAV';
export const LIKED = 'LIKED';
export const REMOVE_WATCHLATER = 'REMOVE_WATCHLATER';
export const REMOVE_LIKED = 'REMOVE_LIKED';



export function loadBollywood(Movie){
    return {
        type: LOAD_BOLLYWOOD,
        Movie:{
            ...Movie,
        }
    }
}

export function addToFavourite(Movie){
    return{
        type: ADD_FAVOURITES,
        payload: Movie,
    };
};
export function addToWatchLater(Movie){
    return{
        type: WATCH_LATER,
        payload: Movie,
    };
};

export function addtoLiked(Movie){
    return{
        type:LIKED,
        payload: Movie,
    }
};
export function removeFav(Movie){
    return{
        type:REMOVE_FAV,
        payload:Movie,
    }
}
export function removeWatchLater(Movie){
    return{
        type:REMOVE_WATCHLATER,
        payload:Movie,
    }
}
export function removeLiked(Movie){
    return{
        type:REMOVE_LIKED,
        payload:Movie,
    }
}

export function loadHollywood(Movie){
    return {
        type: LOAD_HOLLYWOOD,
        HollywoodMovie:{
            ...Movie
        }
    }
}
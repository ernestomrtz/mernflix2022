import API from './api';

//todelete
//import axios from 'axios';

export{
    getAllMovies,
    getMyBookmarks,
    addNewBookmark,
    deleteBookmark,
    getSingleMovie
}
function getMyBookmarks(email) {
    return API.get('/bookmarks/'+email).then(res => res.data);
}

function getAllMovies() {
    return API.get('/movies').then(res => res.data);
}

function addNewBookmark(email, movie){
    return API.post('/bookmarks', {
        email,
        movie}).then(result => result.data);
}

function deleteBookmark(idbookmark) {
    return API.delete('/bookmarks/'+idbookmark).then(result => result.data);
}
function getSingleMovie(idmovie) {
    return API.get('/movies/'+idmovie).then(res => res.data);
 }

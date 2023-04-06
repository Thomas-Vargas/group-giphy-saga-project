import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects'

function* watcherSaga() {
    //GET request 
    yield takeEvery('GET_GIPHY', getGiphy)

    //POST request
    yield takeEvery('ADD_TO_FAVORITES', postGiphy)

    //PUT request
    yield takeEvery('PUT_GIPHY', putGiphy)

    //DELETE request
    yield takeEvery('DELETE_GIPHY', deleteGiphy)

    //GET request for the categories
    yield takeEvery('GET_CATEGORY_GIPHY', getCatGiphy)

    //GET request GIPHY API
    yield takeEvery('SEARCH_INPUT', getAPIGiphy)
}

//Generator for our GET for favorite List
function* getGiphy(action) {
    console.log('GET_GIPHY was called!', action)
    try {
        const getGiphyResponse = yield axios.get('/api/favorite')
        console.log(getGiphyResponse)
        yield put({ type: 'SET_FAVORITE', payload: getGiphyResponse.data })
    } catch (error) {
        console.log('Error in GET_GIPHY generator', error)
    }
}

//Generator for our GET to GIPHY API
function* getAPIGiphy(action) {
    console.log('SEARCH_INPUT was called!', action);
    console.log('this is action.payload', action.payload);
    try {
        const getGiphyResponse = yield axios.get(`/api/giphy/${action.payload}`)
        console.log('this is getGiphyResponse', getGiphyResponse.data);
        yield put({ type: 'SET_GIF_LIST', payload: getGiphyResponse.data })
    } catch (error) {
        console.log('Error in SEARCH_INPUT generator', error)
    }
}

//Generator for our GET for category List
function* getCatGiphy(action) {
    console.log('GET_CATEGORY_GIPHY was called!', action)
    try {
        const getCatGiphyResponse = yield axios.get('/api/category')
        yield put({ type: 'SET_CATEGORY', payload: getCatGiphyResponse.data })
    } catch (error) {
        console.log('Error in GET_CATEGORY_GIPHY generator', error)
    }
}

//Generator for our POST
function* postGiphy(action) {
    console.log('ADD_TO_FAVORITES was called!', action)
    try {
        yield axios.post('/api/favorite', action.payload)
        yield put({ type: 'GET_GIPHY' })
    } catch (error) {
        console.log('Error in ADD_TO_FAVORITES generator', error)
    }
}

//Generator for our PUT
function* putGiphy(action) {
    console.log('PUT_GIPHY was called!', action)
    try {
        yield axios.put(`/api/favorite/${action.payload}`)
        yield put({ type: 'GET_GIPHY' })
    } catch (error) {
        console.log('Error in PUT_GIPHY generator', error)
    }
}

//Generator for our DELETE
function* deleteGiphy(action) {
    console.log('DELETE_GIPHY was called!', action)
    try {
        yield axios.delete(`/api/favorite/${action.payload}`)
        yield put({ type: 'GET_GIPHY' })
    } catch (error) {
        console.log('Error in DELETE_GIPHY generator', error)
    }
}

//Create saga middleware
const sagaMiddlware = createSagaMiddleware();

//Reducer for our FavoriteList
const favoriteList = (state = [], action) => {
    switch (action.type) {
        case 'SET_FAVORITE':
            return action.payload;
        default:
            return state;
    }
}

//Reducer for our CategoryList -- maybe not needed?
const categoryList = (state = [], action) => {
    switch (action.type) {
        case 'SET_CATEGORY':
            return action.payload;
        default:
            return state;
    }
}

//Reducer for our CategoryList -- maybe not needed?
const gifList = (state = [], action) => {
    switch (action.type) {
        case 'SET_GIF_LIST':
            return action.payload;
        default:
            return state;
    }
}

//Create storeInstance and combine our reducers
const storeInstance = createStore(
    combineReducers({
        favoriteList,
        categoryList,
        gifList
    }),
    applyMiddleware(sagaMiddlware, logger)
)

//Pass watcherSaga into our sagaMiddleware
sagaMiddlware.run(watcherSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>
);
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

export const changeLanguage = (language: string) => {
  return {
    type: 'CHANGE_LANGUAGE',
    language: language
  }
}

export const changeNavTextColor = (navTextColor: string) => {
  return {
    type: 'CHANGE_NAV_TEXT_COLOR',
    navTextColor: navTextColor
  }
}

const initialState = {
  languages: ['lv', 'en', 'ru'],
  language: 'lv',
  navTextColor: 'red',
  navTextColors: ['red', 'green', 'blue']
}

const store = createStore((state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_LANGUAGE': {

      return {
        //@ts-ignore
        ...state,
        language: action.language
      }
    }

    case 'CHANGE_NAV_TEXT_COLOR': {

      return {
        //@ts-ignore
        ...state,
        navTextColor: action.navTextColor
      }
    }
    default:
      return state
  }
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

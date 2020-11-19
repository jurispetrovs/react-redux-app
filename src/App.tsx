import React from 'react';
import { connect } from 'react-redux'
import { changeLanguage } from './index'
import { changeNavTextColor } from './index'
import { translations } from './assets/translations/translation'
import Nav from './components/nav/nav'


//@ts-ignore
const App = ({language, languages, dispatch, navTextColor, navTextColors}) => {
  return (
    <div className="App">
      <Nav />
      <br/><br/>
      <select
        value={language}
        onChange={(e) => {
          const newLan = e.target.value
          dispatch(changeLanguage(newLan))
        }}
      >
        {languages.map((color: string) => {
          return (
            <option key={color} value={color}>
              {color}
            </option>
          )
        })}
      </select>

      <select
        value={navTextColor}
        onChange={(e) => {
          const newColor = e.target.value
          dispatch(changeNavTextColor(newColor))
        }}
      >
        {navTextColors.map((ln: string) => {
          return (
            <option key={ln} value={ln}>
              {ln}
            </option>
          )
        })}
      </select>

      <h1>
        {/*@ts-ignore*/}
        {translations[language].intro}
      </h1>
    </div>
  );
}

//@ts-ignore
const mapStateToProps = ({language, languages, navTextColor, navTextColors}) => {
  return {
    language,
    languages,
    navTextColor,
    navTextColors
  }
}

export default connect (mapStateToProps)(App);

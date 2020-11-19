import React from 'react'
import { connect } from 'react-redux'
import { translations } from '../../assets/translations/translation'

//@ts-ignore
 const Nav = ({language, navTextColor}) => {

    return (
        <nav style={{color: navTextColor}}>
            <span>
                {/*//@ts-ignore*/}
                {translations[language].nav.home}
            </span>
            &nbsp;&nbsp;
            <span>
                {/*//@ts-ignore*/}
                {translations[language].nav.about}
            </span>
            &nbsp;&nbsp;
            <span>
                {/*//@ts-ignore*/}
                {translations[language].nav.contacts}
            </span>
        </nav>
    )
}

//@ts-ignore
const mapStateToProps = ({language, navTextColor}) => {
    return {
      language,
      navTextColor
    }
  }
  
  export default connect (mapStateToProps)(Nav);
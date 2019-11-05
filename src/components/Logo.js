import React from 'react'
import { Link } from 'gatsby'
import { useSelector } from 'react-redux'
import logo_ru from '../images/nanosemantics_logo_ru.svg'
import logo_en from '../images/nanosemantics_logo_en.svg'

const Logo = () => {
  const lang = useSelector(state => state.lang)
  return (
    <Link to="/">
      <img src={lang === 'ru' ? logo_ru : logo_en} width="200" alt="Logo" />
    </Link>
  )
}

export default Logo

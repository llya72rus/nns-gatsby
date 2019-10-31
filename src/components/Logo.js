import React from 'react'
import { Link } from 'gatsby'
import logo from '../images/nanosemantics_logo_ru.svg'

export default function Logo() {
  return (
    <Link to="/">
      <img src={logo} width="200" alt="Logo" />
    </Link>
  )
}

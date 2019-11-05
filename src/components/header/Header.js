//import PropTypes from 'prop-types'
import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import { useDispatch, useSelector } from 'react-redux'
import { toggleLang } from '../../redux/actions/actions'
import './Header.css'
import Logo from '../Logo'

const QUERY = graphql`
  {
    wpgraphql {
      menu(id: "TWVudToyOA==") {
        menuItems {
          edges {
            node {
              label
              id
            }
          }
        }
      }
    }
  }
`

const Header = () => {
  const dispatch = useDispatch()
  const lang = useSelector(state => state.lang)
  return (
    <StaticQuery
      query={QUERY}
      render={data => {
        if (!data.wpgraphql.menu) return <div>No data provided</div>
        return (
          <header className="main-header">
            <nav className="main-nav">
              <Logo />
              <ul className="main-nav__menu">
                {data.wpgraphql.menu.menuItems.edges.map(item => (
                  <li className="main-nav__menu-item" key={item.node.id}>
                    <Link
                      className="main-nav__menu-link"
                      to={`/${item.node.label.toLowerCase()}`}
                    >
                      {item.node.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <select onChange={e => dispatch(toggleLang(e.target.value))}>
                <option value="ru">Русский</option>
                <option value="en">English</option>
              </select>
              <button className="green-btn">
                {lang === 'ru' ? 'Оставить заявку' : 'Contact us'}
              </button>
            </nav>
          </header>
        )
      }}
    />
  )
}

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header

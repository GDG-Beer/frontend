import React from 'react'
import cn from 'classnames/bind'
import style from './Footer.module.scss'
import { SVG } from '@/utils/assets'
import { Link } from 'react-router-dom'
const cx = cn.bind(style)

const Footer = () => {
  return (
    <div className={cx('beer-footer')}>
      <Link to="/">
        <button>
          <div className={cx('beer-footer-img-wrapper')}>
            <img src={SVG('house')} alt="house" />
          </div>
        </button>
      </Link>
      <Link to="/info">
        <button>
          <img src={SVG('logo_indigo')} alt="logo_indigo" />
        </button>
      </Link>
      <Link to="/mypage">
        <button>
          <div className={cx('beer-footer-img-wrapper')}>
            <img src={SVG('user')} alt="user" />
          </div>
        </button>
      </Link>
    </div>
  )
}

export default Footer

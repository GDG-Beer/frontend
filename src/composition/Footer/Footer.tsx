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
          <img src={SVG('house')} alt="house" />
        </button>
      </Link>
      <Link to="/info">
        <button>
          <img src={SVG('emptyMug')} alt="emptyMug" />
        </button>
      </Link>
      <Link to="/mypage">
        <button>
          <img src={SVG('user')} alt="user" />
        </button>
      </Link>
    </div>
  )
}

export default Footer

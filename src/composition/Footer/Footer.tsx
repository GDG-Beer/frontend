import React from 'react'
import cn from 'classnames/bind'
import style from './Footer.module.scss'
import { SVG } from '@/utils/assets'
const cx = cn.bind(style)

const Footer = () => {
  return (
    <div className={cx('beer-footer')}>
      <button>
        <img src={SVG('house')} alt="house" />
      </button>
      <button>
        <img src={SVG('emptyMug')} alt="emptyMug" />
      </button>
      <button>
        <img src={SVG('user')} alt="user" />
      </button>
    </div>
  )
}

export default Footer

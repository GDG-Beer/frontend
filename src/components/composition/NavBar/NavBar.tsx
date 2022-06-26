import React from 'react'
import cn from 'classnames/bind'
import style from './NavBar.module.scss'
import { SVG } from '@/utils/assets'
import { useNavigate } from 'react-router-dom'
const cx = cn.bind(style)

interface Props {
  text?: string
}

const NavBar = ({ text }: Props) => {
  const navigate = useNavigate()

  const onClickNavButton = () => {
    navigate(-1)
  }

  return (
    <div className={cx('beer-navbar')}>
      {text && (
        <>
          <button onClick={onClickNavButton}>
            <img src={SVG('back')} alt="back" />
          </button>
          {text}
        </>
      )}
      {!text && <img src={SVG('logo')} alt="logo" />}
    </div>
  )
}

export default NavBar

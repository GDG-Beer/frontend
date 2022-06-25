import React from 'react'
import cn from 'classnames/bind'
import style from './button.module.scss'
const cx = cn.bind(style)

interface ButtonProps {
  text: string
}

const Button = ({ text }: ButtonProps) => {
  return (
    <>
      <button className={cx('beer-button')}>{text}</button>
    </>
  )
}

export default Button

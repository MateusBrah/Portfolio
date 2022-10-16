import React from 'react'
import '../styles/components/buttonmain.sass'

const ButtonMain = ({children, component: Component, ...props}) => {
  return (
    <Component id="btn" className='btn' {...props}>{children}</Component>
  )
};

export default ButtonMain;
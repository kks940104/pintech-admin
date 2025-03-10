/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { useContext, useLayoutEffect } from 'react'
import { styled } from 'styled-components'
import CommonContext from '../contexts/CommonContext'
import sizes from '../styles/sizes'
import colors from '../styles/colors'

const { big } = sizes
const { dark } = colors

const _MainTitle = ({ children, className }) => {
  const {
    actions: { setTitle },
  } = useContext(CommonContext)

  useLayoutEffect(() => {
    setTitle(children)
  }, [children, setTitle])

  return <h1 className={className}>{children}</h1>
}

export const MainTitle = styled(_MainTitle)`
  padding: 0 10px 15px;
  margin: 0 0 25px;

  font-size: ${big};
  border-bottom: 3px solid ${dark};
  color: ${dark};
`

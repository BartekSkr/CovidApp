import React, { Fragment } from 'react'
import { Country } from '../cases/Country'
import { Global } from '../cases/Global'

export const Home = () => {
  return (
    <Fragment>
      <Global />
      <Country />
    </Fragment>
  )
}

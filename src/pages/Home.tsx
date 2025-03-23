import React from 'react'
import Headlng from '../layouts/Headlng'
import Nav_Top from '../layouts/Nav_Top'
import Menu from '../layouts/Menu'
import Navber from '../layouts/Navber'
import Banner from '../layouts/Banner'

const Home: React.FC = () => {
  return (
    <>
    <Headlng />
    <Nav_Top />
    <Menu />
    <Navber />
    <Banner/>
    </>
  )
}

export default Home

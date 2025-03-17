import React from 'react'
import Container from '../components/Container'
import Image from '../components/Image';
import Logo from '../assets/jinStore_logo.png';

const Menu: React.FC = () => {
  return (
    <nav>
      <Container>
        <div className="w-[20%]">
          <div className="">
            <Image src={Logo} alt='Main Logo'/>
          </div>
          <div className=""></div>
        </div>
        <div className="w-[60%]"></div>
        <div className="w-[20%]"></div>
      </Container>
    </nav>
  );
}

export default Menu

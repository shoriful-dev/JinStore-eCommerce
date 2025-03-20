import React from 'react';
import Container from '../components/Container';
import Image from '../components/Image';
import Logo from '../assets/jinStore_logo.png';
import { IoLocationOutline } from 'react-icons/io5';
import { LuSearch } from 'react-icons/lu';
import { FaRegHeart, FaRegUser } from 'react-icons/fa';
import Flex from '../components/Flex';
import { FiShoppingCart } from 'react-icons/fi';

interface NotificationBadgeProps {
  count: number;
}

const NotificationBadge: React.FC<NotificationBadgeProps> = ({ count }) => (
  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
    {count}
  </span>
);

const Menu: React.FC = () => {
  return (
    <nav>
      <Container>
        <Flex className="justify-between items-center">
          {/* Menu Left Part */}
          <div className=" flex items-center py-5 space-x-5">
            <div>
              <Image src={Logo} alt="Main Logo" />
            </div>
            <div className="flex space-x-4 items-center">
              <div className="">
                <IoLocationOutline className="text-2xl" />
              </div>
              <div className="w-[60px]">
                <h3 className="font-Inter text-[11px] text-[#030712]">
                  Deliver to{' '}
                  <span className="font-semibold font-Inter text-[13px]">
                    all
                  </span>
                </h3>
              </div>
            </div>
          </div>
          {/* Menu Middle Part */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search for products, categories or brands..."
              className="w-[800px] h-[48px] bg-[#F3F4F6] px-5 text-[#6B7280] rounded-lg outline-none"
            />
            <div>
              <LuSearch className="text-2xl absolute top-3 right-[15px]" />
            </div>
          </div>
          {/* Menu Right Part */}
          <div className=" flex space-x-10">
            <div className="flex space-x-5 items-center">
              <div>
                <FaRegUser className="text-2xl" />
              </div>
              <div className="">
                <h3 className="font-Inter text-[11px] text-[#030712]">
                  Sign In
                  <br />
                  <span className="font-Inter text-[13px] font-bold">
                    Account
                  </span>
                </h3>
              </div>
            </div>
            <div className="flex space-x-10">
              <div className="relative">
                <div className="absolute top-0 right-0">
                  <FaRegHeart className="text-2xl" />
                  <NotificationBadge count={0} />
                </div>
              </div>
              <div className="relative">
                <div className="absolute top-0 right-0">
                  <FiShoppingCart className="text-2xl" />
                  <NotificationBadge count={0} />
                </div>
              </div>
            </div>
          </div>
        </Flex>
      </Container>
    </nav>
  );
};

export default Menu;

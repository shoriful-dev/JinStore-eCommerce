import React from 'react';
import Container from '../components/Container';
import { FaAngleDown } from 'react-icons/fa6';

const Nav_Top: React.FC = () => {
  return (
    <>
      <Container>
        <div className="flex justify-between py-3 invisible lg:visible">
          <div className="flex space-x-6 items-center">
            <div className="">
              <ul className="flex space-x-3">
                <li className="text-textColor font-Inter text-xs font-medium">
                  About Us
                </li>
                <li className="text-textColor font-Inter text-xs font-medium">
                  My account
                </li>
                <li className="text-textColor font-Inter text-xs font-medium">
                  Wishlist
                </li>
              </ul>
            </div>
            <div className="">
              <p className="text-xs font-Inter font-medium">
                We deliver to you every day from
                <span className="text-[#EA580C] pl-1">7:00 to 23:00</span>
              </p>
            </div>
          </div>
          <div className="flex space-x-3 items-center">
            <div className="flex items-center space-x-1">
              <h1 className="text-xs font-Inter font-medium text-textColor">
                English
              </h1>
              <FaAngleDown className="mt-1 text-textColor" />
            </div>
            <div className="flex items-center space-x-1">
              <h1 className="text-xs font-Inter font-medium text-textColor">
                USD
              </h1>
              <FaAngleDown className="mt-1 text-textColor" />
            </div>
            <div className="">
              <h3 className="text-xs font-Inter font-medium text-textColor">
                Order Tracking
              </h3>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Nav_Top;

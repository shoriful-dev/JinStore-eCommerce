import React from 'react';
import Container from '../components/Container';
import { IoIosArrowDown } from 'react-icons/io';

const Navber: React.FC = () => {
  return (
    <nav className="border-b">
      <Container>
        <div className=" flex justify-between items-center py-3 invisible lg:visible">
          <div>
            <ul className="flex space-x-5">
              <span className="flex items-center space-x-1">
                <li className="text-[15px] font-semibold font-Inter">Home</li>
                <IoIosArrowDown className="mt-1" />
              </span>
              <span className="flex items-center space-x-1">
                <li className="text-[15px] font-semibold font-Inter">Shop</li>
                <IoIosArrowDown className="mt-1" />
              </span>
              <span className="flex items-center space-x-1">
                <li className="text-[15px] font-semibold font-Inter">
                  Fruits & Vegetables
                </li>
                <IoIosArrowDown className="mt-1" />
              </span>
              <span className="flex items-center space-x-1">
                <li className="text-[15px] font-semibold font-Inter">
                  Beverages
                </li>
                <IoIosArrowDown className="mt-1" />
              </span>
              <span className="flex items-center space-x-1">
                <li className="text-[15px] font-semibold font-Inter">Blog</li>
                <IoIosArrowDown className="mt-1" />
              </span>
              <span className="flex items-center space-x-1">
                <li className="text-[15px] font-semibold font-Inter">
                  Contact
                </li>
                <IoIosArrowDown className="mt-1" />
              </span>
            </ul>
          </div>
          <div className="flex space-x-8">
            <span className="flex items-center space-x-1">
              <h3 className="text-[15px] font-semibold font-Inter">
                Trending Products
              </h3>
              <IoIosArrowDown />
            </span>
            <span className="flex items-center space-x-1">
              <h3 className="text-[15px] font-semibold font-Inter text-red">
                Almost Finished
              </h3>
              <button className="text-[10px] font-bold font-Inter py-[1px] px-[4px] bg-red text-white rounded-md">
                SALE
              </button>
              <IoIosArrowDown className="text-red" />
            </span>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navber;

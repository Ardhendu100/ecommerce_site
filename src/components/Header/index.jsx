import React, { useState } from 'react';

import { Img, SelectBox, Text } from "components";
import { Link } from "react-router-dom";

const homeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const Header = (props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
        <div className="mobile-container">
            <div className="topnav">
              <div className="header-row">
                <Link to="/">
                  <Img
                    className="h-[30px] w-[90px]"
                    src="images/img_car.svg"
                    alt="car"
                  />
                </Link>

                <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>

              <div id="myLinks" style={{ display: isMobileMenuOpen ? 'block' : 'none' }}>
                <div className="flex flex-row items-center justify-between w-full">
                <Link to="/shop">Shop</Link>
                <Link to="/aboutus">About</Link>
                <Link to="/contactus">Contact</Link>
                <Link to="/team">Team</Link>
                <Link to="/wishlist">Wishlist</Link>
                <Link to="/cart">Cart</Link>
                <Link to="#">Profile</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-1 flex-row gap-9 sm:hidden items-center justify-between w-[400px] sm:w-full">
            {/* <SelectBox
              className="font-rubik leading-[normal] text-black-900 text-left text-lg tracking-[-0.50px] w-[17%] sm:w-full"
              placeholderClassName="text-black-900"
              indicator={
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowdown_black_900.svg"
                  alt="arrow_down"
                />
              }
              isMulti={false}
              name="frameFour"
              options={homeOptionsList}
              isSearchable={false}
              placeholder="Home"
            /> */}

            <Link to="/shop">
              <Text
                className="text-black-900 text-lg tracking-[-0.50px] w-auto"
                size="txtRubikRomanRegular18"
              >
                Shop
              </Text>
            </Link>
            {/* <Text
              className="text-black-900 text-lg tracking-[-0.50px] w-auto"
              size="txtRubikRomanRegular18"
            >
              Blog
            </Text> */}
            <Link to="/aboutus">
              <Text
                className="text-black-900 text-lg tracking-[-0.50px] w-auto"
                size="txtRubikRomanRegular18"
              >
                About
              </Text>
            </Link>
            <Link to="/contactus">

              <Text
                className="text-black-900 text-lg tracking-[-0.50px] w-auto"
                size="txtRubikRomanRegular18"
              >
                Contact
              </Text>
            </Link>

            <Link to="/team">

              <Text
                className="text-black-900 text-lg tracking-[-0.50px] w-auto"
                size="txtRubikRomanRegular18"
              >
                Team
              </Text>
            </Link>
          </div>
          <div className="flex sm:flex-1 flex-row gap-5 sm:hidden w-[130px] sm:w-full">
            <Link to="/wishlist"> 
              <Img
                className="h-8 sm:hidden"
                src="images/wishlist.svg"
                alt="icon"
              />
            </Link>

            <Link to="/cart">
              <Img
                className="h-8 sm:hidden"
                src="images/shopping-cart.svg"
                alt="icon"
              />
            </Link>

            <Img
              className="h-8 sm:hidden"
              src="images/person-male-svgrepo-com.svg"
              alt="icon"
            />
          </div>
        </div>
        
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;

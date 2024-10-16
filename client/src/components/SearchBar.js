import React, { useState } from "react";
import styled from "styled-components";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const SearchBarContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 20px 0;
  padding-left: 130px;

  @media (max-width: 768px) {
    padding-left: 10px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const SearchBarItem = styled.div`
  position: relative;
  margin: 0 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #4a4a4a;
  border-bottom: ${(props) => (props.isOpen ? "4px solid red" : "none")};
  padding-bottom: 20px;
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    font-size: 12px;
    margin: 0 8px;
  }
`;

const DropdownMenu = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: absolute;
  top: calc(100% + 10px); /* کمی بیشتر برای موبایل */
  left: 0;
  background-color: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 4px;
  z-index: 10;
  width: 300px;

  @media (max-width: 768px) {
    width: 100vw;
    box-shadow: none;
    padding: 15px;
    top: calc(100% + 10px);
  }
`;

const DropdownItem = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
  row-gap: 10px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    column-gap: 10px;
  }
`;

const DropdownItemColumn = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  padding: 5px 0;
  color: #4a4a4a;
  white-space: nowrap;

  &:hover {
    color: red;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    font-weight: 400;
  }
`;

const IconWrapper = styled.div`
  margin-right: 8px;
`;

const SearchBar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleMouseEnter = (item) => {
    setOpenDropdown(item);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  return (
    <SearchBarContainer>
      <SearchBarItem
        onMouseEnter={() => handleMouseEnter("restaurants")}
        onMouseLeave={handleMouseLeave}
        isOpen={openDropdown === "restaurants"}
      >
        Restaurants
        <ExpandMoreIcon />
        {openDropdown === "restaurants" && (
          <DropdownMenu isOpen={true}>
            <DropdownItem>
              <DropdownItemColumn>
                <IconWrapper>
                  <RestaurantIcon />
                </IconWrapper>
                Takeout
              </DropdownItemColumn>
              <DropdownItemColumn>
                <IconWrapper>
                  <RestaurantIcon />
                </IconWrapper>
                Burgers
              </DropdownItemColumn>
              <DropdownItemColumn>
                <IconWrapper>
                  <RestaurantIcon />
                </IconWrapper>
                Chinese
              </DropdownItemColumn>
              <DropdownItemColumn>
                <IconWrapper>
                  <RestaurantIcon />
                </IconWrapper>
                Italian
              </DropdownItemColumn>
              <DropdownItemColumn>
                <IconWrapper>
                  <RestaurantIcon />
                </IconWrapper>
                Reservations
              </DropdownItemColumn>
              <DropdownItemColumn>
                <IconWrapper>
                  <RestaurantIcon />
                </IconWrapper>
                Delivery
              </DropdownItemColumn>
              <DropdownItemColumn>
                <IconWrapper>
                  <RestaurantIcon />
                </IconWrapper>
                Mexican
              </DropdownItemColumn>
              <DropdownItemColumn>
                <IconWrapper>
                  <RestaurantIcon />
                </IconWrapper>
                Thai
              </DropdownItemColumn>
            </DropdownItem>
          </DropdownMenu>
        )}
      </SearchBarItem>

      <SearchBarItem
        onMouseEnter={() => handleMouseEnter("homeServices")}
        onMouseLeave={handleMouseLeave}
        isOpen={openDropdown === "homeServices"}
      >
        Home Services
        <ExpandMoreIcon />
        {openDropdown === "homeServices" && (
          <DropdownMenu isOpen={true}>
            <DropdownItem>
              <DropdownItemColumn>
                <IconWrapper>
                  <HomeRepairServiceIcon />
                </IconWrapper>
                Contractors
              </DropdownItemColumn>
              <DropdownItemColumn>
                <IconWrapper>
                  <HomeRepairServiceIcon />
                </IconWrapper>
                Electricians
              </DropdownItemColumn>
              <DropdownItemColumn>
                <IconWrapper>
                  <HomeRepairServiceIcon />
                </IconWrapper>
                Home Cleaners
              </DropdownItemColumn>
              <DropdownItemColumn>
                <IconWrapper>
                  <HomeRepairServiceIcon />
                </IconWrapper>
                HVAC
              </DropdownItemColumn>
              <DropdownItemColumn>
                <IconWrapper>
                  <HomeRepairServiceIcon />
                </IconWrapper>
                Landscaping
              </DropdownItemColumn>
              <DropdownItemColumn>
                <IconWrapper>
                  <HomeRepairServiceIcon />
                </IconWrapper>
                Locksmiths
              </DropdownItemColumn>
              <DropdownItemColumn>
                <IconWrapper>
                  <HomeRepairServiceIcon />
                </IconWrapper>
                Movers
              </DropdownItemColumn>
              <DropdownItemColumn>
                <IconWrapper>
                  <HomeRepairServiceIcon />
                </IconWrapper>
                Plumbers
              </DropdownItemColumn>
            </DropdownItem>
          </DropdownMenu>
        )}
      </SearchBarItem>

      <SearchBarItem
        onMouseEnter={() => handleMouseEnter("autoServices")}
        onMouseLeave={handleMouseLeave}
        isOpen={openDropdown === "autoServices"}
      >
        Auto Services
        <ExpandMoreIcon />
        {openDropdown === "autoServices" && (
          <DropdownMenu isOpen={true}>
            <DropdownItem>
              <DropdownItemColumn>
                <IconWrapper>
                  <DirectionsCarIcon />
                </IconWrapper>
                Auto Repair
              </DropdownItemColumn>
              <DropdownItemColumn>
                <IconWrapper>
                  <DirectionsCarIcon />
                </IconWrapper>
                Auto Detailing
              </DropdownItemColumn>
              <DropdownItemColumn>
                <IconWrapper>
                  <DirectionsCarIcon />
                </IconWrapper>
                Body Shops
              </DropdownItemColumn>
              <DropdownItemColumn>
                <IconWrapper>
                  <DirectionsCarIcon />
                </IconWrapper>
                Car Wash
              </DropdownItemColumn>
              <DropdownItemColumn>
                <IconWrapper>
                  <DirectionsCarIcon />
                </IconWrapper>
                Car Dealers
              </DropdownItemColumn>
              <DropdownItemColumn>
                <IconWrapper>
                  <DirectionsCarIcon />
                </IconWrapper>
                Oil Change
              </DropdownItemColumn>
              <DropdownItemColumn>
                <IconWrapper>
                  <DirectionsCarIcon />
                </IconWrapper>
                Parking
              </DropdownItemColumn>
              <DropdownItemColumn>
                <IconWrapper>
                  <DirectionsCarIcon />
                </IconWrapper>
                Towing
              </DropdownItemColumn>
            </DropdownItem>
          </DropdownMenu>
        )}
      </SearchBarItem>

      <SearchBarItem
        onMouseEnter={() => handleMouseEnter("more")}
        onMouseLeave={handleMouseLeave}
        isOpen={openDropdown === "more"}
      >
        More
        <ExpandMoreIcon />
        {openDropdown === "more" && (
          <DropdownMenu isOpen={true}>
            <DropdownItem>
              <DropdownItemColumn>
                <IconWrapper>
                  <MoreHorizIcon />
                </IconWrapper>
                Dry Cleaning
              </DropdownItemColumn>
              <DropdownItemColumn>
                <IconWrapper>
                  <MoreHorizIcon />
                </IconWrapper>
                Phone Repair
              </DropdownItemColumn>
              <DropdownItemColumn>
                <IconWrapper>
                  <MoreHorizIcon />
                </IconWrapper>
                Bars
              </DropdownItemColumn>
              <DropdownItemColumn>
                <IconWrapper>
                  <MoreHorizIcon />
                </IconWrapper>
                Nightlife
              </DropdownItemColumn>
              <DropdownItemColumn>
                <IconWrapper>
                  <MoreHorizIcon />
                </IconWrapper>
                Hair Salons
              </DropdownItemColumn>
              <DropdownItemColumn>
                <IconWrapper>
                  <MoreHorizIcon />
                </IconWrapper>
                Gyms
              </DropdownItemColumn>
              <DropdownItemColumn>
                <IconWrapper>
                  <MoreHorizIcon />
                </IconWrapper>
                Massage
              </DropdownItemColumn>
              <DropdownItemColumn>
                <IconWrapper>
                  <MoreHorizIcon />
                </IconWrapper>
                Shopping
              </DropdownItemColumn>
            </DropdownItem>
          </DropdownMenu>
        )}
      </SearchBarItem>
    </SearchBarContainer>
  );
};

export default SearchBar;

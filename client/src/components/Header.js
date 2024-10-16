// client/src/components/Header.js
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import ClearIcon from "@mui/icons-material/Clear"; // Import clear icon
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"; // Import new down arrow icon

// Styled Components
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Removes the horizontal line */
  margin-top: 20px; /* Increased top margin */
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Logo = styled.img`
  height: 50px;
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  width: 55%;
  margin-left: 20px; /* Added margin to shift right */
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 10px;
    margin-left: 0; /* Reset margin for mobile view */
  }
`;

const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
  background-color: #fff;
  overflow: hidden;
  width: 77%; /* Increased width by 2 units */
  margin-right: 0;
`;

const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 50%;
`;

const Select = styled.select`
  width: 100%;
  height: 45px; /* Increased height */
  padding: 12px;
  border: none;
  background: none;
  outline: none;
  font-size: 16px; /* Increased font size */
  color: #4a4a4a; // Dark gray text color

  /* Remove default arrow */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

const ClearButton = styled.button`
  position: absolute;
  right: 10px;
  border: none;
  background: none;
  cursor: pointer;
  color: #4a4a4a; // Dark gray text color
  font-size: 16px; /* Increased font size */
  display: none;

  // Show clear button when hovered or when option is selected
  ${SelectWrapper}:hover &,
  ${Select}:focus + & {
    display: block;
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 30px;
  background-color: #ccc;
`;

const SearchButton = styled.button`
  background-color: red;
  color: white;
  padding: 0;
  width: 55px; /* Increased width by 2 units */
  height: 45px; /* Increased height to match combo box */
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0;
  font-size: 20px; /* Increased font size */
  text-align: center;
`;

const Menu = styled.nav`
  display: flex;
  align-items: center;
  margin-left: auto; /* Ensure menu items are right-aligned */
  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    margin-top: 10px;
  }
`;

const MenuItem = styled(Link)`
  display: flex;
  align-items: center;
  margin: 0 10px; /* Reduced margin to keep items in one line */
  cursor: pointer;
  text-decoration: none;
  color: #4a4a4a;
  font-size: 16px; /* Increased font size */
  font-weight: bold;
  letter-spacing: 0.5px;

  /* Ensure text does not wrap */
  white-space: nowrap;

  &:hover {
    color: red;
  }
`;

const DownArrow = styled(ExpandMoreIcon)`
  font-size: 20px; /* Increased font size */
  margin-left: 5px;
  color: #4a4a4a; /* Dark gray color */
`;

const Button = styled.button`
  border: 1px solid;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 16px; /* Increased font size */
  display: inline-block;
  margin: 0 5px;

  &:hover {
    opacity: 0.8;
  }
`;

const LoginButton = styled(Button)`
  border-color: white;
  background-color: transparent;
  color: white;
`;

const SignUpButton = styled(Button)`
  border-color: red;
  background-color: red;
  color: white;
`;

const Header = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("things to do");
  const [selectedLocation, setSelectedLocation] = useState("Location");

  useEffect(() => {
    fetch("/api/restaurants")
      .then((res) => res.json())
      .then((data) => setRestaurants(data))
      .catch((err) => console.error(err));
  }, []);

  const handleClearFilter = () => setSelectedFilter("things to do");
  const handleClearLocation = () => setSelectedLocation("Location");

  return (
    <HeaderContainer>
      <Logo src="/images/companyLogo.png" alt="Company Logo" />
      <SearchBox>
        <SelectContainer>
          <SelectWrapper>
            <Select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
            >
              <option value="things to do">things to do</option>
              <option value="Delivery">Delivery</option>
              <option value="Takeouts">Takeouts</option>
              <option value="Accountants">Accountants</option>
              <option value="Plumbers">Plumbers</option>
              <option value="Auto Repair">Auto Repair</option>
            </Select>
            <ClearButton onClick={handleClearFilter}>
              <ClearIcon />
            </ClearButton>
          </SelectWrapper>
          <Divider />
          <SelectWrapper>
            <Select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
            >
              <option value="Location">Location</option>
              {restaurants.map((restaurant, index) => (
                <option key={index} value={restaurant.name}>
                  {restaurant.name}
                </option>
              ))}
            </Select>
            <ClearButton onClick={handleClearLocation}>
              <ClearIcon />
            </ClearButton>
          </SelectWrapper>
        </SelectContainer>
        <SearchButton>
          <SearchIcon style={{ color: "white" }} />
        </SearchButton>
      </SearchBox>
      <Menu>
        <MenuItem to="/business">
          Business
          <DownArrow /> {/* Updated down arrow */}
        </MenuItem>
        <MenuItem to="/review">Write a Review</MenuItem>
        <MenuItem to="/project">Start a Project</MenuItem>
        <MenuItem to="/login">
          <LoginButton>Log In</LoginButton>
        </MenuItem>
        <MenuItem to="/signup">
          <SignUpButton>Sign Up</SignUpButton>
        </MenuItem>
      </Menu>
    </HeaderContainer>
  );
};

export default Header;

import React from "react";
import Header from "../components/Header";
import HomeAds from "../components/HomeAds";
import SearchBar from "../components/SearchBar"; // Import the SearchBar component

const Home = () => {
  return (
    <div>
      <Header />
      <SearchBar /> {/* Add SearchBar below Header */}
      <HomeAds />
    </div>
  );
};

export default Home;

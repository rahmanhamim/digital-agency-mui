import React from "react";
import Footer from "../../Footer/Footer";
import Navigation from "../../Navigation/Navigation";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Feature from "../Feature/Feature";
import Portfolio from "../Portfolio/Portfolio";
import Service from "../Service/Service";

const Home = () => {
 return (
  <>
   <Navigation />
   <Banner />
   <Feature />
   <Service />
   <Portfolio />
   <Contact />
   <Footer />
  </>
 );
};

export default Home;

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

import "../assets/css/about.css";
import "../assets/css/main.css";
import AboutCompany from "../components/about-company/AboutCompany";

export default function About() {
  return (
    <>
      <Header></Header>
      <AboutCompany />
      <Footer></Footer>
    </>
  );
}

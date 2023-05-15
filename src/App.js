import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Contact from "./components/Pages/Contact";
import About from "./components/Pages/About";
import Portfolio from "./components/Pages/Portfolio";
import Resume from "./components/Pages/Resume";

function App() {
  const [currentPage, setCurrentPage] = useState("About");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, it returns the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Portfolio") {
      return (
        <>
          <h2>My Projects</h2>
          <div className="project-container">
            <Portfolio />
          </div>
        </>
      );
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div className="App">
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />

      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-3 col-sm-4">
            <nav>
              <ul className="list-group">
                <li
                  className={`list-group-item ${
                    currentPage === "About" ? "active" : ""
                  }`}
                  onClick={() => handlePageChange("About")}
                >
                  About
                </li>
                <li
                  className={`list-group-item ${
                    currentPage === "Portfolio" ? "active" : ""
                  }`}
                  onClick={() => handlePageChange("Portfolio")}
                >
                  Portfolio
                </li>
                <li
                  className={`list-group-item ${
                    currentPage === "Resume" ? "active" : ""
                  }`}
                  onClick={() => handlePageChange("Resume")}
                >
                  Resume
                </li>
                <li
                  className={`list-group-item ${
                    currentPage === "Contact" ? "active" : ""
                  }`}
                  onClick={() => handlePageChange("Contact")}
                >
                  Contact
                </li>
              </ul>
            </nav>
          </div>

          <div className="col-lg-10 col-md-9 col-sm-8">{renderPage()}</div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
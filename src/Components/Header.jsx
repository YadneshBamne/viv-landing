import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Aurora from "../bits/Aurora";
import TextPressure from "../bits/TextPressure";
import Dock from "../bits/dock";
import {
  AccessibilityIcon,
  ArchiveIcon,
  HomeIcon,
  Settings2Icon,
  User2,
} from "lucide-react";
import Folder from "../bits/folder";
import AnimatedContent from "../bits/Animatedcontent";
import SpotlightCard from "@/bits/spotlightcard";
import ClickSpark from "@/bits/clickspark";

const Header = () => {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  const items = [
    {
      icon: <HomeIcon size={20} />,
      label: "Home",
      onClick: () => alert("Home!"),
    },
    {
      icon: <ArchiveIcon size={20} />,
      label: "Archive",
      onClick: () => alert("Archive!"),
    },
    {
      icon: <User2 size={20} />,
      label: "Profile",
      onClick: () => alert("Profile!"),
    },
    {
      icon: <Settings2Icon size={20} />,
      label: "Settings",
      onClick: () => alert("Settings!"),
    },
  ];

  const handleRedirect = (url) => {
    window.location.href = url;
  };

  return (
    <div
      className="position-relative bg-dark text-white"
      style={{ margin: 0, padding: 0 }}
    >
      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        {/* Aurora Background */}
        <div className="position-absolute top-0 start-0 w-100 h-100">
          <Aurora
            colorStops={["#b0c4de", "#dcdcdc", "#a9a9a9", "#2f4f4f"]}
            blend={0.4}
            amplitude={0.4}
            speed={1.5}
          />
        </div>

        {/* Sticky Navbar */}
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-transparent position-sticky top-0 z-3 border-bottom border-light border-opacity-10"
          style={{
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            width: "100%",
            margin: 0,
            padding: "15px",
          }}
        >
          <div
            className="container-fluid d-flex justify-content-between align-items-center"
            style={{ margin: 0, padding: 0 }}
          >
            <a
              className="navbar-brand"
              href="#"
              style={{ margin: 0, fontFamily: "monospace" }}
            >
              ViV AI
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <div className="ms-auto d-flex" style={{ margin: 0 }}>
                <button
                  className="btn btn-outline-light me-2"
                  style={{
                    borderRadius: "20px",
                    margin: 0,
                    fontFamily: "monospace",
                  }}
                >
                  Try ViV AI
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Centered Content */}
        <div
          className="position-relative d-flex flex-column align-items-center justify-content-center text-center"
          style={{ minHeight: "100vh", margin: 0, padding: 10 }}
        >
          <div
            style={{ width: "100%", maxWidth: "800px", textAlign: "center" }}
          >
            <h1
              className="display-4 fw-bold"
              style={{
                fontSize: "4rem",
                lineHeight: "1.2",
                margin: "0 auto 1rem auto",
                background: "linear-gradient(90deg, #ffffff, #cccccc)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: "monospace",
              }}
            >
              ViV AI is the new way to build your future.
            </h1>
            <p
              className="lead"
              style={{
                maxWidth: "600px",
                color: "#ccc",
                margin: "0 auto 2rem auto",
              }}
            >
              Ask Anything and generate instant answers.
            </p>

            <button
              className="btn btn-outline-light"
              style={{
                borderRadius: "20px",
                padding: "10px 20px",
                display: "inline-block",
                margin: "0 auto",
              }}
            >
              Get Started for free →
            </button>
          </div>
        </div>

        {/* Products Section */}
        <div
          style={{ minHeight: "100vh", margin: 0, padding: 0 }}
          className="bg-dark border-top border-secondary border-opacity-10"
        >
          <div
            className="position-relative d-flex flex-column align-items-center text-center py-5"
            style={{ minHeight: "100vh", padding: "0 15px" }}
          >
            <div style={{ maxWidth: "1200px", width: "100%" }}>
              <h2
                className="display-5 fw-bold mb-4"
                style={{ color: "#ffffff", fontFamily: "monospace" }}
              >
                AI for INDIA
              </h2>
              <AnimatedContent
                blur={true}
                duration={1000}
                easing="ease-out"
                initialOpacity={0}
              >
                <div className="row justify-content-center">
                  {/* ViV Card */}
                  <div className="col-12 col-md-4 mb-6">
                    <div
                      style={{
                        border: "1px solid #333",
                        borderRadius: "20px",
                        padding: "15px",
                        height: "400px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        backdropFilter: "blur(10px)", // Blur background effect
                        WebkitBackdropFilter: "blur(10px)", // For Safari
                        backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background for readability
                      }}
                    >
                      <div>
                        <h4
                          style={{ color: "#ffffff", fontFamily: "monospace" }}
                        >
                          ViV
                        </h4>
                        <p style={{ color: "#ccc", fontSize: "0.9rem" }}>
                          ViV AI is your personal guide, now accessible on
                          viv.com, iOS, and Android. Explore the universe with
                          AI.
                        </p>
                      </div>
                      <div style={{ marginTop: "auto" }}>
                        <div
                          style={{
                            width: "100%",
                            height: "100px",
                            background: "url(https://via.placeholder.com/150)",
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                          }}
                        ></div>
                        <button
                          className="btn btn-outline-light mt-2 w-50"
                          style={{ borderRadius: "20px" }}
                          onClick={() => handleRedirect("/viv")}
                        >
                          Learn More →
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* API Card */}
                  <div className="col-12 col-md-4 mb-4">
                    <div
                      style={{
                        border: "1px solid #333",
                        borderRadius: "20px",
                        padding: "15px",
                        height: "400px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        backdropFilter: "blur(10px)", // Blur background effect
                        WebkitBackdropFilter: "blur(10px)", // For Safari
                        backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background for readability
                      }}
                    >
                      <div>
                        <h4
                          style={{ color: "#ffffff", fontFamily: "monospace" }}
                        >
                          API
                        </h4>
                        <p style={{ color: "#ccc", fontSize: "0.9rem" }}>
                          Supercharge your applications with Grok's enhanced
                          speed, precision, and multilingual capabilities.
                        </p>
                      </div>
                      <div style={{ marginTop: "auto" }}>
                        <div
                          style={{
                            width: "100%",
                            height: "100px",
                            background: "url(https://via.placeholder.com/150)",
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                          }}
                        ></div>
                        <button
                          className="btn btn-outline-light mt-2 w-50"
                          style={{ borderRadius: "20px" }}
                          onClick={() => handleRedirect("/api")}
                        >
                          Learn More →
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Developer Docs Card */}
                  <div className="col-12 col-md-4 mb-4">
                    <div
                      style={{
                        border: "1px solid #333",
                        borderRadius: "15px",
                        alignItems: "center",
                        padding: "20px",
                        height: "400px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        backdropFilter: "blur(10px)", // Blur background effect
                        WebkitBackdropFilter: "blur(10px)", // For Safari
                        backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background for readability
                      }}
                    >
                      <div>
                        <h4
                          style={{ color: "#ffffff", fontFamily: "monospace" }}
                        >
                          Developer Docs
                        </h4>
                        <p style={{ color: "#ccc", fontSize: "0.9rem" }}>
                          Learn how to quickly install ViV at the heart of your
                          applications and explore guides covering common use
                          cases.
                        </p>
                      </div>
                      <div
                        style={{
                          marginTop: "auto",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "100px",
                        }}
                      >
                        <Folder
                          size={1.5}
                          color="#333333"
                          className="custom-folder mb-5 pb-5"
                        />
                      </div>
                      <button
                        className="btn btn-outline-light mt-2 w-50 items-center"
                        style={{ borderRadius: "20px" }}
                        onClick={() => handleRedirect("/docs")}
                      >
                        Learn More →
                      </button>
                    </div>
                  </div>
                </div>
              </AnimatedContent>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div
          style={{ minHeight: "100vh", margin: 0, padding: 0 }}
          className="bg-dark border-top border-secondary border-opacity-10 "
        >
          <div
            className="position-relative d-flex flex-column align-items-center text-center py-5"
            style={{ minHeight: "100vh", padding: "0 15px" }}
          >
            <div style={{ maxWidth: "1200px", width: "100%" }}>
              <h2
                className="display-5 fw-bold mb-4"
                style={{ color: "#ffffff", fontFamily: "monospace" }}
              >
                Pricing Plans
              </h2>
              <div className="row justify-content-center">
                {/* Free Plan */}
                <div className="col-12 col-md-4 mb-4">
                  <SpotlightCard
                    className="custom-spotlight-card"
                    spotlightColor="rgba(135, 142, 153, 0.3)"
                  >
                    <div
                      style={{
                        padding: "20px",
                        height: "400px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <h4
                          style={{ color: "#ffffff", fontFamily: "monospace" }}
                        >
                          Free
                        </h4>
                        <p style={{ color: "#ccc", fontSize: "0.9rem" }}>
                          Basic access to ViV AI features.
                        </p>
                        <h3 style={{ color: "#ffffff", margin: "1rem 0" }}>
                          $0
                        </h3>
                        <ul
                          style={{
                            color: "#ccc",
                            textAlign: "left",
                            paddingLeft: "20px",
                          }}
                        >
                          <li>100 requests/month</li>
                          <li>Standard support</li>
                          <li>Basic features</li>
                        </ul>
                      </div>
                      <div style={{ marginTop: "auto" }}>
                        <button
                          className="btn btn-outline-light w-100"
                          style={{ borderRadius: "20px", padding: "10px" }}
                          onClick={() => handleRedirect("/pricing/free")}
                        >
                          Get Started →
                        </button>
                      </div>
                    </div>
                  </SpotlightCard>
                </div>

                {/* Pro Plan */}
                <div className="col-12 col-md-4 mb-4">
                  <SpotlightCard
                    className="custom-spotlight-card"
                    spotlightColor="rgba(0, 229, 255, 0.2)"
                  >
                    <div
                      style={{
                        padding: "20px",
                        height: "400px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <h4
                          style={{ color: "#ffffff", fontFamily: "monospace" }}
                        >
                          Pro
                        </h4>
                        <p style={{ color: "#ccc", fontSize: "0.9rem" }}>
                          Enhanced features for power users.
                        </p>
                        <h3 style={{ color: "#ffffff", margin: "1rem 0" }}>
                          $9.99
                        </h3>
                        <ul
                          style={{
                            color: "#ccc",
                            textAlign: "left",
                            paddingLeft: "20px",
                          }}
                        >
                          <li>1000 requests/month</li>
                          <li>Priority support</li>
                          <li>Advanced features</li>
                        </ul>
                      </div>
                      <div style={{ marginTop: "auto" }}>
                        <button
                          className="btn btn-outline-light w-100"
                          style={{ borderRadius: "20px", padding: "10px" }}
                          onClick={() => handleRedirect("/pricing/pro")}
                        >
                          Get Started →
                        </button>
                      </div>
                    </div>
                  </SpotlightCard>
                </div>

                {/* Enterprise Plan */}
                <div className="col-12 col-md-4 mb-4">
                  <SpotlightCard
                    className="custom-spotlight-card"
                    spotlightColor="rgba(246, 202, 131, 0.2)"
                  >
                    <div
                      style={{
                        padding: "20px",
                        height: "400px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <h4
                          style={{ color: "#ffffff", fontFamily: "monospace" }}
                        >
                          Enterprise
                        </h4>
                        <p style={{ color: "#ccc", fontSize: "0.9rem" }}>
                          Custom solutions for businesses.
                        </p>
                        <h3 style={{ color: "#ffffff", margin: "1rem 0" }}>
                          Custom
                        </h3>
                        <ul
                          style={{
                            color: "#ccc",
                            textAlign: "left",
                            paddingLeft: "20px",
                          }}
                        >
                          <li>Unlimited requests</li>
                          <li>Dedicated support</li>
                          <li>Premium features</li>
                        </ul>
                      </div>
                      <div style={{ marginTop: "auto" }}>
                        <button
                          className="btn btn-outline-light w-100"
                          style={{ borderRadius: "20px", padding: "10px" }}
                          onClick={() => handleRedirect("/pricing/enterprise")}
                        >
                          Contact Us →
                        </button>
                      </div>
                    </div>
                  </SpotlightCard>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div
          className="bg-dark text-center py-6"
          style={{
            minHeight: "600px",
            padding: "40px 15px",
            background: "linear-gradient(to top, #494949 , #212529)", // Gradient effect
          }}
        >
          <div
            className="container"
            style={{ maxWidth: "1200px", fontSize: "1.3rem" }}
          >
            <div className="row justify-content-center text-start">
              {/* Try Grok On */}
              <div className="col-12 col-md-3 mb-4">
                <h5 style={{ color: "#ccc", fontFamily: "monospace" }}>
                  TRY ViV ON
                </h5>
                <ul className="list-unstyled" style={{ color: "#999" }}>
                  <li>Web</li>
                  <li>iOS</li>
                  <li>Android</li>
                </ul>
              </div>
              {/* Products */}
              <div className="col-12 col-md-3 mb-4">
                <h5 style={{ color: "#ccc", fontFamily: "monospace" }}>
                  PRODUCTS
                </h5>
                <ul className="list-unstyled" style={{ color: "#999" }}>
                  <li>ViV</li>
                  <li>API</li>
                  <li>PLAYGROUND</li>
                </ul>
              </div>
              {/* Company */}
              <div className="col-12 col-md-3 mb-4">
                <h5 style={{ color: "#ccc", fontFamily: "monospace" }}>
                  COMPANY
                </h5>
                <ul className="list-unstyled" style={{ color: "#999" }}>
                  <li>Company</li>
                  <li>Careers</li>
                  <li>Contact</li>
                  <li>News</li>
                </ul>
              </div>
              {/* Resources */}
              <div className="col-12 col-md-3 mb-4">
                <h5 style={{ color: "#ccc", fontFamily: "monospace" }}>
                  RESOURCES
                </h5>
                <ul className="list-unstyled" style={{ color: "#999" }}>
                  <li>Documentation</li>
                  <li>Privacy policy</li>
                  <li>Security</li>
                  <li>Legal</li>
                  <li>Status</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Fixed Dock */}
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 1000,
            margin: 0,
            padding: 0,
          }}
        >
          <Dock
            items={items}
            panelHeight={68}
            baseItemSize={50}
            magnification={70}
          />
        </div>
      </ClickSpark>
    </div>
  );
};

export default Header;

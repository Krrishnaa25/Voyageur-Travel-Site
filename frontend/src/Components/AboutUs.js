import React from "react";
import "./AboutUs.css";
import atharv from "./images/atharv.jfif";
import krishna from "./images/krishna.jpeg";
import umar from "./images/umar.jpeg";
import kavya from "./images/kavya.jpg";

const AboutUs = () => {
  return (
    <>
      <div className="aboutus_heading">About Us</div>
      <div className="aboutus_text1">Welcome to Voyageur</div>
      <div className="aboutus_text2">
        A hotel booking website that gives you more than just a great
        experience.
      </div>
      <div className="aboutus_text3"> Based in Surat, Gujarat.</div>
      <div className="aboutus_text4">Team</div>
      <div class="row">
        <div class="column">
          <div class="card">
            <img src={kavya} alt="Kavya" className="team_picture" />
            <div class="container_card">
              <h2>Kavya Parekh</h2>
              <p class="title">SVNIT, Surat</p>
              <p>u20cs036@coed.svnit.ac.in</p>
              <p>
                <a
                  href="https://www.linkedin.com/in/kavya-parekh/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <button class="button">Contact</button>
                </a>
              </p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img src={atharv} alt="Atharv" className="team_picture" />
            <div class="container_card">
              <h2>Atharv Patil</h2>
              <p class="title">SVNIT, Surat</p>
              <p>u20cs063@coed.svnit.ac.in</p>
              <p>
                <a
                  href="https://www.linkedin.com/in/atharv-patil-936466206/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <button class="button">Contact</button>
                </a>
              </p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img src={krishna} alt="Krishna" className="team_picture" />
            <div class="container_card">
              <h2>Krishna Shreeram</h2>
              <p class="title">SVNIT, Surat</p>
              <p>u20cs054@coed.svnit.ac.in</p>
              <p>
                <a
                  href="https://www.linkedin.com/in/krishna-shreeram-2764a0217/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <button class="button">Contact</button>
                </a>
              </p>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <img src={umar} alt="Umar" className="team_picture" />
            <div class="container_card">
              <h2>Umar Shariff</h2>
              <p class="title">SVNIT, Surat</p>
              <p>u20cs075@coed.svnit.ac.in</p>
              <p>
                <a
                  href="https://www.linkedin.com/in/umarshariff/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <button class="button">Contact</button>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;

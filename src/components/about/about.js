import React from 'react';
import './about.css';
import { FaCode, FaCamera, FaPaintBrush, FaSearch } from 'react-icons/fa';

function About() {
  return (
    <div className="about-container">
      {/* Section Titre */}
      <h2 className="about-title">About</h2>

      <div className="ABOUT">
        {/* Section Image */}
        <div className="image-section">
          <img className="img-about" src={require("../../assets/images/a1.png")} alt="My photo" />
        </div>

        {/* Section Texte */}
        <div className="text-section-about">
          <p>
            Bienvenue sur notre page "À propos" ! Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed vitae enim euismod, consectetur arcu eu, pretium turpis. Nunc ac metus fermentum, posuere eros
            eget, iaculis ligula. Nullam feugiat orci vel arcu gravida, sed sagittis sapien pellentesque.
          </p>
          <h5>Other Skills</h5>
          <div className="icons-section-about">
            <FaCode size={20} />
            Development
            <FaCamera size={20} />
            Photography
          </div>
          <div className="icons-section-about">
            <FaPaintBrush size={20} />
            Illustrating
            <FaSearch size={20} />
            User Research
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

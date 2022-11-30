import React from 'react';
import './About.css';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <h1>About</h1>

      <h3>This app was inspired by the <a href="https://dakotaswcd.org/services/landscaping-for-clean-water/">Landscaping For Clean Water Program </a>in Dakota County,
        Minnesota. In the summer of 2020, I received a grant through this program to build a rain garden with plants that are native to Minnesota. After going through the process myself and learning a lot
        about rain gardens, Minnesota wildflowers, and soil and water conservation, I wanted to create an app that would connect folks who are interested in
        learning more about rain gardens with resources for designing and installing them. In the future, I would like to add more features to this app about rain garden maintenance for those who have already installed one.

      </h3>


      <img src="background/raingarden.png" alt="picture of a rain garden with yellow conflowers and showy goldenrod" />
      <label>Our rain garden just turned 2 years old!</label>



    </div>

  );
}

export default AboutPage;

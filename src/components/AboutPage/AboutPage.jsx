import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>

        <p>This app was inspired by the <a href = "https://dakotaswcd.org/services/landscaping-for-clean-water/">Landscaping For Clean Water Program </a>in Dakota County, 
          Minnesota. In the summer of 2020, I received a grant through this program to build a rain garden with plants that are native to Minnesota. After going through the process myself and learning a lot 
          about rain gardens, soil and water conservation, and Minnesota wildflowers, I wanted to share the information I learned and resources I used with others who are interested in 
          learning more about rain gardens, want to choose plants for their garden, or want to build their own rain garden. While this app is currently specific to building rain gardens in Minnesota, I hope to expand this app in the future to include many different regions.
        </p>

        <img src="/images/raingarden.png" alt="picture of a rain garden with yellow conflowers and showy goldenrod" />
        <label>Our rain garden just turned 2 years old this summer!</label>


      </div>
    </div>
  );
}

export default AboutPage;

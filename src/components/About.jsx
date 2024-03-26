import React from 'react'
import image1 from '../Assets/Black_White_Elegant_Monogram_Initial_Name_Logo-removebg-preview.png';
import image2 from '../Assets/Abigail-Hayford.jpeg';

export default function About() {
  return (
    <section>
    <div class="about-section">
    <div class="about-text">
      <div class="icon1">
        <img
          src={image1}
          alt=""
        />
      </div>

      <div class="aboutSection_text">
        <h2>About Us</h2>
        <br />
      </div>
    </div>
    <div class="About-grid">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, autem alias, minus nihil eaque magnam error velit ipsa, eligendi aspernatur a dolorum eos itaque assumenda commodi fugit hic dolorem veniam? </p>
        <div class="card">
            <img
              src={image2}
              alt="Abigail"
            //   style="width: 100%"
            />
            <div class="container">
              <h4><b>Abigail Hayford </b></h4>
              <p>
                Meet our CEO, who has done nothing but give you best. As a young
                graduste from KNUST..... <button>Seemore</button>
              </p>
            </div>
          </div>
    </div>
    
  </div>
</section>
  )
}

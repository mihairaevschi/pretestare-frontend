import React from 'react';

export default class About extends React.Component {
  render() {
    return(
      <section className='about-section'>
        <div className='about-center'>
          <h1>ABOUT US</h1>
          <span className='line'></span>
          <span className='about-lorem'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr amet</span>
          <div className='about-between'>
            <div className='about-between-element'>
              <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</span>
            </div>
            <div className='about-between-element'>
              <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</span>
            </div>
          </div>
          <div id='actors' className='about-between'>
            <div className='about-between-img'>
              <img src='https://i.insider.com/5b4df27ac0229b1b008b4c15?width=1136&format=jpeg' />
              <span>Dwayne Johnson</span>
              <h4>Actor</h4>
            </div>
            <div className='about-between-img'>
              <img src='https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F968210608%2F960x0.jpg%3Ffit%3Dscale' />
              <span>Chris Hemsworth</span>
              <h4>Actor</h4>
            </div>
            <div className='about-between-img'>
              <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Deadpool_2_Japan_Premiere_Red_Carpet_Ryan_Reynolds_%28cropped%29.jpg/1200px-Deadpool_2_Japan_Premiere_Red_Carpet_Ryan_Reynolds_%28cropped%29.jpg' />
              <span>Ryan Reynolds</span>
              <h4>Actor</h4>
            </div>
            <div className='about-between-img'>
              <img src='https://thesaxon.org/wp-content/uploads/2021/02/shailene-woodley-divergent-big-little-lies-in-a-relationship-with-aaron-rodgers-thanks-to-a-famous-actress-the-fans-are-convinced-1d4c816.jpg' />
              <span>Shailene Woodley</span>
              <h4>Actrees</h4>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

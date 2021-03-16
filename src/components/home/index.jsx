import React from 'react';
import axios from 'axios';

export default class HomeIndex extends React.Component {
  state = {
    name: '',
    email: '',
    subject: '',
    company_name: '',
    content: ''
  }
  onName = event => {
    this.setState({ name: event.target.value });
  }
  onEmail = event => {
    this.setState({ email: event.target.value });
  }
  onSubject = event => {
    this.setState({ subject: event.target.value });
  }
  onCompanyName = event => {
    this.setState({ company_name: event.target.value });
  }
  onContent = event => {
    this.setState({ content: event.target.value });
  }
  handleSubmit = event => {
    event.preventDefault();
    let name = this.state.name;
    let email = this.state.email;
    let subject = this.state.subject;
    let company_name = this.state.company_name;
    let content = this.state.content;
    if(
      name !== '' &&
      email !== '' &&
      subject !== '' &&
      company_name !== '' &&
      content !== '') {
      axios.post(`http://127.0.0.1:8000/api/create-feedback/`, {
        name: this.state.name,
        email: this.state.email,
        subject: this.state.subject,
        company_name: this.state.company_name,
        content: this.state.company_name
      })
        .then(res => {
            alert('Succes');
        })
        .catch(error => {
          alert('Eroare');
        });
    }else {
      alert("Verificati formularul!");
    }
  }
  render() {
    return(
      <div className='wrapper'>
        <section className='first-section'>
          <div className='first-section-center'>
            <h1>THIS IS SPECTRUM</h1>
            <h3>Responsive. Retina Ready. Sketch Support</h3>
            <div className='first-section-buttons'>
              <a href='/start'>
                <div className='first-start-now'>
                  START NOW
                </div>
              </a>
              <a href='/about'>
                <div className='first-learn-more'>
                  LEARN MORE
                </div>
              </a>
            </div>
          </div>
        </section>
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
        <section className='latest-works'>
          <div className='latest-works-center'>
            <div className='latest-works-first-block'>
              <h1>Latest works</h1>
              <span className='line'></span>
              <ul>
                <li>All</li>
                <li>Branding</li>
                <li>Design</li>
                <li>Development</li>
                <li>Strategy</li>
              </ul>
            </div>
            <div className='latest-works-section-images'>
              <div className='latest-works-img'>
                <img src='https://images.unsplash.com/photo-1614442042855-e17d53875286?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=675&q=80' />
                <div className='latest-img-content'>
                <div className='latest-title'>Pizza</div>
                <div className='latest-view'>VIEW</div>
                </div>
              </div>
              <div className='latest-works-img'>
                <img src='https://images.unsplash.com/photo-1614442042855-e17d53875286?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=675&q=80' />
                <div className='latest-img-content'>
                <div className='latest-title'>Pizza</div>
                <div className='latest-view'>VIEW</div>
                </div>
              </div>
              <div className='latest-works-img'>
                <img src='https://images.unsplash.com/photo-1614442042855-e17d53875286?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=675&q=80' />
                <div className='latest-img-content'>
                <div className='latest-title'>Pizza</div>
                <div className='latest-view'>VIEW</div>
                </div>
              </div>
              <div className='latest-works-img'>
                <img src='https://images.unsplash.com/photo-1614442042855-e17d53875286?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=675&q=80' />
                <div className='latest-img-content'>
                <div className='latest-title'>Pizza</div>
                <div className='latest-view'>VIEW</div>
                </div>
              </div>
              <div className='latest-works-img'>
                <img src='https://images.unsplash.com/photo-1614442042855-e17d53875286?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=675&q=80' />
                <div className='latest-img-content'>
                <div className='latest-title'>Pizza</div>
                <div className='latest-view'>VIEW</div>
                </div>
              </div>
              <div className='latest-works-img'>
                <img src='https://images.unsplash.com/photo-1614442042855-e17d53875286?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=675&q=80' />
                <div className='latest-img-content'>
                <div className='latest-title'>Pizza</div>
                <div className='latest-view'>VIEW</div>
                </div>
              </div>
              <div className='latest-works-img'>
                <img src='https://images.unsplash.com/photo-1614442042855-e17d53875286?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=675&q=80' />
                <div className='latest-img-content'>
                <div className='latest-title'>Pizza</div>
                <div className='latest-view'>VIEW</div>
                </div>
              </div>
              <div className='latest-works-img'>
                <img src='https://images.unsplash.com/photo-1614442042855-e17d53875286?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=675&q=80' />
                <div className='latest-img-content'>
                <div className='latest-title'>Pizza</div>
                <div className='latest-view'>VIEW</div>
                </div>
              </div>
              <div className='latest-works-img'>
                <img src='https://images.unsplash.com/photo-1614442042855-e17d53875286?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=675&q=80' />
                <div className='latest-img-content'>
                <div className='latest-title'>Pizza</div>
                <div className='latest-view'>VIEW</div>
                </div>
              </div>
            </div>
            <div className='get-in-touch'>
              <h1>GET IN TOUCH</h1>
              <span className='line'></span>
              <span className='about-lorem'>Lorem ipsum dolor-sit-amet, conseseteur sadipscing elitr amet</span>
              <div className='form-content'>
                <div className='get-left'>
                  <article className='left-article'>
                    <span className=''>ADDRESS</span>
                    <span>312. 7th Ave, New York</span>
                    <span>NY 101200, United States of America</span>
                  </article>
                  <article className='left-article'>
                    <span className=''>HOTLINE(24X7)</span>
                    <span>+65 0052 300</span>
                    <span>+88 01723 511 340</span>
                  </article>
                  <article className='left-article'>
                    <span className=''>E-MAIL</span>
                    <span>postaelectronica@gmail.com</span>
                    <span>postaelectronica2@gmail.com</span>
                  </article>
                </div>
                <form onSubmit={this.handleSubmit} className='get-right'>
                  <input onChange={this.onName} className='input-two' type='text' placeholder='Name'/>
                  <input onChange={this.onEmail} className='input-two' type='email' placeholder='YOUR E-MAIL'/>
                  <input onChange={this.onSubject} className='input-two' type='text' placeholder='YOUR SUBJECT'/>
                  <input onChange={this.onCompanyName} className='input-two' type='text' placeholder='COMPANY NAME'/>
                  <textarea onChange={this.onContent} className='textarea'></textarea>
                  <button className='form-btn' type='submit'>SEND MESSAGE</button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className='footer'>
          @Created by Raevschi Mihai
        </section>
      </div>
    )
  }
}

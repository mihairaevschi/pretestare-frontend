import React from 'react';
import axios from 'axios';
export default class Latest extends React.Component {
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
    )
  }
}

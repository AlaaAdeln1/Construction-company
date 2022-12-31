import React, { Component } from 'react';
import '../../sass/footer.css'
class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
        <div className='main'>
        <div className='text'>
          <h4>Construction company</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit,the this is Construction
            Neque enim laborum optio quidem eos ex quaerat,tempore,consequatur
            delectusthe this is Construction</p>
        </div>
        <div className='list'>
          <h5>Usefil Links</h5>
          <ul>
            <li>Construction company</li>
            <li>Construction company</li>
            <li>Construction company</li>
            <li>Construction company</li>
            <li>Construction company</li>
          </ul>
        </div>
        <div className='Servie'>
          <h5>Our Servie</h5>
          <ul>
            <li>visualizing Architecture</li>
            <li>Daily Dose of Architecture</li>
            <li>visualizing Architecture</li>
            <li>Daily Dose of Architecture</li>
          </ul>
          </div>
          </div>
        <div className='link'>
          <ul>
            <li><a href="https://www.github.com" target="_blank" rel="noreferrer">Github</a></li>
            <li><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">Linkedin</a></li>
            <li><a href="https://www.facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
        </ul>
          </div>
      </footer>
    )
  }
}

export default Footer;
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

export default class App extends Component {
  render() {
    return <div className="App">
      <header className="header">
        <span style={{
          float: "left"
        }}>
          <img src='img/nz_flag.svg' className='svgicon'/>
          <span className='conntarget'>
            Connected securely to <i>Wellington Live Beta</i> <b>beta.wgtnlive.jacksonrakena.com</b>
            <span className='conntarget'>
              <a href='#'>Contact support</a>
            </span>
            <span className='conntarget'>
              &#8226;
            </span>
            <span className='conntarget'>
              <a href='#'>Switch to live</a>
            </span>
          </span>
        </span>
        <span style={{
          float: "right"
        }}>
          <span className='right-float'>
            BETA SOFTWARE - NOT FOR PUBLIC USE
          </span>
        </span>
      </header>
      Hello.
    </div>
  }
}
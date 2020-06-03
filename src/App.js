import React, {Component} from "react";
import {CubeGrid } from 'styled-loaders-react'
import "./styles.css";
import './css/terminal.scss'
import './css/label.scss'
import './css/footer.scss'
import './css/header.scss'
import './css/textfile.scss'
import './css/svgCenter.scss'
import './css/portfolio.scss'
import './css/aboutme.scss'

import SvgCenter from './components/static/SvgCenter';
import Header from './components/static/Header'
import Footer from './components/static/Footer';
import TerminalWindow from './components/TerminalWindow';
import TextFileWindow from './components/TextFileWindow';
import PortfolioWindow from './components/PortfolioWindow';
import AboutMeWindow from './components/AboutMeWindow';

class App extends Component{

  state = {
    loading: true
  }


  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        loading: false
      })
    }, 3000)
  }

  render(){
    return (
      <div className="App">
        {
          this.state.loading ? <CubeGrid color="yellow"/> : <Desktop/>
        }
      </div>
    );
  }
  
}


const Desktop = () => {
  return (
    <React.Fragment>
        <SvgCenter />
        <Header />
        
        <div className="Desktop">
          <TerminalWindow />
          <TextFileWindow />
          <PortfolioWindow />
          <AboutMeWindow />
        </div>
        
        <Footer />
    </React.Fragment>
  )
}

export default App;

import React from "react";
import "./styles.css";
import './css/terminal.scss'
import './css/label.scss'
import './css/footer.scss'
import './css/header.scss'
import './css/textfile.scss'
import './css/svgCenter.scss'
import './css/portfolio.scss'

import SvgCenter from './components/static/SvgCenter';
import Header from './components/static/Header'
import Footer from './components/static/Footer';
import TerminalWindow from './components/TerminalWindow';
import TextFileWindow from './components/TextFileWindow';
import PortfolioWindow from './components/PortfolioWindow';

export default function App() {

  return (
    <div className="App">
      <SvgCenter />
      <Header />
      
      <div className="Desktop">
    		<TerminalWindow />
    		<TextFileWindow />
        <PortfolioWindow />
      </div>
      

      <Footer />
    </div>
  );
}

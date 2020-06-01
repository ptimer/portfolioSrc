import React from "react";
import "./styles.css";
import './css/terminal.scss'

import TerminalWindow from './components/TerminalWindow';

export default function App() {

  return (
    <div className="App">
      <TerminalWindow />
    </div>
  );
}

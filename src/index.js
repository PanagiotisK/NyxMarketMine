import React from 'react'
import ReactDOM from 'react-dom';
import Homepage from './Components/homepage';
import { BrowserRouter } from 'react-router-dom';

import './styles/stylesheet.css';
import './styles/scrollbar.css'


ReactDOM.render(<BrowserRouter><Homepage/></BrowserRouter>, document.getElementById('root'));
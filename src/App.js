import React, { Component } from 'react';
import CharacterCard from './CharacterCard'; 
import WordCard from './WordCard';
import './App.css';

const word = "Songkla";
class App extends Component {
  render() {
    return (
      <div>
        {<WordCard value="songkla"/>}
      </div>
      );
    }
  }
export default App;
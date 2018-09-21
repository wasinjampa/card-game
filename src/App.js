import React, { Component } from 'react';
import CharacterCard from './CharacterCard'; 
import WordCard from './WordCard';
import './App.css';

const word = "PrinceOfSongkla";
class App extends Component {
  render() {
    return (
      <div>
      {<WordCard value="princeofsongkla"/>}
      </div>
      );
    }
  }
export default App;
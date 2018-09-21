import React, { Component } from 'react';
import CharacterCard from './CharacterCard';
import _ from 'lodash';
 
const prepareStateFromWord = (give_word) =>{
    let word = give_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return{
        word,
        chars,
        attempt: 1,
        guess:[],
        completed: false 
       } 
}
 export default class WordCard extends Component {
    constructor(props){
        super(props)
        this.state = prepareStateFromWord(this.props.value)
    }
    activateHandler = (c) => {
        let guess = [this.state.guess]+ c
        console.log("index : " + guess.length +" / " + this.state.word.length )
        this.setState({guess})
        if (guess.length == this.state.chars.length){
            if(guess == this.state.word){
                this.setState({guess: [],complete:true})
            }else{
                this.setState({guess:[],attempt:this.state.attempt+1 })
            }
        }
    }
    render(){
        return(
            <div className= "App">
            <h1>เริ่มเกมส์</h1>
            <h2>คำใบ้</h2>
            <img src ='https://www.scholarship.in.th/wp-content/uploads/2014/07/017.jpg'/>
            <h3>เป็นชื่อมหาวิทยาลัยหนึ่งในภาคใต้</h3>
            { Array.from(this.state.chars).map( 
                    (c,i)=> <CharacterCard value = {c} key = {i} attempt={this.state.attempt} 
                    activateHandler={this.activateHandler}/> 
                )
            }
            <h1>รอบที่ {this.state.attempt}</h1>
            <h2>{this.state.complete? "CORRECT!!" : ""}</h2>
            <h5>มาฟังเพลงระบายอารมณ์กันก่อนนะ ^^</h5>
            <iframe 
            width="863" 
            height="360" 
            src="https://www.youtube.com/embed/1sl1PxeU_wk?ecver=2?playlist=1sl1PxeU_wk?ecver=2;autoplay=1&loop=1&rel=0&amp;showinfo=0"
            frameborder="0" 
            allow="autoplay; encrypted-media" 
            allowfullscreen></iframe>
            </div>
            
        )
    }
}
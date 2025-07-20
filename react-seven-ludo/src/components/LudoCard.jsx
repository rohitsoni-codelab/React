import { useState } from "react"

export default function LudoCard() {

    const[moves,setMoves]=useState({red:0,blue:0,yellow:0,green:0})

    function updateRed(){
        setMoves((prevMoves)=>
        {
            return {...prevMoves,red:prevMoves.red+1}
        })
    }

    function updateBlue(){
        // setMoves({...moves,blue:moves.blue+1})
        setMoves((prevMoves)=>{
            return {...prevMoves,blue:prevMoves.blue+1};
        })
    }
    function updateYellow(){
        // setMoves({...moves,blue:moves.blue+1})
        setMoves((prevMoves)=>{
            return {...prevMoves,yellow:prevMoves.yellow+1};
        })
    }
    function updateGreen(){
        // setMoves({...moves,blue:moves.blue+1})
        setMoves((prevMoves)=>{
            return {...prevMoves,green:prevMoves.green+1};
        })
    }

    // function 
    return (
        <div>
            <p>Begin the game!</p>
            <div className="board">
                <p>Red Count= {moves.red}</p>
                <button style={{backgroundColor:"red"}} onClick={updateRed}>+1</button>

                <p>Blue Count= {moves.blue}</p>
                <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>

                <p>Yellow Count={moves.yellow}</p>
                <button style={{backgroundColor:"yellow", color:"black"}} onClick={updateYellow}>+1</button>

                <p>Green Count= {moves.green}</p>
                <button style={{backgroundColor:"green"}} onClick={updateGreen}>+1</button>

            </div>
        </div>
    )
}
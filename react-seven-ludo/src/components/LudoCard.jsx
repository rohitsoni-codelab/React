export default function LudoCard() {
    return (
        <div>
            <p>Begin the game!</p>
            <div className="board">
                <p>Red Count= 0</p>
                <button style={{backgroundColor:red}}>+1</button>
                <p>Blue Count= 0</p>
                <button>+1</button>
                <p>Yellow Count= 0</p>
                <button>+1</button>
                <p>Green Count= 0</p>
                <button>+1</button>

            </div>
        </div>
    )
}
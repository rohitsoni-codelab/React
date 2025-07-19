import { useState } from "react"

export default function Like() {
    const [isLiked, setIsLiked] = useState(false)
    function toggleLike() {
        setIsLiked(!isLiked)
    }

    let likeStyle={color:"red"}
    return (
        <div onClick={toggleLike}>
            {/* {isLiked.toString()} */}
            {isLiked ? 
            <i class="fa-solid fa-heart" style={likeStyle}></i> :
            <i class="fa-regular fa-heart"></i>}

        </div>
    )
}
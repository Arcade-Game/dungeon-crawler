import React, {useState} from "react";

const Story = () => {
   const [gameOver, setGameOver] = useState(false);

   return (
      <div>
         {!gameOver ? (
            <>
            Story Opening
            </>
         ) : (
            <>
            GAME OVER
            </>
         )}
      </div>
   )
}

export default Story;
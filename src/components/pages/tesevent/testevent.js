import React, { useRef } from "react";

function RefTutorial() {
    const inputRef = useRef({
        ad: '',
        af: ''
    });

    const onClick = (e) => {
        console.log(inputRef.current.value);
        // setRef
    };
    return (
        <div>
            <h1>Pedro</h1>
            <input type="text" name="james" placeholder="Ex..." ref={inputRef.ad} />
            <input type="text" name="james" placeholder="Ex..." ref={inputRef.af} />
            <button onClick={onClick}>Change Name</button>
        </div>
    );
}

export default RefTutorial;

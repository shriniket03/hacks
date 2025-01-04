import Typewriter from "typewriter-effect";
import React from 'react';

interface props {
  msg: string
}


const Heading: React.FC<props> = ({msg} : props)  => {
    return (
        <Typewriter
        onInit={(typewriter) => {
          typewriter
            .changeDelay(80)
            .pauseFor(1500)
            .typeString(`<h1>${msg}</h1>`)
            .start();
        }}
      />
    )
}

export default Heading
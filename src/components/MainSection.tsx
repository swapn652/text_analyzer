/*
  this is the main section of the project that has a switch menu to enter into 2 diff parts of the project, i.e.,
  WordInput and Paragraph
*/
import { useState } from "react";
import { SwitchMenu } from "./SwitchMenu"
import { Paragraph } from "./Paragraph/Paragraph";
import { WordInput } from "./WordInput/WordInput";

export const MainSection = () => {
    const [option, setOption] = useState<number>(1);

  return (
    <div>
        <SwitchMenu option = {option} setOption = {setOption}/>
        { option === 1 &&
            <WordInput/>
        }
        { option === 2 &&
            <Paragraph/>
        }
    </div>
  )
}

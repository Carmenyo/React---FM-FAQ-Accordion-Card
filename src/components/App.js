import { useState } from "react";
import mobile from "../images/illustration-woman-online-mobile.svg";
import desktop from "../images/illustration-woman-online-desktop.svg";
import SingleQuestion from "./SingleQuestion";
import {questions} from "./questions";
import "../styles/index.css"


function App() {
const [quests] = useState(questions)
  return (
  <div className='container'>
   <article className="container__pictures">
<picture>
  <source media="(min-width: 768px)" srcSet={desktop} />
 <img src={mobile} alt="image mobile" />
</picture>
   </article>

   <article>
    <h1 className="title">FAQ</h1>
  {questions.map((quest, index)=>(
    <SingleQuestion 
    key={index}
    {...quest} 
   />
  )
  )}
   </article>
  </div>
  );
}

export default App;

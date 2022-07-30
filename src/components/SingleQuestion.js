import { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

export default function SingleQuestion({ question, answer }) {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <>
      <div className='article__question'>
        <article onClick={() => setIsShowing(!isShowing)}>
          <h2 className={`${isShowing && "clicked"}`}>{question}</h2>
          {isShowing ? <FaChevronUp className="icon-arrow"/> : <FaChevronDown className="icon-arrow" />}
        </article>
        {isShowing && <p>{answer}</p>}
      </div>
    </>
  );
}

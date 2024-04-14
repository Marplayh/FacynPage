import React from "react";
import './styleFaq.scss';
import { useState } from "react";

export default function Faq(){
    const [selected, setSelected] = useState(null);
    const toggle = (i) => {
          if(selected === i){
            return setSelected(null)
          }

          setSelected(i)
    }
   return (
    <div className="wrapper" id="faq">
        <h2 className="title-faq">FAQ - Perguntas Frequentes</h2>
       <div className="accordion">

        {data.map((item, i) => 
        (
            <div className="item">
            <div className="title" onClick={()=> toggle(i)}>
                <h2>{item.question}</h2>
                <span>{selected === i ? '-' : '+' }</span>
            </div>
            <div className={selected === i ? 'content show' : 'content'}>
                {item.answer}
            </div>
        </div>
        ) 
        )}

        </div>
    </div>
   )
}

const data = [
    {
        question: 'Pergunta 1',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor placerat diam, ac imperdiet tortor ultrices in. Suspendisse dui orci, iaculis vel neque vitae, imperdiet ultricies massa. Integer hendrerit vulputate sagittis. Pellentesque lobortis neque diam, et ullamcorper lorem sagittis id. In vel sapien ut ante porta convallis eget nec nulla. '
    },
    {
        question: 'Pergunta 2',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor placerat diam, ac imperdiet tortor ultrices in. Suspendisse dui orci, iaculis vel neque vitae, imperdiet ultricies massa. Integer hendrerit vulputate sagittis. Pellentesque lobortis neque diam, et ullamcorper lorem sagittis id. In vel sapien ut ante porta convallis eget nec nulla. '
    },
    {
        question: 'Pergunta 3',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor placerat diam, ac imperdiet tortor ultrices in. Suspendisse dui orci, iaculis vel neque vitae, imperdiet ultricies massa. Integer hendrerit vulputate sagittis. Pellentesque lobortis neque diam, et ullamcorper lorem sagittis id. In vel sapien ut ante porta convallis eget nec nulla. '
    },
    {
        question: 'Pergunta 4',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor placerat diam, ac imperdiet tortor ultrices in. Suspendisse dui orci, iaculis vel neque vitae, imperdiet ultricies massa. Integer hendrerit vulputate sagittis. Pellentesque lobortis neque diam, et ullamcorper lorem sagittis id. In vel sapien ut ante porta convallis eget nec nulla. '
    }
]
import React, {useState} from "react"
import './Accordion.css';
function Accordion() {
    const [selected, setSelected] = useState(null)
 const toggle = (e)=>{
     if(selected=== e){
         return setSelected(null)
     }
     setSelected(e)
 }

   
    return (
        <div>
            <article className='accodion'>
               
                <div className='acco'>
                     <h1>Some more features that <br />
                    seal the deal and convert <br />
                     the customer</h1>
                   {data.map((NASTA, e)=>(
                       <div className='NASTA'>
                           <div className='title' onClick={()=> toggle(e)}>
                               <span>{selected ===e ? '-' : '+'}</span>
                               <h2>{NASTA.question}</h2>
                           </div>
                           <div className=
                           {selected === e ? 'contentshow': 'content'}>
                               {NASTA.answer}
                           </div>
                       </div>

                   ))}

                </div>
                <div className='dion'>
                    <img src="https://preview.colorlib.com/theme/thestartup/assets/img/gallery/xabout2.jpg.pagespeed.ic.M38VMlRxNJ.webp" alt="" />
                
                </div>
            </article>
            {/* <div className='cont'>
             <button className='buut'>  hello wolrd</button>
            </div> */}
        </div>
    )
}
const data=[
    {
        question:'Start the automated process',
        answer:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id perferendis molestias explicabo sequi impedit a dignissimos tempora vero distinctio laboriosam!'
    },
     {
        question:'The automated process satrts',
        answer:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id perferendis molestias explicabo sequi impedit a dignissimos tempora vero distinctio laboriosam!'
    },
     {
        question:'Automated process starts',
        answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id perferendis molestias explicabo sequi impedit a dignissimos tempora vero distinctio laboriosam!'
    },
        {
        question:'Process the automated magic',
        answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id perferendis molestias explicabo sequi impedit a dignissimos tempora vero distinctio laboriosam!'
    }
]

export default Accordion

import React from 'react'
import './Acco.css';

function Acco() {

  const handleaccordion=() => {
    let sec = document.querySelectorAll('.sect')

    sec.forEach(x=>{
      x.classList.toggle('minus')

    })

  }

  return (
    <div className='acco'>
      <section onClick={handleaccordion} className='sect'> 
        <p class="label">what is html</p>
        <p class="html">what is html</p>
      </section>
      <section onClick={handleaccordion} className='sect'>
        <p class="label">what is html</p>
        <p class="html">what is html</p>
      </section>
      <section onClick={handleaccordion} className='sect'>
        <p class="label">what is html</p>
        <p class="html">what is html</p>
      </section>
      <section onClick={handleaccordion} className='sect'>
        <p class="label">what is html</p>
        <p class="html">what is html</p>
      </section>

    </div>
  )
}

export default Acco

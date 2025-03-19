import React from 'react'
import "./Why.scss"
import Why1 from "../../assets/why-1.png"
import Why2 from "../../assets/why-2.png"
import Why3 from "../../assets/why-3.png"
import Why4 from "../../assets/why-4.png"
import Header from '../Header/Header'
import Footer from '../Footer/Footer'


const Why = () => {
  return (
    <div className='why'>
      <Header />
      <div className="divwhy">
        <span className='main-why'>Why?</span>
      </div>
      <div className='main-text'>
        <div className='text1'>
          <span>Everything we do starts with this question.</span><br /><br />
          <span>Why should stressbreak exist? Why should anyone care to use it? Why is privacy so important to us?</span><br /><br />
          <span>Eventually, the “why” led us here.</span>
        </div>
      </div>
      <div className='why-text2'>
        <div className="why21">
          <img src={Why1} alt="" />
          <span className='why2head'>Because why not do something different?</span><br />
          <span className='why2text'>We’ve always approached product design this way.<br /> <br />
            We look at our current tools and ask ourselves why it’s done the way it is. Why do bookmarking tools have social features? Why do we use folders? Dropdowns? Are these outdated UI patterns still useful or are they just clutter? What if we do it better? Or just different?<br /><br />
            With mymind we ultimately asked ourselves, why not? Why not find a different way to save what we care about? Why not remove all the other stuff that just gets in the way? Forget how it’s usually done. Why not make it better?</span>
        </div>
        <div className="why22 why21">
          <img src={Why2} alt="" />
          <span className='why2head'>Because we need a healthier relationship with our minds.</span><br />
          <span className='why2text'>There was a time when reflection was simple—we wrote down our thoughts, gained clarity, and moved forward. It was a natural process, free from distractions.<br /> <br />
            Fast forward to today, and even self-care has become complicated. Mood tracking apps demand constant input. Notifications pull us away. Algorithms decide what we should focus on. Instead of helping us understand ourselves, our tools overwhelm us.<br /><br />
            But what if technology could work differently? What if it truly supported us—helping us reflect, grow, and heal without the noise? A space designed not to demand our attention, but to give us peace of mind.<br /><br />
            We decided it could. So we built StressBreak.
          </span>
        </div>
        <div className="why23 why21">
          <img src={Why3} alt="" />
          <span className='why2head'>Because new beginnings bring clarity.</span><br />
          <span className='why2text'>StressBreak isn’t just another journaling tool—it’s a fresh start for your mind. We believe in the power of starting from scratch, not just because it’s freeing, but because it helps you be more mindful of your thoughts and emotions.<br /> <br />
            Mental clutter weighs us down, just like digital overload. Instead of drowning in endless data, StressBreak offers a space where you can intentionally reflect, track your feelings, and focus on what truly matters. A clean slate for your well-being. A deep breath for your mind.</span>
        </div>
        <div className="why24 why21">
          <img src={Why4} alt="" />
          <span className='why2head'>Because self-care should be effortless, not a chore.</span><br />
          <span className='why2text'>We built StressBreak for thinkers, feelers, and doers—people navigating life who simply need a space to reflect and understand themselves, without extra effort.<br /><br />
            StressBreak doesn’t demand your time, doesn’t overwhelm you with tasks, and doesn’t ask to be maintained. It quietly works in the background, organizing your thoughts, tracking your emotions, and offering insights—so you can focus on living, not managing another app.<br /><br />
            Because that’s all it is: A tool to support your well-being, not something that adds to your mental load. Those who enjoy micromanaging their emotions with endless labels and rigid structures have plenty of other options. StressBreak is for those who would rather express, reflect, heal, grow—and simply be.</span>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Why
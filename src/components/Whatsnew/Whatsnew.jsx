import React from 'react'
import "./Whatsnew.scss"
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Doc from "../../assets/doc-support.png"
import Cover from "../../assets/screenshots_cover.png"
import Landscape from "../../assets/On-landscapes-believing-programming-your-mind.png"
import Github from "../../assets/GitHub-support.jpg"
import Assignments from "../../assets/weekly-insights.jpg"
import Books from "../../assets/books.png"
import Ai from "../../assets/AI.jpg"
import Clear from "../../assets/clearyourmind_cover.png"
import Video from "../../assets/videosupport_cover.png"
import Gift from "../../assets/gift.png"
import Tornado from "../../assets/Tornado-in-your-brain_.png"
import Quote from "../../assets/Thats-a-good-quote-1.png"
import Avatar1 from "../../assets/avatar11.png"
import Avatar2 from "../../assets/avatar12.png"
import Avatar3 from "../../assets/avatar13.png"

const Whatsnew = () => {
  // Data for the idea boxes
  const ideasData = [
    {
      imgSrc: Github,
      heading: "THOUGHTS",
      text: "Go through our GitHub repository"
    },
    {
      imgSrc: Books,
      heading: "INSIGHTS",
      text: "Our favorite reads for mental wellbeing"
    },
    {
      imgSrc: Ai,
      heading: "NEW FEATURES",
      text: "NEW FEATURE: The Advanced AI Summary"
    },
    {
      imgSrc: Clear,
      heading: "NEW FEATURES",
      text: "Your 2 minute escape"
    },
    ,
    {
      imgSrc: Quote,
      heading: "THOUGHTS",
      text: "That’s a good quote"
    },
    {
      imgSrc: Assignments,
      heading: "INSIGHTS",
      text: "Fresh perspectives to inspire your week"
    },
    {
      imgSrc: Video,
      heading: "INSIGHTS",
      text: "NEW FEATURE: Video support"
    },
    {
      imgSrc: Gift,
      heading: "THOUGHTS",
      text: "A little gift for our stressed minds"
    },
    {
      imgSrc: Tornado,
      heading: "THOUGHTS",
      text: "Tornado in your brain?"
    }

  ];

  const peopleData = [
    {
      imgSrc: Avatar2,
      text: "Rion Dsilva"
    },
    {
      imgSrc: Avatar1,
      text: "T Puneeth Reddy"
    },
    {
      imgSrc: Avatar3,
      text: "G Aniesh Reddy"
    }
  ];

  return (
    <div className='Whatsnew'>
      <Header />
      <div className="mainNew">
        <div className="firstflex">
          <div className="first1">
            <div className="first1text">
              <p className='well-palace'>Read what's<br /> on our mind.</p>
              <p className='space'>THE WELLNESS SPACE</p>
            </div>
            <div className='first1div'>
              <img src={Cover} alt="" />
              <p className='support'>A private space for your thoughts.</p>
            </div>
            <div className='first1div2'>
              <p className='head'>POPULAR ARTICLES</p>
              <span>✺ Journaling reimagined – a message from our founders</span><hr style={{ borderTop: '2px solid rgb(240, 240, 240)' }} />
              <span>✺ The power of mindful reflection</span><hr style={{ borderTop: '2px solid rgb(240, 240, 240)' }} />
              <span>✺ Trace your emotional journey</span>
            </div>
          </div>
          <div className="first2">
            <div className="first2div">
              <img src={Doc} alt="" />
              <p className='docSupport'>New: Doctor Support</p>
            </div>
            <div className="first2div2">
              <img src={Landscape} alt="" />
              <p className='docSupport'>On reflection, growth & nurturing your mind.</p>
            </div>
          </div>
        </div>
        <hr style={{ borderTop: '2px solid rgb(220, 220, 220)', width: "90vw", marginLeft: "5vw" }} />
      </div>
      <div className='ideas'>
        <div className="ideas-text">
          <p className='ideas-p'>Beautiful ideas, visuals &<br />
            insights to feed your mind</p>
        </div>
        <div className="ideas-boxes">
          {ideasData.map((item, index) => (
            <div className="idea-box" key={index}>
              <img src={item.imgSrc} alt="" />
              <span className='idea-head'>{item.heading}</span>
              <span className='idea-text'>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
      <div className='what-last'>
        <div className='people-span'>People behind <span>stressbreak</span></div>
        <div className="people-boxes">
          {peopleData.map((item, index) => (
            <div className="people-box" key={index}>
              <img src={item.imgSrc} alt="" />
              <span className='people-text'>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
        <Footer />
    </div>
  )
}

export default Whatsnew
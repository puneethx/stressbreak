import React, { useRef, useEffect } from 'react';
import "./What.scss"
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Arrow from "../../assets/Arrow-button-white.svg"
import Note from "../../assets/features-frictionless-notetaking-1.png"
import Book from "../../assets/features-smart-bookmarking.png"
import Read from "../../assets/features-read-without-distractions.png"
import Collections from "../../assets/features-instant-collections.png"
import Peace from "../../assets/Take-your-mind-with-you.png"
import End from "../../assets/end.png"

import Vsrc from "../../assets/full-what.mp4"

import Rev1 from "../../assets/review_1.png"
import Rev2 from "../../assets/review_2.png"
import Rev3 from "../../assets/review_3.png"
import Rev4 from "../../assets/review_4.png"
import Rev5 from "../../assets/review_5.png"

import F1 from "../../assets/NEW_-Bluesky-support.png"
import F2 from "../../assets/screenshots_cover.png"
import F3 from "../../assets/On-landscapes-believing-programming-your-mind.png"

const What = () => {
  const contentTypes = [
    { text: 'thoughts', color: '#ff9966', borderColor: '#ff7f50' },
    { text: 'moods', color: '#f1c40f', borderColor: '#f1c40f' },
    { text: 'progress', color: '#99ccff', borderColor: '#87cefa' }
  ];

  const videoRef = useRef(null);

  useEffect(() => {
    // Ensure video plays after component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video play failed:", error);
      });
    }
  }, []);

  return (
    <div className='what'>
      <Header />
      <div className='what-main'>
        <div className="video-div">
          <video
            className='video-main'
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            src={Vsrc}
          />
        </div>
        <div className='what-text'>
          <div className='text-main'>
            <span className='main1'>
              Track Your Feelings,
            </span>
            <span className='main2'>
              Transform Your Mind.
            </span>
          </div>
          <div className='text-sub'>
            <span>All your{' '} <span
              className="pill-text"
              style={{
                color: contentTypes[0].color,
                borderColor: contentTypes[0].borderColor
              }}
            >
              {contentTypes[0].text}
            </span>
              {' '}
              <span
                className="pill-text"
                style={{
                  color: contentTypes[1].color,
                  borderColor: contentTypes[1].borderColor
                }}
              >
                {contentTypes[1].text}
              </span> {' '}
              and {' '}
              <span
                className="pill-text"
                style={{
                  color: contentTypes[2].color,
                  borderColor: contentTypes[2].borderColor
                }}
              >
                {contentTypes[2].text}
              </span> </span>
            <span>tracked and visualized in one private space.</span>
          </div>
        </div>
        <section className='man-sec'>
          <div className='manifesto'>
            <div className="man-div1">
              <div className='man-head'>our manifesto</div>
              <div className='man-text'>
                <span>In a world where our emotions are analyzed, our habits are tracked, and our well-being is monetized, true privacy feels like a luxury.</span><br /><br />
                <span>Our thoughts are no longer our own shaped by algorithms, influenced by trends, and scattered across apps that profit from our struggles.</span> <br /><br />
                <span>Mental health should never be a data point.
                  What should have always been personal is now yours again. <span className='man-bold'>We promise:</span></span><br /><br />
              </div>
            </div>
            <div className='man-no'>
              <div>
                <span><span className='man-org'>No{' '}</span>distractions</span><br />
                <span><span className='man-org'>No{' '}</span>invasive tracking</span><br />
                <span><span className='man-org'>No{' '}</span>social pressure</span><br />
                <span><span className='man-org'>No{' '}</span>vanity metrics</span><br />
                <span><span className='man-org'>No{' '}</span>ads</span><br />
              </div>
            </div>
            <div className='man-just'>
              <span>Just you, your thoughts, and a space that truly listens.</span>
            </div>
            <div className='man-try'>
              <button>
                Try it out
                <img src={Arrow} alt='arrow' />
              </button>
            </div>
          </div>
          <section className='extension'>
            <div className='ext-text'>
              <span className='ext-head'>The first and only extension <br />for your real mind.</span><br />
              <span className='ext-sub'>StressBreak lets you freely express your thoughts without overthinking.<br/> It organizes your mind, tracks emotions, and provides meaningful <br/> insights all in one thoughtfully designed space.</span>
            </div>
          </section>
        </section>
        <section className='works-sec'>
          <div>
            <p className='works'>It just works</p><br />
            <p className='works-head'>Just write it. Artificial Intelligence <br/> takes care of the rest.</p><br />
            <p className='works-sub'>Log your thoughts effortlessly and stay in the moment.<br/>
              StressBreak understands your emotions and tracks <br/> the important patterns, so you don’t have to.
            </p>
          </div>
        </section>
        <section className='time-sec'>
          <div className='time'>
            <div className='time-text'>No wasted time or energy</div>
            <span className='time-head'>No more guesswork. This is your <br />personal well-being assistant.</span><br />
            <div className='time-texten'>Search by emotion, activity, time, or any detail that matters to you.
              AI-powered insights and visual trends help you understand yourself better instantly.</div>
          </div>
          <div className='pri-div'>
            <span className='pri-text'>A Journal that listens</span><br />
            <span className='pri-head'>A safe space for your thoughts,<br /> emotions, and growth.</span>
            <div className='pri-flex'>
              <div className="pri-row1">
                <div className='priv1'>
                  <div className='priv1-1'>
                    <img src={Note} alt="" />
                  </div>
                  <div className='priv1-2'>
                    <span className='priv1-head'>Effortless Journaling</span>
                    <span className='priv1-text'>Your thoughts deserve to be heard. Quickly jot down your feelings anytime, anywhere, and revisit them in Reflection Mode to dive deeper. Simple, seamless, and meaningful.</span>
                  </div>
                </div>
                <div className='priv2'>
                  <div className='priv2-1'>
                    <img src={Book} alt="" />
                  </div>
                  <div className='priv2-2'>
                    <span className='priv2-head'>Intelligent Mood Tracking</span>
                    <span className='priv2-text'>No entry is just a note. StressBreak understands whether it's a thought, a feeling, a milestone, or a reflection. Every journal entry is saved and visualized in a way that helps you make sense of your emotions.</span>
                  </div>
                </div>
              </div>
              <div className="pri-row2">
                <div className='priv1'>
                  <div className='priv1-1'>
                    <img src={Read} alt="" />
                  </div>
                  <div className='priv1-2'>
                    <span className='priv1-head'>Reflect Without Distractions</span>
                    <span className='priv1-text'>Write freely and revisit your thoughts without noise. StressBreak clears the clutter, helping you focus on your emotions and personal growth.</span>
                  </div>
                </div>
                <div className='priv2'>
                  <div className='priv2-1'>
                    <img src={Collections} alt="" />
                  </div>
                  <div className='priv2-2'>
                    <span className='priv2-head'>Effortless Mood Organization</span>
                    <span className='priv2-text'>Your emotions, automatically sorted. StressBreak intelligently categorizes your journal entries, helping you track patterns and gain deeper insights—without any extra effort.</span>
                  </div>
                </div>
              </div>
              <div className='pri-row3'>
                <div className='pri3'>
                  <div className='pri3-1'>
                    <span className='pri3-head'>Take Peace of Mind with You</span>
                    <span className='pri3-text'>All your journal entries, mood insights, and personal reflections in one private space. Always with you, seamlessly synced across devices.</span>
                  </div>
                  <div className='pri3-2'>
                    <img src={Peace} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='review-sec'>
          <div className='review'>
            <div className='review-text'>
              <span className='review-head'><span>Trusted by thinkers</span><br />& doers everywhere.</span>
            </div>
            <div className='review-imgs'>
              <div className="revimg1 revimg"><img src={Rev1} alt="" /></div>
              <div className="revimg2 revimg"><img src={Rev2} alt="" /></div>
              <div className="revimg3 revimg"><img src={Rev3} alt="" /></div>
              <div className="revimg4 revimg"><img src={Rev4} alt="" /></div>
              <div className="revimg5 revimg"><img src={Rev5} alt="" /></div>
            </div>
          </div>
          <div className='end'>
            <img className='end-img' src={End} alt="" />
            <span className='end-text'>We’re redefining the way you reflect and grow with StressBreak, a refreshing approach to understanding your emotions and well-being. <br /><br />
              Your privacy comes first.<br /><br />
              We believe in a beautifully simple design that respects how you naturally express yourself, helping you track moods effortlessly.<br /><br />
              Spend less time managing your emotions and more time embracing what truly makes you happy.</span>
            <button className='end-btn'>Sign up for free <img src={Arrow} alt='arrow' /></button>
          </div>
        </section>
        <section className='features'>
          <div className='f1 feat'>
            <img src={F1} alt="" />
            <span className='fhead'>New Features</span>
            <span className='ftext'>NEW: Doc support</span>
          </div>
          <div className='f2 feat'>
            <img src={F2} alt="" />
            <span className='fhead'>Thoughts</span>
            <span className='ftext'>One private place for your important journals</span>
          </div>
          <div className='f3 feat'>
            <img src={F3} alt="" />
            <span className='fhead'>Thoughts</span>
            <span className='ftext'>On landscapes, believing & programming your mind</span>
          </div>
        </section>
      </div>
      <section><Footer /></section>
    </div>
  )
}

export default What
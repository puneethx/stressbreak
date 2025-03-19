import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Howimg from "../../assets/how_main_11.png"
import Recimg from "../../assets/rec_imgs.png"
import Everything from "../../assets/everything.png"
import "./How.scss"

import recbook from "../../assets/recbook.png";
import recbook2 from "../../assets/recbook2.png";
import recexer from "../../assets/recexer.png";
import recexer2 from "../../assets/recexer2.png";
import recfood from "../../assets/recfood.png";
import recmusic from "../../assets/recmusic.png";

import box1 from "../../assets/box1.png"
import box2 from "../../assets/box2.png"
import box3 from "../../assets/box3.png"


const How = () => {

    const recommendations = {
        Quotes: [
            { id: 1, quote: "The key is not to prioritize what's on your schedule, but to schedule your priorities." , by: "Stephen Covey"}
        ],
        Books: [
            { id: 1, name: "Ikigai", image: recbook },
            { id: 2, name: "Enchantment", image: recbook2 },
        ],
        Exercises: [
            { id: 3, name: "Yoga", image: recexer },
            { id: 4, name: "Meditation", image: recexer2 },
        ],
        Food: [
            { id: 5, name: "Fruits", image: recfood },
        ],
        Music: [
            { id: 6, name: "Piano", image: recmusic },
        ],
    };


    const journalData = [
        { id: 1, title: "Morning Reflections", journal: "Today started with a peaceful sunrise and a cup of coffee." },
        { id: 2, title: "Coding Adventures", journal: "Explored React hooks and built a new project from scratch." },
        { id: 3, title: "Workout Progress", journal: "Managed to run 5km today, feeling stronger!" },
        { id: 4, title: "Book Review", journal: "Finished reading 'Atomic Habits' – really insightful!" },
        { id: 5, title: "Weekend Plans", journal: "Looking forward to a hiking trip with friends." },
        { id: 6, title: "Movie Night", journal: "Watched 'Inception' again, mind-blowing as always." },
        { id: 7, title: "Work Updates", journal: "Completed the dashboard UI and pushed it to GitHub." },
        { id: 8, title: "Music Discovery", journal: "Discovered a new jazz playlist that I really love." },
        { id: 9, title: "Tech Trends", journal: "AI developments are happening rapidly, exciting times!" },
        { id: 10, title: "Family Time", journal: "Had a great dinner with family, lots of laughter." }
    ];

    return (
        <div className='How'>
            <Header />
            <div className="mainhow">
                <div className="howimg">
                    <img src={Howimg} alt="" />
                </div>
                <div className='howtext'>
                    <div className="howtext1">
                        <span>There’s a lot of magic and some<br />
                            intelligence behind it, but let’s <br />
                            keep it simple for now...
                        </span>
                    </div>
                    <div className="howtext2">
                        <span>Whenever you want to reflect <br />
                            or track your emotions, just <br />
                            jot it down in <span className='org'>StressBreak.</span>
                        </span>
                    </div>
                </div>
                <div className='recimgs'>
                    <img src={Recimg} alt="" />
                </div>
                <div className='finalhow'>
                    <img src={Everything} alt="" />
                    <div className="everything">
                        <div className='ever-text'>
                            <span>Made for those seeking balance,<br />
                                clarity, and support.</span>
                        </div>
                        <div className="journal">
                            <p className='jou-tit'>Journal</p>
                            <div className='jou-text'>
                                <p className='jou-main'>New Entry</p>
                                <input className='jou-title' placeholder='Title' name='title' type='text' required ></input>
                                <div className='jou-line'>
                                    <div className="jou-pine"></div>
                                </div>
                                <div className="jou-area">
                                    <textarea className='jou-here' placeholder='Write your journal here...' required />
                                </div>
                                <div className="jou-btn-div">
                                    <button className='jou-button' type='submit'>Reflect</button>
                                </div>
                            </div>
                        </div>
                        <div className="prev-journal">
                            <p className='prev-jou-tit'>Previous Journals</p>
                            <div className='prev-jou-text'>
                                <p className='prev-jou-main'>Go Back In Time</p>
                                <div className='prev-jou-line'>
                                    <div className="prev-jou-pine"></div>
                                </div>
                                <div className="journal-container">
                                    <div className="prev-con">
                                        {journalData.map((entry) => (
                                            <div key={entry.id} className="journal-entry">
                                                <h2 className='entry-title'>{entry.title}</h2>
                                                <p>{entry.journal}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="recom">
                            <p className='rec-tit'>Recommendations</p>
                            <div className='rec-text'>
                                <p className='rec-main'>What You Need Today</p>
                                <div className='rec-line'>
                                    <div className="rec-pine"></div>
                                </div>
                                <div className="recand">
                                    <div className="recdook">
                                        <div className='recs'>
                                            {Object.entries(recommendations).map(([category, items]) => (
                                                <div key={category} className="rec">
                                                    <p className="reccat">{category}:</p>
                                                    <div className="recdiv">
                                                        {items.map((item) => (
                                                            <div key={item.id} className="receach">
                                                                {item.image && (
                                                                    <img src={item.image} alt={item.name} className="recimg" />
                                                                )}
                                                                {item.quote && (
                                                                    <p className="recquote">"{item.quote}"</p>
                                                                )}
                                                                <p className="rectitle">{item.name}</p>
                                                                {item.by && (
                                                                    <span className='recp'>-{" "}{item.by}</span>
                                                                )}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="weeks">
                            <p className='week-tit'>Progress</p>
                            <div className='week-text'>
                                <p className='week-main'>Weekly Insights</p>
                                <div className='week-line'>
                                    <div className="week-pine"></div>
                                </div>
                                <div className="week-area">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="soft">
                    <p className='soft-title'>We believe software<br />should stay out of the<br /> way and let you focus<br /> on what matters–<br /> which isn’t software.</p>
                    <p className='soft-text'>Our 3 design principles</p>
                    <div className='softdiv'>
                        <div className='softbox'>
                            <img className='boximg' src={box1} alt="" />
                            <span className='boxtitle'>Beauty is<br /> a function.</span><br />
                            <span className='boxtext'>When self-care is simple and beautiful, it becomes truly effective. A calming design naturally soothes the mind.<br /><br />
                                Our emotions are a beautiful mess—complex and ever-changing. Instead of controlling them, StressBreak helps you embrace and understand them.</span>
                        </div>
                        <div className='softbox'>
                            <img className='boximg' src={box2} alt="" />
                            <span className='boxtitle'>Make it<br />invisible.</span><br />
                            <span className='boxtext'>The less you think about StressBreak, the better. We believe in a seamless, clutter-free experience—no overwhelming menus, filters, or complex UI. <br /><br />
                                Your mind deserves a space of calm and clarity—a place to reflect, recharge, and find inspiration without distraction.</span>
                        </div>
                        <div className='softbox'>
                            <img className='boximg' src={box3} alt="" />
                            <span className='boxtitle'>Less features,<br />more magic.</span><br />
                            <span className='boxtext'>We’re not focused on endless features—StressBreak just works. You don’t need to worry about how—it quietly does the work for you.<br /><br />
                                Focus on feeling better, not managing another app, so you can spend more time on what truly matters.</span>
                        </div>
                    </div>
                    <Footer backgroundImage='how' />
                </div>
            </div>
        </div>

    )
}

export default How
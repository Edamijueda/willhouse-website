import React, { useEffect } from 'react'
import './About.css';
import headshot from '../../images/william-headshot.jpg';
import skydiving from '../../images/img-11.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

function About() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className='about'>
      <h2>About Me</h2>
      <div data-aos="fade-down">
        <img src={headshot} className="headshot" alt="Katie Headshot" />
      </div>
      <div data-aos="fade-up">
        <p>I am a Father of 4 and a Grandfather of 6. A Published Author, Playwright, Actor & Public Speaker. Born & Raised in Detroit Michigan. Once a self proclaimed Fanatical Christian & Jesus Freak. Destined for full time Ministry until I realized that many of the things I preached, believed and even taught to my own children about God & the Bible were misunderstood and filtered thru religious opinions, prejudices and pulpit led assumptions.!<br /><br />
          Now I write to expose biblical myths & uncover truths with Wisdom, Love & Compassion. More books are on the way, exposing scriptural myths on Tithing, the Rapture, End Times, Unpardonable Sin, etc.. I will even write about Domestic Violence & Relationships. Stay tuned. Looking forward to reading your reviews.  To contact the Author For Speaking Engagements, Interviews, questions or to be added to our mailing list for upcoming events & to be notified for future books from the Author email us at:  willhousepublishing@gmail.com !<br /><br />
          I had always been fascinated with why people think and act the way they do (an observer), so this depression propelled me further into my self-development studies. I spent the next decade reading every self-help book I could find, learning tools like tapping, affirmations, and meditation. I finally found my way out of the depression to a life I could have only dreamed of!<br /><br />
          Along the way I learned about the Life Coaching field, and I fell in love with the idea of being able to help people find answers that are authentic to them. Have you ever had someone else tell you what to do and it's not effective because it wasn't right for you? I believe coming up with one's own solution, having that 'Ah-Hah' moment, is the key to success!<br /><br />
          I researched (and was certified in) more than one Life Coaching program, including the highest-level coaching certification in the world, so I could better serve those who need a little support along the way!
          </p>
      </div>
      <div className="backgroundImage" style={{
        backgroundImage: `url(${skydiving})`,
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        paddingBottom: '35%'
      }}>
        <figure class="quote">
          <q>
            The biggest adventure you can take <br />
            is to live the life of your dreams.
        </q>
          <figcaption>
            <cite> Oprah Winfrey</cite>
          </figcaption>
        </figure>
      </div>
    </div >
  )
}

export default About

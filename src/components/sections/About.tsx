import { useState } from "react"

const About = () => {

  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const text = `
  I believe programming and Software Engineering is one of the most creative activities for humans. Despite contrasting the conventional creative art forms of painting, writing, music, programming is at least as creative. The only difference is the medium of expression, programming is through numbers and logic as opposed to paint brushes and notes.

My journey is unconventional. At 18, I forwent university to join the Royal Marines. However, I was medically discharged in training due to a knee issue. At 19, I went to work in London, staying until COVID. During lockdown, after reflecting and consulting my family, I decided to return to education and study Computer Science at the University of Exeter.

In 2024, I graduated from Exeter with a 1st Class Honours. For my final year project, I built a customer loyalty app for independent cafes. The idea for this app came when I kept losing my loyalty cards, and felt there must be a better way. This was the first time I had fused original problem solving with technical implementation, and it’s a process I find huge joy in.
  `

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <>
    <section className='content-card' id='about'>
      <h3 className='content-title'>About</h3>
      <p className='content-text'>
      I currently work as a Microsoft 365 consultant at a fast-growing digital transformation consultancy. 
      In my spare time I enjoy developing mobile apps, each of which is built from the 
      ground up, idea to prototype in a React Native, TypeScript, Firebase stack. Check them out <a href="#">here</a>
      </p><br></br>
      <div><button onClick={toggleExpand} className="expand-below-link">More about me { isExpanded ? '↑' : '↓' }</button></div>
      <p style={{ whiteSpace: 'pre-line' }}>{ isExpanded ? text : '' }</p>
    </section>
    </>
  )
}

export default About

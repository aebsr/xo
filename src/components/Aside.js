import React from 'react'

const Nav  = (props) => {
  const openState = props.asideVisible ? 'aside_is-open' : ''
  return (
    <aside className={`aside ${openState}`}>
      <div className="aside__header">Info</div>
      <div className="aside__content">
        <h3>Goal</h3>
        <p>In order to win the game, a player must place three of their marks in a horizontal, vertical, or diagonal row.</p>
        <h4>But Why Though?</h4>
        <p>This was a passion project inspired by a coding challenge. Unsatisfied with the end result, I decided to spice it up a bit and put it online.</p>
        <p>There are a few features I'd love to add to this if only as a learning experiment so check back and maybe I'll build upon it.</p>
      </div>
      <div className="aside__footer">
        <ul>
          <li>
            <a href="https://github.com/aebsr/xo">GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/aebsr">LinkedIn</a>
          </li>
          <li>
            <a href="http://antoinebutler.com">&lt;/&gt; by Antoine</a>
          </li>
        </ul>
      </div>
      <button className="close-aside" onClick={props.close}>
      <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
      </button>
    </aside>
  )
}

export default Nav
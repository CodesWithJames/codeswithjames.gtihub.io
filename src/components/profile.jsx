import React from 'react';

export default function Profile() {
  let [currentPage, setPage] = React.useState('switch')

  if (currentPage === 'switch') currentPage = 'software'

  const sections = {
    community: <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type </p>,
    software: <p>dab</p>,
  }

  return (
    <div className="profile-container">
      <div class="inline">
        <div className="profile">
          <div className="name-holder">
            <p className="introduction"> Hello I am</p>
            <h1 className="name"> Xignotic </h1>
            <hr className="underline"/>
          </div>
          <div className="socials">
            <a rel="noreferrer" href="https://www.linkedin.com/in/franz-herrmann-2512791a3/" target="_blank"><i className="fab fa-linkedin-in"/></a>
            <a rel="noreferrer" href="https://github.com/Xignotic84" target="_blank"><i className="fab fa-github"/></a>
            <a rel="noreferrer" href="https://twitter.com/Xignotic" target="_blank"><i className="fab fa-twitter"/></a>
          </div>
        </div>
      </div>

      <div className="inline small">
        <div className="info">
          <div onClick={() => {
            setPage('software')
          }} className={`switch ${currentPage === 'software' ? 'active' : ''}`}>
            <h2> Software Developer </h2>
            {currentPage === 'software' ? <hr className="underline"/> :''}
          </div>
          <div onClick={() => {
            setPage('community')
          }} className={`switch ${currentPage === 'community' ? 'active' : ''}`}>
            <h2> Community Manager </h2>
            {currentPage === 'community' ? <hr className="underline"/> :''}

          </div>

        </div>
        <div>
          {sections[currentPage]}
        </div>
      </div>
    </div>
  )
}

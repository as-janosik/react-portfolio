import React from 'react';
import adminPortal from '../images/GroupProjectAdminPortal.png';
import noteApp from '../images/NoteApp.png';
import woogle from '../images/WoogleApp.png';
import weather from '../images/WeatherApp.png';
import schedule from '../images/scheduleApp.png';
import Quiz from '../images/quizApp.png';
import filter from '../images/Filters_screen.png';

export default function Portfolio() {
  return (
    <div className="container">
      <h1>Portfolio Page</h1>
      <p>
        Below you will find the projects I have worked on while at the University of Minnesota Full Stack Bootcamp:
      </p>
      <div class="container text-center">
        <div className="row row-cols-2">
          <div className="col-6">

            <br />
            <a href='https://cryptic-mountain-03281.herokuapp.com/'>Admin Portal</a>
            <br />
            <a href='https://github.com/as-janosik/AdoptMe'>Github Repo</a>
            <br />
            <img src={adminPortal} className="img-fluid h-50" alt="Dog" />
          </div>
          <div className="col-6">
            <br />
            <a href='https://secret-tor-23431.herokuapp.com/'>Note Taker App</a>
            <br />
            <a href='https://github.com/as-janosik/Express_js_Challenge'>Github Repo</a>
            <br />
            <img src={noteApp} className="img-fluid h-50" alt="Note App screen" />
          </div>
          <div className="col-6">
            <br />
            <a href='https://mark55kelly.github.io/Final-Fantasy-Chocobros//'>Woogle App</a>
            <br />
            <a href='https://github.com/Mark55Kelly/Final-Fantasy-Chocobros'>Github Repo</a>
            <br />
            <img src={woogle} className="img-fluid h-50" alt="Woogle page" />
          </div>
          <div className="col-6">
            <br />
            <a href='https://as-janosik.github.io/Challenge_6/'>Weather page</a>
            <br />
            <a href='https://github.com/as-janosik/Challenge_6'>Github Repo</a>
            <br />
            <img src={weather} className="img-fluid h-50" alt="weather app" />
          </div>
          <div className="col-6">
            <br />
            <a href='https://as-janosik.github.io/Challenge_5/'>Schedule App</a>
            <br />
            <a href='https://github.com/as-janosik/Challenge_5'>Github Repo</a>
            <br />
            <img src={schedule} className="img-fluid h-50" alt="schedule app" />
          </div>
          <div className="col-6">
            <br />
            <a href='https://as-janosik.github.io/Challenge_4/'>Quiz App</a>
            <br />
            <a href='https://github.com/as-janosik/Challenge_4'>Github Repo</a>
            <br />
            <img src={Quiz} className="img-fluid h-50" alt="Quiz app" />
          </div>
          <div className="col-6">
            <br />
            <a href='https://fotofusionme.herokuapp.com/'>FotoFusion App</a>
            <br />
            <a href='https://github.com/as-janosik/FotoFusion'>Github Repo</a>
            <br />
            <img src={filter} className="img-fluid h-50" alt="Quiz app" />
          </div>
        </div>
      </div>
    </div>
  );
}

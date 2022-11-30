import React from 'react';
import adminPortal from '../images/GroupProjectAdminPortal.png';
import noteApp from '../images/NoteApp.png';
import woogle from '../images/WoogleApp.png';

export default function Home() {
  return (
    <div class="container">
      <h1>Home Page</h1>
      <p>
Below you will find the projects I have worked on while at the University of Minnesota Full Stack Bootcamp:
      </p>
      <div class="container text-center">
  <div class="row row-cols-2">
    <div class="col-6">
      Admin Portal
      <br />
    <a href='https://cryptic-mountain-03281.herokuapp.com/'>Admin Portal</a>
    <br />
    <a href='https://github.com/as-janosik/AdoptMe'>Github Repo</a>
    <br />
      <img src={adminPortal} class="img-fluid h-50" alt="Dog"/>
      </div>
    <div class="col-6">Note Taker App
    <br />
    <a href='https://secret-tor-23431.herokuapp.com/'>Note Taker App</a>
    <br />
    <a href='https://github.com/as-janosik/Express_js_Challenge'>Github Repo</a>
    <br />
      <img src={noteApp} class="img-fluid h-50" alt="Note App screen"/>
    </div>
    <div class="col-6">Project 3
    <br />
    <a href='https://mark55kelly.github.io/Final-Fantasy-Chocobros//'>Note Taker App</a>
    <br />
    <a href='https://github.com/Mark55Kelly/Final-Fantasy-Chocobros'>Github Repo</a>
    <br />
      <img src={woogle} class="img-fluid h-50" alt="Author-Andrew Janosik"/>
    </div>
    <div class="col-6">Project 4</div>
    <div class="col-6">Project 5</div>
    <div class="col-6">Project 6</div>
  </div>
</div>
    </div>
  );
}

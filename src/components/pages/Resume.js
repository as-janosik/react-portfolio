import React from 'react';

export default function Resume() {

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('AndrewJanosikResume.pdf').then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'AndrewJanosikResume.pdf';
        alink.click();
      })
    })
  }


  return (
    <>
      <center>
        <h1>Technologies</h1>
        <dl>
          <dt>Javascript</dt>
          <dt>React</dt>
          <dt>SQL</dt>
          <dt>MongoDB</dt>
          <dt>C#</dt>
          <dt>Java</dt>
          <dt>Workday Integrations</dt>
        </dl>
        <h3>Click the below button to download PDF resume</h3>
        <button onClick={onButtonClick}>
          Download My Resume
        </button>
      </center>
    </>
  );
}

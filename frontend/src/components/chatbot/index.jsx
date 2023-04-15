import React, { useState } from 'react';
import makeRequest from './configuration';

function Chatbot() {
  const [request, setRequest] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = (e) => {
    makeRequest(request).then(setResponse);
  };

  const handleChange = (e) => {
    setRequest(e.target.value);
  };

  return (
    <div>
      <h1>Chatbot</h1>
      <form>
        <label htmlFor="name">
          What question do you have?
          <br />
          <input type="text" id="name" label="name" value={request} onChange={handleChange} />
        </label>
        <button type="button" value="submit" onClick={handleSubmit}> Submit</button>
      </form>

      <div>
        <h2>Response</h2>
        <p>{response}</p>
      </div>
    </div>
  );
}

export default Chatbot;

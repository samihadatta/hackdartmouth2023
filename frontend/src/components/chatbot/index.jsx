import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import makeRequest from './configuration';
import { askChatGPT } from '../../state/actions';

function Chatbot() {
  const [request, setRequest] = useState('');
  const [response, setResponse] = useState('');
  // const dispatch = useDispatch();

  const handleSubmit = (e) => {
    askChatGPT(request).then(setResponse); // will need to dispatch presumably
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

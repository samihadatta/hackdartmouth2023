import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import makeRequest from './configuration';
import { Input, Button, Text } from '@chakra-ui/react';
import { askChatGPT } from '../../state/actions';

function Chatbot() {
  const [request, setRequest] = useState('');
  const [response, setResponse] = useState('Awaiting a question...');
  // const dispatch = useDispatch();

  const handleSubmit = (e) => {
    askChatGPT(request).then(setResponse); // will need to dispatch presumably
  };

  const handleChange = (e) => {
    setRequest(e.target.value);
  };

  return (
    <div>
      <Text>CareChat</Text>
      <Text>Ask me about sexual or reproductive health!</Text>
      <Input type="text" id="name" label="name" value={request} onChange={handleChange} />
      <Button type="button" value="submit" onClick={handleSubmit}> Submit</Button>
      <Text>{response}</Text>
    </div>
  );
}

export default Chatbot;

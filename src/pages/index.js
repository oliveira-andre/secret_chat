import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

function Home() {
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const [userName, setUserName] = useState();
  const [messages, setMessages] = useState([]);
  const [textMessage, setTextMessage] = useState([]);
  const router = useRouter();

  useEffect(() => {
    setUser();

    if (redirectToLogin) {
      router.push('/login');
    } else {
      fetchMessages();
    }
  }, [redirectToLogin]);

  function setUser() {
    if (!localStorage.getItem('username')) {
      setRedirectToLogin(true);
    } else {
      setUserName(
        localStorage.getItem('username')
      );
    }
  }

  async function fetchMessages() {
    const resp = await axios.get('/api/messages');
    console.log(resp.data.messages)
    setMessages(resp.data.messages);
  }

  async function handleSubmit(e) { 
    e.preventDefault();

    const resp = await axios.post('/api/messages', { username: userName, text: textMessage });

    setTextMessage('');
    setMessages([...messages, { username: resp.data.username, text: resp.data.message }]);
  }

  return (
    <div className="container">
      { messages.map((message_data, i) => {
        return(
          <div key={i} className={userName == message_data.username ? "is-left" : ""}>
            <p>{ message_data.text }</p>
          </div>
        )
      }) }
      <form onSubmit={e => handleSubmit(e)}>
        <input type="text" value={ textMessage } onChange={ e => setTextMessage(e.target.value) } />
      </form>
    </div>
  )
}

export default Home;

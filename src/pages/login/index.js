import { useState } from 'react';
import { useRouter } from 'next/router';

function Login() {
  const [userName, setUserName] = useState('');
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem('username', userName);
    router.push('/');
  }

  return (
    <div className="container">
      <form onSubmit={e => handleSubmit(e)}>
        <label htmlFor="username">Username</label>
        <input type="text" value={userName} onChange={e => setUserName(e.target.value)} />
        <button type='submit'>Save</button>
      </form>
    </div>
  )
}

export default Login;

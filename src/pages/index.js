import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

function Home() {
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const [userName, setUserName] = useState();
  const router = useRouter();

  useEffect(() => {
    setUser();

    if (redirectToLogin) {
      router.push('/login');
    }
  }, [redirectToLogin]);

  function setUser() {
    if (!localStorage.getItem('username')) {
      setRedirectToLogin(true);

      setUserName(
        localStorage.getItem('username')
      );
    }
  }

  return (
    <div className="container">
    </div>
  )
}

export default Home;

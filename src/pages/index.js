import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

function Home() {
  const [userName, setUserName] = useState();
  const router = useRouter();

  useEffect(() => {
    setUser(localStorage.getItem('user'));

    if (!user) {
      router.push('/login');
    }
  });

  return (
    <div class="container"> 
    </div>
  )
}

export default Home;

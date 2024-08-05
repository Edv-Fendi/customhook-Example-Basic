import { useState } from 'react';
import './App.css';
import { useFetch } from './useFetch';

export const Home = () => {
  const [postId, setPostId] = useState('');
  const [result, loading] = useFetch('https://jsonplaceholder.typicode.com/posts/' + postId, {
    headers: {
      abc: 2 + postId,
    },
  });

  const handleClick = (id) => {
    setPostId(id);
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (!loading && result) {
    return (
      <div>
        {result?.length ? (
          result.map((p) => (
            <div key={`post-${p.id}`} onClick={() => handleClick(p.id)}>
              <p>{p.title}</p>
            </div>
          ))
        ) : (
          <div onClick={() => handleClick('')}>
            <p>{result.title}</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Oi</h1>
    </div>
  );
};

export default Home;

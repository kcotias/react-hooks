import React, { useState } from 'react';

function App() {
  const [repositories, setRepositories] = useState([]);

  function handleRepository() {
    setRepositories([...repositories, { id: 'novo', name: 'novo' }])
  }

  return (
    <div className="App">
      <ul>
        {repositories.map(repo => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
      <button onClick={handleRepository}>
        Add repo
      </button>
    </div>
  );
}

export default App;

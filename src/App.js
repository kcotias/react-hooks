import React, { useState } from 'react';

function App() {
  const [repositories, setRepositories] = useState([]);

  return (
    <div className="App">
      <ul>
        {repositories.map(repo => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

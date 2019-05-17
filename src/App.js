import React, { useState, useEffect } from 'react';

function App() {
  // first parameter is the title os the state variable
  // second parameter is the title of the function we will use to change its value
  //  then we call useState([]) and inside of it we put the default value it will have
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

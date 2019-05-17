import React, { useState, useEffect } from 'react';

function App() {
  // use effect is made to replace setState and initial state setting
  // first parameter is the title os the state variable
  // second parameter is the title of the function we will use to change its value
  //  then we call useState([]) and inside of it we put the default value it will have
  const [repositories, setRepositories] = useState([]);

  // use effect is made to replace components life cycle methods
  // first parameter is the function it will run (the body of componentdidmount and so on...)
  // second parameter should be an array of values that the function will watch, 
  //and everytime one of those values changes, that function of the first parameter will run. 
  // tips: if you just want the component didmount funcionality, just live the second parameter as an empty array.
  useEffect(async () => {
    const response = await fetch('https://api.github.com/users/kcotias/repos');
    const data = await response.json();

    setRepositories(data);
  }, [])

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

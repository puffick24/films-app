import axios from 'axios';

function App() {

  axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=fb59bcb5')
  .then(response => console.log(response))
  .catch(error => console.log(error.message))

  return (
    <div className="App">
      
    </div>
  );
}

export default App;

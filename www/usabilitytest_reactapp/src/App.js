import React from 'react'
import axios from 'axios';
import UsabilityTest from './usabilityTest.file';

const baseUrl = "https://api.waziup.io/api/v2"

function App() {
  const [temparature, setTemparature] = React.useState(null)

  React.useEffect(() => {
    axios.get(baseUrl + "/devices").then((response) => { console.log(response.data)})
  }, [])

  return (
    <div>
      <h1>Hello!</h1>
    </div>
  );
}

export default App;

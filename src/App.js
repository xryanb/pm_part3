import React from 'react';
import {Link,Routes,Route} from "react-router-dom";
import './App.css';
import Main from './views/Main';
import Results from './components/Results';
import Update from './views/Update';






function App() {
  return (
    <div className="App">
    <Routes>
    <Route path="/product/" element={<Main/>}/>
      <Route path='/product/:id' element={<Results/>}/>
      <Route path='/product/:id/edit' element={<Update/>}/>
    </Routes>
    </div>
  );
}

export default App;

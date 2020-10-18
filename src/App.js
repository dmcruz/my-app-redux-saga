import React from 'react';
import SagaComponent from './components/SagaComponent';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createServer } from "miragejs"

let server = createServer()
server.get("/api/users", { users: [
  { id: 1, name: "Björn Borg", country: "Sweden", slams: 11 },
  { id: 2, name: "Pete Sampras", country: "USA", slams: 14},
  { id: 3, name: "Roger Federer", country: "Switzerland", slams: 20},
  { id: 4, name: "Rafael Nadal", country: "Spain", slams: 20},
  { id: 5, name: "Steffi Graf", country: "Germany", slams: 22},
  { id: 6, name: "Serena Williams", country: "USA", slams: 23}
] }, { timing: 3000 })


function App() {
  return (
    <div className="App">
      <SagaComponent />
    </div>
  );
}

export default App;

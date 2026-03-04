import React from 'react';
import './App.css';

const resources = [
  { id: 1, title: "Community Seed Bank", desc: "Borrow seeds for heirloom tomatoes and peppers.", type: "Resource" },
  { id: 2, title: "Compost 101 Workshop", desc: "Saturday at 10am. Learn the 'black gold' secrets.", type: "Event" },
  { id: 3, title: "Tool Library", desc: "Membership gives you access to tillers and shovels.", type: "Resource" },
  { id: 4, title: "Pollinator Garden Tour", desc: "Guided walk through the downtown bee sanctuary.", type: "Event" },
  { id: 5, title: "Soil Testing Clinic", desc: "Drop off your soil samples for pH balancing tips.", type: "Resource" },
  { id: 6, title: "Rain Barrel Auction", desc: "Hand-painted barrels to help conserve city water.", type: "Event" },
  { id: 7, title: "Vertical Farming Lab", desc: "Indoor space for hydroponic experimenters.", type: "Resource" },
  { id: 8, title: "Winter Sowing Class", desc: "Start your spring garden in the middle of January.", type: "Event" },
  { id: 9, title: "Urban Orchard Map", desc: "Interactive map of public fruit trees in the city.", type: "Resource" },
  { id: 10, title: "Harvest Festival", desc: "Annual potluck and veggie competition in October.", type: "Event" },
];

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1>GreenThumb Collective</h1>
        <p>Resources & Events for the Urban Gardener</p>
      </header>

      <main className="grid-container">
        {resources.map(item => (
          <div key={item.id} className="card">
            <div className="card-tag">{item.type}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <button className="card-btn">Learn More</button>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;


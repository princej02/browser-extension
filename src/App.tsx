import { useEffect, useState } from "react";
import Header from "./components/Header"
import Card from "./components/Card";

type Extension = {
  name: string;
  logo: string;
  description: string;
  isActive: boolean;
}

function App() {
  const [data, setData] = useState<Extension[]>([])
  const [activeFilter, setActiveFilter] = useState<'all' | 'active' | 'inactive'>('all');

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  
  const filteredData = data.filter((item) => {
    if (activeFilter === "all") return true;
    return activeFilter === "active" ? item.isActive : !item.isActive;
  });

  return (
    <div className="app">
      <Header />
      <main className="extension-container">
        <div className="header">
          <h2>Extensions List</h2>
          <div className="header-actions">
            <button
              className={`pill ${activeFilter === 'all' ? 'active' : ''}`} 
              onClick={() => setActiveFilter('all')}>All</button>
            <button 
              className={`pill ${activeFilter === 'active' ? 'active' : ''}`} 
              onClick={() => setActiveFilter('active')}>Active</button>
            <button 
              className={`pill ${activeFilter === 'inactive' ? 'active' : ''}`}
              onClick={() => setActiveFilter('inactive')}>Inactive</button>
          </div>
        </div>
        <div className="extension-container-list">
          {filteredData.map((extension) => (
            <Card
              key={extension.name}
              name={extension.name}
              logo={extension.logo}
              description={extension.description}
              isActive={extension.isActive}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export default App;

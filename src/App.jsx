import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchTestData = async () => {
      try {
        const res = await fetch(
          "https://694cc42fda5ddabf00376964.mockapi.io/api/v1/todos/datas"
        );
        const json = await res.json();
        console.log("Test data response: ", json);
        setData(json);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchTestData();
  }, []);

  return (
    <>
      <h1>Dockerize Application Test New</h1>

      {/* Test call API */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <h2>API Data</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id} style={{ color: "white" }}>
            {item.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;

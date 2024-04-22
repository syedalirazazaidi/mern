import { useState, useEffect } from "react";

import "./App.css";
import axios from "axios";

export interface JOKESTYPE {
  setup: string;
  punchline: string;
}

interface ALLJOKETYPE {
  alljokes: JOKESTYPE[];
}
function App() {
  const [jokesData, setJokesData] = useState<ALLJOKETYPE>({ alljokes: [] });
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<ALLJOKETYPE>("/api/jokes");

        setJokesData(response.data ?? { alljodfdkes: [] });
      } catch (error: string | null) {
        setError(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <p>ALL JOKES {jokesData.alljokes.length}</p>
      {jokesData.alljokes.length > 0 &&
        jokesData.alljokes.map((joke: JOKESTYPE, index: number) => (
          <div key={index}>
            <p style={{ backgroundColor: "red", margin: "1px" }}>
              {joke.setup}
            </p>
          </div>
        ))}
      {error && <p>Error: {error}</p>}
    </div>
  );
}

export default App;

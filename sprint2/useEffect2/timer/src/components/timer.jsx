import { useEffect, useState } from "react";

export const Timer = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let id = setInterval(() => {
      setTimer((timer) => {
        
        if (timer === 10) {
          clearInterval(id);
          return 0;
        }

        return timer + 1;
      });
    }, 1000);
console.log("mount")
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div className="App">
      <h2>Timer:{timer}</h2>
    </div>
  );
};

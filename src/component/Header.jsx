import { useState, useEffect } from 'react';

function Header() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  const tick = () => {
    setCurrentTime(new Date().toLocaleTimeString());
  };

  return (
    <>
      <div>
        hello Header {currentTime}
      </div>
    </>
  );
}

export default Header;

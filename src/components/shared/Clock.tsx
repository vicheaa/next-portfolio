import React, { useState, useEffect } from 'react';

const Clock: React.FC = () => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      setTime(`${hours}:${minutes}:${seconds}`);
    };

    updateClock(); // Initial call to set the time immediately
    const interval = setInterval(updateClock, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div style={styles.clock}>
      {time || 'Loading...'}
    </div>
  );
};

const styles = {
  clock: {
    fontSize: '2rem',
    fontWeight: 'bold',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    marginTop: '20px',
  },
};

export default Clock;

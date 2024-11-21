import { useState, useEffect } from 'react';

const useTime = () => {
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    const getFormattedDate = () => {
      const today = new Date();
      const now = new Date();
      now.setHours(0, 0, 0, 0); 

      const yesterday = new Date();
      yesterday.setDate(today.getDate() - 1);
      yesterday.setHours(0, 0, 0, 0); 

      const currentDate = new Date();

      if (currentDate.toDateString() === today.toDateString()) {
        setFormattedDate('Сегодня');
      } else if (currentDate.toDateString() === yesterday.toDateString()) {
        setFormattedDate('Вчера');
      } else {
        setFormattedDate(
          `${String(currentDate.getDate()).padStart(2, '0')}.${String(
            currentDate.getMonth() + 1
          ).padStart(2, '0')}.${currentDate.getFullYear()}`
        );
      }
    };

    getFormattedDate();
  }, []);

  return formattedDate;
};

export default useTime;

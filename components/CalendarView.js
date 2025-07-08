import { useState, useEffect } from 'react';

const CalendarView = ({ studyPlan }) => {
  const [days, setDays] = useState([]);

  useEffect(() => {
    const today = new Date();
    const examDate = new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000);
    const daysBetween = Math.round((examDate - today) / (1000 * 3600 * 24));

    const newDays = [];
    for (let i = 0; i < daysBetween; i++) {
      newDays.push({
        date: new Date(today.getTime() + i * 24 * 60 * 60 * 1000),
        topics: [],
      });
    }

    studyPlan.forEach((topic) => {
      const topicDays = Math.round(topic.studyTime / 60);
      for (let i = 0; i < topicDays; i++) {
        newDays[i].topics.push(topic);
      }
    });

    setDays(newDays);
  }, [studyPlan]);

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Topics</th>
        </tr>
      </thead>
      <tbody>
        {days.map((day, index) => (
          <tr key={index}>
            <td>{day.date.toLocaleDateString()}</td>
            <td>
              <ul>
                {day.topics.map((topic) => (
                  <li key={topic.id}>{topic.name} ({topic.studyTime} minutes)</li>
                ))}
              </ul>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CalendarView;
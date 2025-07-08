import CalendarView from './CalendarView';

const StudyPlan = ({ studyPlan }) => {
  return (
    <div>
      <h2>Study Plan</h2>
      <CalendarView studyPlan={studyPlan} />
    </div>
  );
};

export default StudyPlan;
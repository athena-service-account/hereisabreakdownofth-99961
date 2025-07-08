import { useState } from 'react';
import SyllabusForm from '../components/SyllabusForm';
import StudyPlan from '../components/StudyPlan';

export default function Home() {
  const [syllabus, setSyllabus] = useState([]);
  const [studyPlan, setStudyPlan] = useState([]);

  const handleSyllabusChange = (newSyllabus) => {
    setSyllabus(newSyllabus);
  };

  const handleGenerateStudyPlan = () => {
    const studyPlanGenerator = new StudyPlanGenerator(syllabus);
    const newStudyPlan = studyPlanGenerator.generateStudyPlan();
    setStudyPlan(newStudyPlan);
  };

  return (
    <div>
      <SyllabusForm syllabus={syllabus} onChange={handleSyllabusChange} />
      <button onClick={handleGenerateStudyPlan}>Generate Study Plan</button>
      {studyPlan.length > 0 && <StudyPlan studyPlan={studyPlan} />}
    </div>
  );
}
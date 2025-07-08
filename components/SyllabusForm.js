import { useState } from 'react';

const SyllabusForm = ({ syllabus, onChange }) => {
  const [newTopic, setNewTopic] = useState('');
  const [newStudyTime, setNewStudyTime] = useState('');

  const handleAddTopic = () => {
    const newSyllabus = [...syllabus, { id: syllabus.length + 1, name: newTopic, studyTime: parseInt(newStudyTime) }];
    onChange(newSyllabus);
    setNewTopic('');
    setNewStudyTime('');
  };

  const handleTopicChange = (index, newTopic) => {
    const newSyllabus = [...syllabus];
    newSyllabus[index] = { ...newSyllabus[index], name: newTopic };
    onChange(newSyllabus);
  };

  const handleStudyTimeChange = (index, newStudyTime) => {
    const newSyllabus = [...syllabus];
    newSyllabus[index] = { ...newSyllabus[index], studyTime: parseInt(newStudyTime) };
    onChange(newSyllabus);
  };

  return (
    <div>
      <h2>Syllabus Input</h2>
      <input type="text" value={newTopic} onChange={(e) => setNewTopic(e.target.value)} placeholder="New Topic" />
      <input type="number" value={newStudyTime} onChange={(e) => setNewStudyTime(e.target.value)} placeholder="Study Time" />
      <button onClick={handleAddTopic}>Add Topic</button>
      <ul>
        {syllabus.map((topic, index) => (
          <li key={topic.id}>
            <input type="text" value={topic.name} onChange={(e) => handleTopicChange(index, e.target.value)} />
            <input type="number" value={topic.studyTime} onChange={(e) => handleStudyTimeChange(index, e.target.value)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SyllabusForm;
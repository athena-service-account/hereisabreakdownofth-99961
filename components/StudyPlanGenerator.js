class StudyPlanGenerator {
  constructor(syllabus) {
    this.syllabus = syllabus;
  }

  generateStudyPlan() {
    const totalStudyTime = this.syllabus.reduce((acc, topic) => acc + topic.studyTime, 0);
    const daysBeforeExam = 30;
    const dailyStudyTime = Math.round(totalStudyTime / daysBeforeExam);

    const studyPlan = [];
    for (let i = 0; i < daysBeforeExam; i++) {
      const dailyTopics = [];
      let remainingDailyStudyTime = dailyStudyTime;
      this.syllabus.forEach((topic) => {
        if (remainingDailyStudyTime >= topic.studyTime) {
          dailyTopics.push(topic);
          remainingDailyStudyTime -= topic.studyTime;
        }
      });
      studyPlan.push(dailyTopics);
    }

    return studyPlan;
  }
}

export default StudyPlanGenerator;
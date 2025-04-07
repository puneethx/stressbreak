import React from 'react';
import EmotionBarChart from '../Charts/EmotionBarChart';
import SentimentPieChart from '../Charts/SentimentPieChart';
import './JournalAnalysis.scss';

const JournalAnalysis = ({ analysisData, journalTitle }) => {
  if (!analysisData) return null;

  const { emotion, sentiment, journal_content } = analysisData;

  return (
    <div className="journal-analysis">
      <h2>{'Journal Analysis'}</h2>
      
      <div className="content-preview">
        <h3>{journalTitle || 'Journal Entry'}</h3>
        <p>{journal_content}</p>
      </div>
      
      <div className="analysis-charts">
        <EmotionBarChart emotions={emotion} />
        <SentimentPieChart sentiment={sentiment} />
      </div>
    </div>
  );
};

export default JournalAnalysis;

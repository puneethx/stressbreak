import React, { useEffect, useState, useContext } from 'react';
import { getCurrentUser } from '../../services/authService';
import EmotionBarChart from '../Charts/EmotionBarChart';
import SentimentPieChart from '../Charts/SentimentPieChart';
import './WeeklyInsights.scss';
import { WeeklyDataContext } from '../../contexts/WeeklyDataContext';

const WeeklyInsights = () => {
  const { weeklyData, loading, error } = useContext(WeeklyDataContext);

  if (loading) {
    return <div className="loading">Loading weekly insights...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!weeklyData) {
    return <div className="no-data">No weekly data available yet.</div>;
  }

  // Handle the new API response format
  const {
    analysis,
    visualizations
  } = weeklyData;

  // Extract data from the analysis object
  const {
    weekly_emotion_analysis,
    weekly_sentiment_analysis,
    progress_assessment,
    weekly_summary,
    cumulative_scores
  } = analysis || {};

  // Divide emotion values by 4 to make charts more proportional
  const scaledEmotions = {};
  if (cumulative_scores?.emotion) {
    Object.entries(cumulative_scores.emotion).forEach(([key, value]) => {
      scaledEmotions[key] = value / 4;
    });
  }

  return (
    <div className="weekly-insights">
      {/* Visualizations section */}
      {visualizations && (
        <div className="visualizations-container">
          <h3>Emotion Visualizations</h3>
          <div className="visualizations-grid">
            {visualizations.emotion_line_plot && (
              <div className="visualization-item">
                <h4>Emotion Trends</h4>
                <img
                  src={`data:image/png;base64,${visualizations.emotion_line_plot}`}
                  alt="Emotion Line Plot"
                  className="visualization-image"
                />
              </div>
            )}

            {/* {visualizations.emotion_grouped_plot && (
              <div className="visualization-item">
                <h4>Grouped Emotions</h4>
                <img
                  src={`data:image/png;base64,${visualizations.emotion_grouped_plot}`}
                  alt="Emotion Grouped Plot"
                  className="visualization-image"
                />
              </div>
            )} */}

            {visualizations.dominant_emotions_plot && (
              <div className="visualization-item">
                <h4>Dominant Emotions</h4>
                <img
                  src={`data:image/png;base64,${visualizations.dominant_emotions_plot}`}
                  alt="Dominant Emotions Plot"
                  className="visualization-image"
                />
              </div>
            )}

            {visualizations.emotion_balance_plot && (
              <div className="visualization-item">
                <h4>Emotion Balance</h4>
                <img
                  src={`data:image/png;base64,${visualizations.emotion_balance_plot}`}
                  alt="Emotion Balance Plot"
                  className="visualization-image"
                />
              </div>
            )}

            {visualizations.emotion_heatmap && (
              <div className="visualization-item">
                <h4>Emotion Heatmap</h4>
                <img
                  src={`data:image/png;base64,${visualizations.emotion_heatmap}`}
                  alt="Emotion Heatmap"
                  className="visualization-image"
                />
              </div>
            )}

            {visualizations.sentiment_line_plot && (
              <div className="visualization-item">
                <h4>Sentiment Trends</h4>
                <img
                  src={`data:image/png;base64,${visualizations.sentiment_line_plot}`}
                  alt="Sentiment Line Plot"
                  className="visualization-image"
                />
              </div>
            )}

            {visualizations.emotion_radar_chart && (
              <div className="visualization-item">
                <h4>Emotion Radar</h4>
                <img
                  src={`data:image/png;base64,${visualizations.emotion_radar_chart}`}
                  alt="Emotion Radar Chart"
                  className="visualization-image"
                />
              </div>
            )}
          </div>
        </div>
      )}
      {/* Summary section */}
      <div className="insights-container">
        <h3>Weekly Summary</h3>
        <p>{weekly_summary}</p>
      </div>

      {/* Emotion Analysis */}
      <div className="insights-container">
        <h3>Emotional Analysis</h3>

        <div className="insight-section">
          <h4>Dominant Emotions</h4>
          <ul>
            {weekly_emotion_analysis?.dominant_emotions?.map((emotion, index) => (
              <li key={index}>{emotion}</li>
            ))}
          </ul>
        </div>

        <div className="insight-section">
          <h4>Highest Positive Day</h4>
          <p>Date: {weekly_emotion_analysis?.highest_positive_day?.day}</p>
          <p>Emotions: {weekly_emotion_analysis?.highest_positive_day?.emotions?.join(', ')}</p>
        </div>

        <div className="insight-section">
          <h4>Highest Negative Day</h4>
          <p>Date: {weekly_emotion_analysis?.highest_negative_day?.day}</p>
          <p>Emotions: {weekly_emotion_analysis?.highest_negative_day?.emotions?.join(', ')}</p>
        </div>

        <div className="insight-section">
          <h4>Emotional Patterns</h4>
          <p>{weekly_emotion_analysis?.emotional_patterns}</p>
        </div>

        <div className="insight-section">
          <h4>Trajectory</h4>
          <p>{weekly_emotion_analysis?.trajectory}</p>
        </div>
      </div>

      {/* Sentiment Analysis */}
      <div className="insights-container">
        <h3>Sentiment Analysis</h3>

        <div className="insight-section">
          <h4>Overall Sentiment</h4>
          <p>{weekly_sentiment_analysis?.overall_sentiment}</p>
        </div>

        <div className="insight-section">
          <h4>Significant Shifts</h4>
          <ul>
            {weekly_sentiment_analysis?.significant_shifts?.map((shift, index) => (
              <li key={index}>{shift}</li>
            ))}
          </ul>
        </div>

        <div className="insight-section">
          <h4>Influencing Factors</h4>
          <ul>
            {weekly_sentiment_analysis?.influencing_factors?.map((factor, index) => (
              <li key={index}>{factor}</li>
            ))}
          </ul>
        </div>

        <div className="insight-section">
          <h4>General Mood</h4>
          <p>{weekly_sentiment_analysis?.general_mood}</p>
        </div>
      </div>

      {/* Progress Assessment */}
      <div className="insights-container">
        <h3>Progress Assessment</h3>

        <div className="insight-section">
          <h4>Growth Areas</h4>
          <ul>
            {progress_assessment?.growth_areas?.map((area, index) => (
              <li key={index}>{area}</li>
            ))}
          </ul>
        </div>

        <div className="insight-section">
          <h4>Challenges</h4>
          <ul>
            {progress_assessment?.challenges?.map((challenge, index) => (
              <li key={index}>{challenge}</li>
            ))}
          </ul>
        </div>

        <div className="insight-section">
          <h4>Consistent Patterns</h4>
          <ul>
            {progress_assessment?.consistent_patterns?.map((pattern, index) => (
              <li key={index}>{pattern}</li>
            ))}
          </ul>
        </div>

        <div className="insight-section">
          <h4>Improvement Suggestions</h4>
          <ul>
            {progress_assessment?.improvement_suggestions?.map((suggestion, index) => (
              <li key={index}>{suggestion}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Charts section */}
      <div className="weekly-charts-container">
        <EmotionBarChart emotions={scaledEmotions} />
        <SentimentPieChart sentiment={cumulative_scores?.sentiment} />
      </div>
    </div>
  );
};

export default WeeklyInsights; 
import axios from 'axios';

const API_BASE_URL = 'https://stressbreak-backend.onrender.com';
// const API_BASE_URL = "http://127.0.0.1:8000"

// Keep track of already fetched weekly reports data
let weeklyReportCache = {};

// Function to analyze journal entry
export const analyzeJournal = async (journalEntry) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/journals/analyze`,
      null,
      {
        params: {
          entry: journalEntry
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error analyzing journal:', error);
    throw error;
  }
};

// Function to fetch weekly report with cache to prevent duplicate requests
export const fetchWeeklyReport = async (userId) => {
  // Check if we already have a request in progress for this user
  if (weeklyReportCache[userId]) {
    console.log(`Using cached weekly report data for user: ${userId}`);
    return weeklyReportCache[userId];
  }
  
  try {
    console.log(`Fetching weekly report for user: ${userId}`);
    
    // Create a promise that will be cached and returned for duplicate requests
    weeklyReportCache[userId] = axios.get(
      `${API_BASE_URL}/analytics/weekly-analysis/${userId}`
    )
    .then(response => {
      console.log('Received weekly report data successfully');
      return response.data;
    });
    
    return await weeklyReportCache[userId];
  } catch (error) {
    console.error('Error fetching weekly report:', error);
    // Remove failed request from cache so it can be tried again
    delete weeklyReportCache[userId];
    throw error;
  }
};
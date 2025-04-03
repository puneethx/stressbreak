import axios from 'axios';

const API_BASE_URL = 'https://stressbreak-backend.onrender.com';

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

// Function to fetch weekly report
export const fetchWeeklyReport = async (userId) => {
  // Check if we already have data for this user in localStorage
  const cachedData = localStorage.getItem(`weeklyData_${userId}`);
  if (cachedData) {
    return JSON.parse(cachedData);
  }

  try {
    const response = await axios.get(
      `${API_BASE_URL}/analytics/weekly-analysis/${userId}`
    );
    
    // Save to localStorage for caching
    localStorage.setItem(`weeklyData_${userId}`, JSON.stringify(response.data));
    
    return response.data;
  } catch (error) {
    console.error('Error fetching weekly report:', error);
    throw error;
  }
}; 
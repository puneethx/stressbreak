import React, { createContext, useState } from 'react';

// Create context with default values
export const WeeklyDataContext = createContext({
  weeklyData: null,
  loading: true,
  error: null,
  setWeeklyData: () => {},
  setLoading: () => {},
  setError: () => {}
});

// Create provider component
export const WeeklyDataProvider = ({ children }) => {
  const [weeklyData, setWeeklyData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  return (
    <WeeklyDataContext.Provider 
      value={{ 
        weeklyData, 
        loading, 
        error, 
        setWeeklyData, 
        setLoading, 
        setError 
      }}
    >
      {children}
    </WeeklyDataContext.Provider>
  );
}; 
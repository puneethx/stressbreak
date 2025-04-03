import users from '../data/users.json';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';
import path from 'path';

// Function to check if user is logged in
export const isLoggedIn = () => {
  return localStorage.getItem('currentUser') !== null;
};

// Function to sign in user
export const signIn = (email, password) => {
  const user = users.find(user => user.email === email && user.password === password);
  
  if (user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    return { success: true, user };
  }
  
  return { success: false, message: 'Email or password is incorrect' };
};

// Function to sign up user
export const signUp = (email, password) => {
  // Check if user already exists
  const existingUser = users.find(user => user.email === email);
  
  if (existingUser) {
    return { success: false, message: 'User already exists with this email' };
  }
  
  // Create new user with a unique ID
  const newUser = {
    user_id: generateUserId(),
    email,
    password
  };
  
  // Since we can't directly modify the imported JSON in browser,
  // we'll save to localStorage for demo purposes
  const updatedUsers = [...users, newUser];
  localStorage.setItem('users', JSON.stringify(updatedUsers));
  
  // Set current user in localStorage
  localStorage.setItem('currentUser', JSON.stringify(newUser));
  
  return { success: true, user: newUser };
};

// Function to sign out user
export const signOut = () => {
  localStorage.removeItem('currentUser');
};

// Function to get current user
export const getCurrentUser = () => {
  const userJson = localStorage.getItem('currentUser');
  return userJson ? JSON.parse(userJson) : null;
};

// Helper function to generate a simple user ID
const generateUserId = () => {
  return Date.now().toString();
}; 
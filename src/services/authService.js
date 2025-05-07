import users from '../data/users.json';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';
import path from 'path';

const API_BASE_URL = 'https://stressbreak-backend.onrender.com';

// Function to get auth header
const getAuthHeader = () => {
  const token = localStorage.getItem('token');
  return token ? { 'Authorization': `Bearer ${token}` } : {};
};

// Function to check if user is logged in
export const isLoggedIn = () => {
  return !!localStorage.getItem('token');
};

// Function to sign in user
export const signIn = async (email, password) => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/login`, {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return { success: false, message: errorData.detail || 'Login failed' };
    }

    const data = await response.json();
    localStorage.setItem('token', data.access_token);
    localStorage.setItem('role_id', data.role_id);
    localStorage.setItem('currentUser', JSON.stringify(data));
    return { success: true, data };
  } catch (error) {
    return { success: false, message: 'Network error occurred' };
  }
};

// Function to sign up user
export const signUp = async (name, email, password, role_id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/create-user/${name}/${email}/${password}/${role_id}`, {
      method: 'POST',
      headers: {
        ...getAuthHeader(),
        'accept': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      return { success: false, message: errorData.detail || 'Signup failed' };
    }

    const userData = await response.json();
    localStorage.setItem('currentUser', JSON.stringify(userData));
    return { success: true, user: userData };
  } catch (error) {
    return { success: false, message: 'Network error occurred' };
  }
};

// Function to sign out user
export const signOut = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('currentUser');
  localStorage.removeItem('role_id');
};

// Function to get current user
export const getCurrentUser = () => {
  const userJson = localStorage.getItem('currentUser');
  return userJson ? JSON.parse(userJson) : null;
};

// Function to get user role
export const getUserRole = () => {
  return localStorage.getItem('role_id');
};

// Helper function to generate a simple user ID
const generateUserId = () => {
  return Date.now().toString();
}; 
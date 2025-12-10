// Archivo de ejemplo: src/utils/api.ts
// Este archivo contiene funciones para comunicarse con el backend

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

export const submitContactForm = async (formData: {
  name: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
  recaptchaToken: string;
}) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/v1/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        recaptchaToken: formData.recaptchaToken,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
};

export const submitBrief = async (formData: {
  name: string;
  email: string;
  phone: string;
  briefType: string;
  message: string;
  recaptchaToken: string;
}) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/v1/brief`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        briefType: formData.briefType,
        recaptchaToken: formData.recaptchaToken,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error submitting brief:', error);
    throw error;
  }
};

export const checkAPIHealth = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/v1/health`);
    return await response.json();
  } catch (error) {
    console.error('API health check failed:', error);
    return null;
  }
};

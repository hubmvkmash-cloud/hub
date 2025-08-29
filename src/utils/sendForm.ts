import axios from 'axios';

export const sendFormData = async (formData: Record<string, string>) => {
  return axios.post('/send.php', formData, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    transformRequest: [data => new URLSearchParams(data).toString()],
  });
};

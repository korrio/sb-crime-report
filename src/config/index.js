const config = {
  BASE_URL: process.env.REACT_APP_API_URL,
};

config.BASE_URL = 'https://stackoverflow-clone-api.onrender.com';

// if (process.env.NODE_ENV === 'development') {
//   config.BASE_URL = 'http://localhost:5000';
// } else if (process.env.NODE_ENV === 'production') {
//   config.BASE_URL = 'https://stackoverflow-clone-api.onrender.com';
// }

export default config;
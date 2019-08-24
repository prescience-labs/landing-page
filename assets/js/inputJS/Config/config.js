import { configVar } from './configVar';
const env = process.env.NODE_ENV || 'development';

const envConfig = () => {
  if (env === 'development') {
    const envConfig = configVar[env];

    Object.keys(envConfig).forEach(key => {
      process.env[key] = envConfig[key];
    });
  }
};

export default envConfig;

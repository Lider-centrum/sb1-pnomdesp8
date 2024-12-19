export const isBusinessHours = (): boolean => {
  const now = new Date();
  const day = now.getDay();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const currentTime = hours + minutes / 60;

  // Monday to Friday (1-5), 8:30 AM to 3:30 PM
  return day >= 1 && day <= 5 && currentTime >= 8.5 && currentTime <= 15.5;
};
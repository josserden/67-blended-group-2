export const generateRandomStatus = () => {
  const statuses = ['online', 'offline', 'busy'];
  const randomIndex = Math.floor(Math.random() * statuses.length);

  return statuses[randomIndex];
};

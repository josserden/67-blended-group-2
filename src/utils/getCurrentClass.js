export const getCurrentClass = status => {
  switch (status) {
    case 'online':
      return 'bg-green-500';
    case 'offline':
      return 'bg-gray-500';
    case 'busy':
      return 'bg-red-500';
    default:
      return '';
  }
};

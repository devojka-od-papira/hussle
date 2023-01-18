export const randomHexColor = () => {
  const hexValues = '0123456789ABCDEF';
  let hexColor = '#';

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * hexValues.length);
    hexColor += hexValues[randomIndex];
  }
  return hexColor;
};

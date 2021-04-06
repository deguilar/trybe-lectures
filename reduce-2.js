const epic = ['A', 'long', 'time', 'ago,', 'in a', 'galaxy', 'far far', 'away...'];

const setence = epic.reduce((previousValue, currentValue) => {
  return `${previousValue} ${currentValue}`;
});

console.log(setence);
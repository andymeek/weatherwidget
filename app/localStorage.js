export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    throw new Error('localStorage getItem error.');
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    return localStorage.setItem('state', serializedState);
  } catch (error) {
    throw new Error('localStorage setItem error');
  }
};

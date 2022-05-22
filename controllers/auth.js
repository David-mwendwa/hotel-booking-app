export const register = (req, res) => {
  res.status(201).send('registered');
};

export const login = (req, res) => {
  res.status(200).send('logged in');
};

export const logout = (req, res) => {
  res.status(200).send('logged out');
};

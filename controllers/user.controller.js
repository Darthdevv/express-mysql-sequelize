


export const registerUser = async (req, res, next) => {
  const { username, email, password } = req.body;
  res.status(201).json({ message: 'User registered' });
}


export const loginUser = async (req, res, next) => { 

};


export const logoutUser = async (req, res, next) => {

};
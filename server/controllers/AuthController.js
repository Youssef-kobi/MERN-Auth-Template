// import User from '../Models/UserModel.js';
// import generateToken from '../Utils/generateToken.js';
// import bcrypt from 'bcrypt';

// @DESC Register User
// @ROUTE /api/users
// @METHOD POST
export const Register = async (req, res) => {
  // console.log(req.body);
  // const user = req.body;
  // try {
  //   let userEmail = await User.findOne({ email: user.email });
  //   if (userEmail) {
  //     return res.status(400).json({
  //       msg: 'email Already Exists',
  //     });
  //   }
  //   const newUser = await User.create(user);
  //   res.status(201).json({
  //     token: generateToken(newUser._id),
  //     user: {
  //       ...user,
  //       id: newUser._id,
  //     },
  //   });
  // } catch (err) {
  //   console.log(err.message);
  //   res.status(500).send('Error in Saving');
  // }
};

// @DESC Login User
// @ROUTE /api/users/login
// @METHOD POST
export const Login = async (req, res) => {
  const { email } = req.body;
  console.log(email);
  res.status(200)
  // try {
  //   let user = await User.findOne({
  //     email,
  //   });
  //   if (!user)
  //     return (
  //       res.status(400).json({
  //         message: 'User Not Exist',
  //       }),
  //       5000
  //     );
  //   const isMatch = await bcrypt.compare(password, user.password);
  //   if (!isMatch)
  //     return res.status(400).json({
  //       message: 'Incorrect Password !',
  //     });
  //   res.status(201).json({
  //     token: generateToken(user._id),
  //     user: {
  //       id: user.id,
  //       email: user.email,
  //     },
  //   });
  // } catch (e) {
  //   console.error(e);
  //   res.status(500).json({
  //     message: 'Server Error',
  //   });
  // }
};

// @DESC Get User Logged in
// @ROUTE /api/users/getMe
// @METHOD GET
export const getMe = async (req, res) => {
  try {
    // console.log(req);
    // request.user is getting fetched from Middleware after token authentication
    const user = await User.findById(req.user.id);
    if (!user) {
      res.status(401);
      throw new Error('User not found');
    } else {
      res.status(201).json(user);
    }
  } catch (e) {
    res.status(500).json({ message: 'Error in Fetching user' });
  }
};

import User from '../models/User';

/**
 * Retrieves profile information of the logged-in user.
 * @async
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
export const getUserProfile = async (req, res) => {
  try {
    const userId = req.user._id;

    // Fetch user profile from the database
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User profile not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving user profile', error });
  }
};

/**
 * Updates profile information of the logged-in user.
 * @async
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
export const updateProfile = async (req, res) => {
  try {
    const userId = req.user._id;
    const { email, biometricData } = req.body;

    // Find user by ID and update profile
    const updatedUser = await User.findByIdAndUpdate(userId, { email, biometricData }, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'Profile updated successfully', updatedUser });
  } catch (error) {
    res.status(500).json({ message: 'Error updating profile', error });
  }
};

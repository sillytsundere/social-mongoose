const { User } = require("../Models");

module.exports = {
  // Get all users
  async getUsers(req, res) {
    try {
      const users = await User.find()
      .select("-__v")
      .populate('thoughts');
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Get a single user by userId
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
      .select("-__v");

      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // create a new user
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //update a user
  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      } else {
        res.status(200).json({ message: "User successfully updated!" });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Delete a user
  async deleteUser(req, res) {
    try {
      //for loop to find all thoughts with user id and delete before deleting user
      // for(let i = 0; i < thoughts.length; i++) {
      //   //find all thoughts belonging to user and delete them before deleting the user
      //   // const thought = await Thought.findOneAndRemove({ username})
      // }
      const user = await User.findOneAndRemove({ _id: req.params.userId });

      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      } else {
        res.status(200).json({ message: "User successfully deleted!" });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //add a friend
  async addFriend({ params }, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: params.userId },
        { $push: { friends: params.friendId } },
        { runValidators: true, new: true }
      );
      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      } else {
        res.status(200).json({ message: "Friend successfully added!" });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //delete a friend
  async deleteFriend({ params }, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: params.userId },
        { $pull: { friends: params.friendId } },
        { runValidators: true, new: true }
      );
      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      } else {
        res.status(200).json({ message: "Friend successfully deleted!" });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

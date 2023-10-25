//import connection, models
const connection = require("../config/connection.js");
const { User, Thought } = require("../Models");

//handle error on execution
connection.on("error", (err) => err);

// Creates a connection to mongodb
connection.once("open", async () => {
  console.log("connected");

  // Delete the collections if they exist
  const userCheck = await connection.db
    .listCollections({ name: "users" })
    .toArray();
  if (userCheck.length) {
    await connection.dropCollection("users");
  }

  const thoughtCheck = await connection.db
    .listCollections({ name: "thoughts" })
    .toArray();
  if (thoughtCheck.length) {
    await connection.dropCollection("thoughts");
  }

  try {
    const userData = [
      {
        username: "userX",
        email: "userx@example.com",
        thoughts: [],
        friends: [],
      },
      {
        username: "userY",
        email: "usery@example.com",
        thoughts: [],
        friends: [],
      },
      {
        username: "userZ",
        email: "userz@example.com",
        thoughts: [],
        friends: [],
      },
    ];
    const createdUsers = await User.insertMany(userData);
    console.log("Users seeded successfully!", createdUsers);

    const userIds = createdUsers.map((user) => user._id);

    const thoughtData = [
      {
        thoughtText: "First thought",
        createdAt: "2023-09-29T14:00:49.886Z",
        username: userIds[0],
        reactions: [
          {
            reactionBody: "grumpy",
            username: userIds[1],
            createdAt: "2023-09-29T16:12:20.886Z"
          },
          {
            reactionBody: "sneezy",
            username: userIds[2],
            createdAt: "2023-09-30T17:24:27.886Z"
          },
        ],
      },
      {
        thoughtText: "Second thought",
        createdAt: "2023-10-08T19:10:32.886Z",
        username: userIds[1],
        reactions: [
            {
                reactionBody: "bashful",
                username: userIds[0],
                createdAt: "2023-10-08T20:05:38.886Z"
            },
            {
              reactionBody: "sleepy",
              username: userIds[2],
              createdAt: "2023-10-09T06:15:57.886Z"
            },
        ],
      },
      {
        thoughtText: "Third thought",
        createdAt: "2023-10-14T19:27:33.886Z",
        username: userIds[2],
        reactions: [
          {
            reactionBody: "happy",
            username: userIds[0],
            createdAt: "2023-10-14T21:12:44.886Z"
          },
          {
            reactionBody: "dopey",
            username: userIds[1],
            createdAt: "2023-10-16T12:35:24.886Z"
          },
        ],
      },
    ];
    const createdThoughts = await Thought.insertMany(thoughtData);
    console.log("Thoughts seeded successfully!", createdThoughts);

    const thoughtIds = createdThoughts.map((thought) => thought._id);

    for (let i = 0; i < userIds.length; i++) {
        const user = await User.findOneAndUpdate(
        { _id: userIds[i] },
        { $addToSet: { thoughts: thoughtIds[i] } },
        { new: true }
      );
    };

    console.log("Thoughts successfully entered into User thoughts arrays!");
  } catch (err) {
    console.log("Error seeding user and/or thoughts.", err);
  }
  process.exit(0);
});

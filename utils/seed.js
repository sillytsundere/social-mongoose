//import connection, models 
const connection = require('../config/connection.js');
const { User, Thought } = require('../Models');

//handle error on execution
connection.on('error', (err) => err);

// Creates a connection to mongodb
connection.once('open', async () => {
    console.log('connected');

    // Delete the collections if they exist
    const userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if(userCheck.length) {
        await connection.dropCollection('users');
    }

    const thoughtCheck = await connection.db.listCollections({ name: 'thoughts'}).toArray();
    if(thoughtCheck.length) {
        await connection.dropCollection('thoughts');
    }

    try {
        const userData = [
            {
                username: 'userX',
                email: 'userx@example.com',
                thoughts: [],
                friends: [],
              },
              {
                username: 'userY',
                email: 'usery@example.com',
                thoughts: [],
                friends: [],
              },
              {
                username: 'userZ',
                email: 'userz@example.com',
                thoughts: [],
                friends: [],
              },
        ]
        const createdUsers = await User.insertMany(userData);
        console.log('Users seeded successfully!', createdUsers);

        const userIds = createdUsers.map(user => user._id);

        const thoughtData = [
            {
                thoughtText: 'First thought',
                username: userIds[0],
            },
            {
                thoughtText: 'Second thought',
                username: userIds[1],
            },
            {
                thoughtText: 'Third thought',
                username: userIds[2],
            }
        ]
        const createdThoughts = await Thought.insertMany(thoughtData);
        console.log('Thoughts seeded successfully!', createdThoughts);

    } catch (err) {
        console.log('Error seeding user and/or thoughts.', err);
    }
    process.exit(0);
});
## Social Network API

# Description

This web application is a social network API which utilizes Express.js for routing, a MongoDB database and the Mongoose ODM. This social network API allows users to share thoughts, react to thoughts and add friends. Users can also remove friends, reactions, thoughts and delete their accounts.

# Table of Contents

# Installation

To run this application, first download the repository and open in your preferred code editor. Run `npm install` to download the necessary npm package dependencies. These dependencies can be found listed in the package.json file. If you wish to seed the database with the seed data from the seed.js file, use the command `npm run seed`. Finally, start the application by running the command `npm run start`.

# Usage

While this application "can" be viewed in a browser, it will display in JSON format as this application has no front end. Opening the application in Insomnia, at the link corresponding to the Port it is running on, http://localhost:3001, will allow you to access all the different paths and to view the returned information in a more reader-friendly way.

In Insomnia utilize the main link, http://localhost:3001 with the paths:

- /api/users: to view all users

- /api/users/:userId: to view a single user

- /api/thoughts: to view all thoughts

- /api/thoughts/:thoughtId: to view a single thought

This will allow you to view and interact with the information in the database.

There are further routes that can be found in the routes folder in the repository to access all the functionality of the app, including:

- create new user/thought/reaction

- delete a user/thought/reaction

- add/remove a friend

- update a user/thought

A video demonstrating the utility of the application can be viewed [here]().

# License

MIT License

# Contributing Guidelines

Please contact me through [email](mailto:paigehcarroll@gmail.com) or via [my Github page](https://github.com/sillytsundere) if you'd like to contribute.

# Badges

![Static Badge](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)

![Static Badge](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

![Static Badge](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)

![Static Badge](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

Badges sourced from: [Awesome Badges](https://dev.to/envoy_/150-badges-for-github-pnk)

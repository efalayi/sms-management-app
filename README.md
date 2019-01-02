[![Coverage Status](https://coveralls.io/repos/github/efalayi/sms-management-app/badge.svg?branch=develop)](https://coveralls.io/github/efalayi/sms-management-app?branch=develop)
# sms-management-app
The SMS application API is a short message service management system. It keeps track of sent and received messages. 

###### Note
This API does not send SMS but only keeps record of sent or received sms messages.

###### Dependencies
- [Babel](https://babeljs.io/)
- [Express](https://expressjs.com/)
- [Postgres](https://www.postgresql.org/)
- [Sequelize](http://docs.sequelizejs.com/)

***
#### Getting Started
- Clone the project from repository [https://github.com/efalayi/sms-management-app](https://github.com/efalayi/sms-management-app
- In your terminal, change directory to the cloned folder and run `yarn install`. This installs all the app's dependencies.
- Create a `.env` file using the sample specified in [.env.sample](.env.sample)
- To start the app in production mode, set your `NODE_ENV` to `production` and run `yarn start`
- To start the app in development mode, set your `NODE_ENV` to `development` and run `yarn run start:dev`
- Point your browser to `localhost`, using the port number defined in your `.env file`.
- Alternatively, you can access the API on [https://sms-management-app.herokuapp.com/api/v1/](https://sms-management-app.herokuapp.com/api/v1/)

#### Testing
Server modules were tested using Mocha and Supertest

###### NPM Scripts
To make development easier, some NPM scripts were written:
- `yarn test` runs test for server modules using Mocha
- `yarn run start:dev` runs app on local machine

***
##### License
[MIT](LICENSE.txt) © 2018 | [Esther Falayi](github.com/andela-efalayi/) | 
Andela, Nigeria

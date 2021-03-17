# Jobly

Jobly is a mock job board site where users can sign up and login. Logged in users gain access to a list of companies with search and filtering capabilities. Each company has a list of job postings that a user can view. A user may apply to a job posting, but each user is restricted from duplicate applications to a single job posting posted by a company.

Check out the deployed app <a href="http://hilarious-cobweb.surge.sh">here</a>.

Note: the following documentation focuses on the backend. For frontend related documentation and commentary, please go <a href="https://github.com/Win-C/react-jobly">here</a> 

## Screenshots

TODO: TBU with application screenshots

**Database Entity Relationships**

<img src="/static/images/database-er-diagram.png" width="750" height="250">

- Note: The applications tables is a join table and has two foreign keys as a primary key. 
- Key relationships:
    - Each user may have many applications (one-to-many) but each job only has one application for each user (one-to-one)
    - Each company may have many jobs (one-to-many)

## Current features
- RESTful routing
- Logged in users can apply for a job

## Upcoming features
- When admins add a user the system makes a random password for the user
- Use enum types in PostgreSQL to change the state column in the applications table to consist of 'interested', 'applied', 'accepted', 'rejected'
- Add technologies for jobs
- Add technologies for users

## Tech stack
- PostgreSQL for database
- Express / JavaScript for backend
- Create-React-App/React for frontend

## Dependencies
**Backend dependencies** include:
- bcrypt
- body-parser
- colors
- cors
- dotenv
- express
- jest
- jsonschema
- jsonwebtoken
- morgan
- pg
- supertest

Note: See package.json file for full list and associated package versions.

**Frontend dependencies** include:
- axios for requests
- bootstrap for styling
- jest *(ships with CRA)*
- jsonwebtoken for security
- react-router-dom for routing

## Installation
**Backend Development Setup**

A starter database is provided which can be used to create a jobly database:
```console
createdb jobly < jobly.sql
```

We used Node.js for our back-end JavaScript runtime environment. To install the backend dependencies from the package.json file:
```console
npm install
```

Then start up the server (which we have set to start on port 3001):
```console
npm start
```

## Testing

To run tests:
```console
jest -i
```

Note: any time you run our tests here, you will need to use the -i flag for Jest so that the tests run "in band" (in order, not at the same time).

**Coverage Report**:

<img src="/static/images/test-coverage-report.png" width="600" height="250">


## Deployment


## Authors
- Winnie Chou
- Sean Kim (pair programming partner)
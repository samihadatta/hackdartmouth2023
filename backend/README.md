# Backend Directory

## Models:
- Submissions:
    - id
    - description: string
    - lng: decimal
    - lat: decimal
    - tag: String
    - comments: Array
- Users:

## Routes:
- Submissions:
    - /submissions
        - POST: create
        - GET: get all submissions
    - /submissions/:id
        - GET: get submission by id
        - DELETE: delete a submission
    - /submissions/tag/:tag
        - GET: get submissions with tag
- Users:

* node with babel
* expressjs
* airbnb eslint rules

Procfile for Heroku included
Settings for render.com:
* build command:  `npm install && npm run build`
* run command:  `npm run prod`
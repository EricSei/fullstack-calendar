# Event App React-Redux Already Packaged 
## Website [Demo](https://radiant-spire-15760.herokuapp.com/)
## Server Side Rendering Application 
- `git checkout ssr || git checkout non-ssr`
## Setup
- run `npm install`
## RUN
- running dev (hot reloading) 
    + `cd FullStackCalendar && npm run start:dev`
    + FullStack app will be running on port 8000 e.g `http://localhost:8000`
    + Development on the front-end open a seperate terminal, 
		+ `cd CalendarFrontEnd && npm start`
    + App will be running on port 3000

- running production 
    + `cd CalendarFrontEnd && npm run build`
    + `cp build/* -r ../FullStackCalendar`
    + `npm start`

# Features
- Local Persisted Authentication
 		+ user have to be logged to create an event 
    + user can only modified and delete polls s/he created
		+ user will be promted with a notification
## APIs
- Rules
    + all backend routes start with '/api', e.g. localhost:8000/api/polls'
    + you have to be logged in to access most routes, e.g, post, put and delete routes
## Backend  
	- Rules
    + all backend routes start with '/api/v1/', e.g. http://localhost:3001/api/polls'
    + you have to be logged in to access most routes, e.g, post, put and delete routes
### POST /events 
	+ create a new event
### GET /events
	+ returns all events with their options 
### DELETE /events/:id 
	+ deletes a event, all its associated voting records will also be deleted
### PUT /events/:id
	+ update an existing event.  

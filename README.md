# BartLive!

BartLive! is a web application that lets you track Bart trains on a map in real time. 

# Background & Overview

There are a lot of Bart apps that can update users on when the next train is approaching a specific station. However,  there is not a single app out there that displays all trains on a map in real time. For this project we will need to:

* Render Google maps in our main component ( to display routes)
* Add a data layer to Google Maps that contains markers for stations and trains
* Wrap multiple API calls in a Promise, and parse the resolved response to determine the initial state of our main component.
* Programmatically update the train marker, reflecting its movements along the route
* Design a local state shape to accommodate changes in the train schedules in real time.
* Fetch data from Bart API to be able to display trains in real time.


# Functionality & MVPs

- [ ] User auth ( login & signup)
- [ ] Add Google maps to React component and render on home page.
- [ ] Render Bart routes with markers on each station.
- [ ] Fetch initial state of trains through Bart API and place them on the map.
- [ ] Display info snippets when station/train markers are clicked on.
- [ ] Get train movements between stations according to the data fetched through Bart API (realtime).
- [ ] Production README

Note: The goal is to get one route working for now.

### Bonus Features:

- [ ] Users can save favorite routes and display trains from that route only.
- [ ] Get all trains from all routes.
- [ ] Display timetables when trains/station markers are clicked on.

# Technologies and Technical Challenges

## Technologies:

- Backend: MongoDB | Express
- Frontend: React | Node.js | Redux
- Google Maps API
- Bart API
- Leaflet

## Technical Challenges:

Although, BART provides real time data on arrival times; it doesn't provide the exact location of trains. Therefore, we need to calculate the position of the train given the arrival data to a station. 

# Things Accomplished Over The Weekend

* All members read the MERN tutorial on AppAcademy Open.
* Created database for stations
* Implemented user auth
* Project is setup on Github.
* Transit layer added to React component.
* Station markers are now visible.


# Group Members and Work Breakdown
Eugene: Backend design; writing thunk action creators and actions to hit Bart API endpoints and extract the relevant data
Designing a local state in our main component, and corresponding action/reducers, to accommodate real-time changes in Bart schedule

* July 13 - July 14 [weekend]

Create GitHub repository and add all members as collaborators. **Onur**
Create rules for GitHub workflow. **Onur**
Create Slack group for better communication. **Onur**
Setup project base through MERN tutorials on AppAcademy Open. **Onur**
Review Leaflet tutorials and integrate Leaflet to React. **Onur**
Review BART API properties to be able to fetch station data. **Onur**
Create api_util, action & reducer files to generate station markers. **Onur**
Add Transit map and station markers to {MainPage} React component. **Onur**
Create a Google doc for production README. **Onur**


* July 15 [day 3]




* July 16 [day 4]




* July 17 [day 5]





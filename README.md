# Smash or Pass

Welcome to Smash or Pass, a dating app created by Alex Guanipatin, John Garbero, and Julian Leal. Here, you are assigned a user and can sort through an array of potential partners and indicate whether or not you are interested in them. You can also create a new user, edit your current user, and unmatch a profile that you are no longer interested in.

## Getting Started

After setting up the backend server (see instructions [here](https://github.com/sebas5950/backend-match/blob/main/README.md), do the following:

1. Fork and clone this repository.
2. CD into this respective file on your computer.
3. Install dependencies with `npm install`. 
4. Run the app simultaneosly with the backend server using `npm start`.

## Features

### CRUD Operations

- Use multiple asynchronous fetch requests to obtain a variety of informtion from the backend server.
- Create a new user.
- Create a new match instance if it doesn't already exist.
- Edit and update a user using an edit form.
- Edit a match instance by "swiping right" (clicking the check mark) on another profile.
- Delete a match instance by "unmatching" with another profile.

### React and React Router

- Organize code structure by separating components into folders.
- Organize web page by separating components through NavBar.
- Utilize inverse data flow by sending props between parent and child components.

## Tech Stack

- React.js
- React Router
- HTML/CSS
- Material UI

## Data Flow

`
                                index
                                  |
                                 App
       ___________________________|________________________________________
      |        |         |        |            |         |        |        |
   NavBar    Footer     Bio     Swiper      Matches   NewUser    Info   EditForm
                         |        |            |        
                         |        |            |
                      BioForm  SwiperCard  ProfileCard
                     

`


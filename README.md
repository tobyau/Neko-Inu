# Neko & Inu
Means Cat🐱 and Dog🐶 in Japanese 

Tech Stack 
- Webpack
- Babel 
- React
- React Router
- Context API for global state management 
- Node
- Express 
- Bootstrap


## App Setup 
1. Open your terminal or command line and type: `git clone https://github.com/tobyau/Neko-Inu.git`
2. go into your project directory `cd Neko-Inu`
3. Get an API key from [https://getyourpet.com/api-documentation/](https://getyourpet.com/api-documentation/)
4. Create a `keys.js` file in your root directory
4. Save that key in `keys.js` following the code below 
```
module.exports = {
  apiKey: "your-api-key",
}
```
5. Install dependencies by typing `npm install && cd client && npm install` 


## Running the application
Open a terminal and type the following 
```
npm run start 
```

Open another terminal and type 
```
npm run start 
```

Check out the app on http://localhost:8080/ 

![home](./client/src/assets/home_page.png)
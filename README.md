
# RainBloom Solo Project Description

A few years ago, I applied for a grant to build a rain garden through the Landscaping for Clean Water Program in Dakota County. Rain gardens have a depression in the middle of them and have a raised bank called a berm around its perimeter. This allows it to capture and soak in run-off water. Rain gardens are beneficial to the environment because they capture storm run-off water and filter out the pollutants in it before allowing that water to flow into other bodies of water like lakes, rivers, and streams. They also help prevent erosion and provide food and shelter for pollinators and other wildlife. Going through the process of building the rain garden is what inspired me to make this app. There is a lot of great information out there about how to build rain gardens, but I wanted to bring it as much of it as I could into one place, make it available online, and make it more specific to installing rain gardens in Minnesota. In this way, I wanted to make information about designing rain gardens and installing them more accessible to folks who are interested in learning more about them and might want to install one.


This app is a full stack React app that guides users through the steps of building and installing a rain garden, providing useful information along the way. Users can search for their location on a topographic map and use that elevation data to choose an ideal location for their rain garden by moving the icon marker on the map to the desired spot. They can also use an area measurement tool to get the area of surfaces nearby the garden that produce run-off water (such as a roof, driveway, parking lot, patio, or sidewalk). The app also guides the user through figuring out the adequate depth of their rain garden. Once they have that information, they can input those numbers into the app and it will calculate the size in square feet that their rain garden needs to be in order to adequately capture 1 inch of run-off water from the area surrounding the garden. Users can use a search feature to search for plants based on their microclimate and goals for the garden, and add those plants to their garden. Users can also add and edit observations about how the plants are faring once they've planted them. The app also guides users through the plant layout design and installation phases of the project. Finally, there is a picture gallery feature that allows users to upload photos of their garden to the app. This allows the user to keep track of valuable information about how the plants are doing. 

## Demo
Will be posted soon!
Currently deploying this project to Heroku

## Technologies Used
JavaScript
React
Redux
Redux-Saga
Node.js
Express
HTML
CSS
SQL
Postgres
Material-UI
Passport
Figma
dbDesigner
Multer
Leaflet JavaScript Libraries
React-Leaflet
MapBox Vector Tiles API
Weather API
Heroku

## Challenges Overcome

One of the main challenges I overcame in this app was dealing with functions that were very long and had many different functions inside of them. To solve that challenge, I refactored my code by using the Single Responsibility Principle as a guide and pulling out specific features or functions into their own components. For example, in my Map.jsx function, I ended up pulling out several features of the map into separate components. I also added code comments to document what specific lines of code or functions do. This made the code less overwhelming and much easier to read when I needed to go back and reference it or make changes.

Another challenege I overcame was making sure that the features of the map (such as the search feature, the download a PNG file feature, the draggable marker, the area and distance measurement tool, and the vector tile map layers) were all compatible with each other. To solve this, I first needed to determine that the versions of React, Leaflet, and React Leaflet that I had installed were compatible with each other. I checked my package.json and looked in my console log for errors about peer dependencies when I tried to npm install a package. Once I made sure those were compatible, when I added different features or plug-ins to the map from Leaflet and React Leaflet, I needed to make sure that those technologies or solutions I was searching for were compatible with the versions I had. I read the documentation, checked several Github Issues tabs, and checked my package.json file continually to ensure that the versions that I was using would be compatible with each other and with the features I wanted to add. This allowed me to get the map features to function and work together smoothly.


## Next Steps
In the future, I would like to get higher resolution topographic maps using MapBox or other map APIs that would allow the user to see a higher density of contour lines on their map. This would allow them to more easily choose a location for their garden.

I would also like to add a feature to this app that guides users through how to maintain the garden through the seasons once they've installed one, and gives them reminders for the tasks that are recommended at a given time of year. It would also allow them to add, edit, and delete notes about their garden within that feature. 

## Acknowledgements

Thank you to my wonderful instructors, Edan and Kris, at Prime Ditigal Academy, and the entire Ramirez cohort for being so supportive through the process of building this app.

















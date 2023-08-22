
# RainBloom Solo Project Description

This app is a full stack React app that guides users through the steps of building and installing a rain garden. It helps the user determine the appropriate location, depth, and area of their garden, along with a search feature to find the right plants based on their microclimate. Finally, it includes a picture gallery that allows the user to upload photos of their garden and track valueable information about their plants.

## Demo
<a href="https://drive.google.com/file/d/1YeOxDlaoe0sW3yxb6jTim20J1jbvzf-F/view?usp=sharing">RainBloom Demo</a>


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

















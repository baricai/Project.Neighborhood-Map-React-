# Project.Neighborhood-Map-React-



## Project Overview

For the **Restaurant Reviews** projects,  convert a static webpage to a mobile-ready web application. In **Stage One**, we were given a code with a lot of issues and stuff all over the place, my job was to organize and provide the best functionality by organizing html, css and add more stuff to both for a better user experience.


# How to run the project

To run the project, download or clone the repository in your computer:

- $ git clone https://baricai.github.io/Project.Neighborhood-Map-React-/

1. Type into the filter/search box to filter the shown locations on the map.
2. Click on the button below the filter/search box to collapse or expand the suggestions list.
3. Click anywhere on the map to close the information window that opens.
4. Click on any marker to see the location details fetched from the [FourSquare APIs](https://developer.foursquare.com/).



and follow the instructions below:

In the repository folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer.

In a terminal (like Git Bash, Cygwin or the Windows terminal), check the version of Python you have: python -V. If you have Python 2.x, spin up the server with python -m SimpleHTTPServer 8000 (or some other port, if port 8000 is already in use.) For Python 3.x, you can use python3 -m http.server 8000 or python -m http.server 8000. If you don't have Python installed, navigate to Python's website to download and install the software.

With your server running, visit the site: http://localhost:8000.

Once it was loaded and set up on the server I used mapbox top get a token for my maps on both index.html and restaurant.html, the rest was just looking at the code on both html and CSS and convert the provided site to a responsive design.

At the end I added a service worker script file into the project sw.js so that any page that has been visited by a user will be accessible when the user is offline.

# Material, resources and tools used
-Udacity mentoring
-Slack mentoring
-Github pages
-Mapbox
-Visual Studio
-Codepen.io
-CSS reference and almanac.

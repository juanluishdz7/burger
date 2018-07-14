# burger
This application uses MySQL, Node, Express, Handlebars and ORM. I followed the MVC design pattern and used Node and MySQL to query and route data in your app, and Handlebars to generate your HTML.

Functionality
Using ORM, the app has 3 CRUD functions.

READ all entries from the MySQL database and display them to the DOM using Handlebars.
UPDATE a selected burger by clicking "Devour It", which...
hits an /burger/eat/:id route in Express to change its "devoured" status in the MySQL database
re-routes the webpage back to the index, where the burger is now in the devoured section (via Handlebars)
CREATE a new burger using the "Place Order" form, which...
hits a /burger/create route in Express to insert a new burger into the MySQL database. 

# Phase_2_Project

# Minimum Project Requirements

1.You must make a single page application (only one index.html file) using create-react-app.

2.Your app should use at least 3 components in a way that keeps your code well organized.

3.There should be at least 2 client-side routes using React Router (Links to an external site.). Be sure to include a nav bar or other UI element that allows users to navigate between routes.

4.Use a json-server to create a RESTful API for your backend and make both a GET and a POST request to the json server. Use a form to make your post request, specifically a controlled form/component.
    You should keep your json-server data simple: avoid nested data and associations. You'll learn how to work with more complex data in the next two phases. Focus on the frontend for this project.


# Expand Your Project (Optional)
If you have the time, continue to build out your project in one or more (or all!) of the following ways:

1.Include 5 or more components, and 3 or more client-side routes, in your application.

2.Incorporate data from an external API. Check out this list of APIs (Links to an external site.) if you need some inspiration!

3.Add some styling: you're encouraged to write your CSS from scratch, either by using styled components (Links to an external site.) or writing CSS files and using id/className to style your elements. You can also incorporate a UI framework (like React Bootstrap (Links to an external site.), Semantic UI (Links to an external site.), or Material UI (Links to an external site.)) if you prefer.

4.Deploy your app! (See the "Deploying" section below for instructions.)


# Component Hierarchy
└── App
    ├── Header
    ├── Home(CoupleInfo)
    ├── NavBar
    ├── AddInspiration
    └──Categories
        |   InspirationList
        └── InspirationShow

1. In the top level component App, create parent routes and render Home, Header, NavBar, AddInspiration, and Categories
2. In Categories, render <InspirationList />
3. In Inspiration List, iterate through the inspiration/post object and create a dynamic <Link> for each post    using its id
4. In Categories, import useRouteMatch and create a child route by combining the current url with the post_id parameter; inside the child route, render <InspirtationShow />, passing the post object as props
5. In <InspirtationShow />, import useParams; use the post_id from the params object to access the correct post from the post object and display it on the page


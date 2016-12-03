# Weather Widget

The Weather Widget app is a simple Weather Widget which you can use to embed onto your website. It uses the Open Weather API to fetch the weather data.

## Install & Run

    npm i

To build all:

    npm run build

To start server:

    npm start

To run tests:

    npm test

## Run the app

    Widget Editor - http://localhost:3000/editor
        
        Features: 
         - Create multiple new Weather Widgets;
         - Copy embed Weather Widget code to your website.

    Weather Widget - http://localhost:3000/widgets
        
        Features:
        - View the last created widget - http://localhost:3000/widgets
        - View a specific widget by going to http://localhost:3000/widget?widgetId=[hash] - where “[hash]’ should be replaced by the widgetID in the embedded code generated from the editor.
    
    Embed Example - http://localhost:3000/embed
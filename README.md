#generator-react-app

A generator for [Yeoman](http://yeoman.io).

What can i do with it ?

- generate single page application with [React](http://facebook.github.io/react/index.html), jQuery, Backbone and Bootstrap.
- it uses [Browserifiy](http://browserify.org/)
- it uses Grunt with **grunt-browserify** and **grunt-contrib-watch**
- generate Mongoose + Express project
- generate some React "bootstrapped" components ("skeleton" component, tabulation) (more to come)
- generate some React "bootstrapped" components linked to Backbone Models or Collections (more to come)

##Sub generators list :

- `yo react-app:mgroutes Human` : generate express routes, mongoose Human Model, Human Controller
- `yo react-app:bbmc Human` generate Backbone a Human Model and Collection.js
- `yo react-app:formbb HumanForm Human` generate a form linked to a Backbone Human Model
- `yo react-app:tablebb HumansTable Human` generate a table linked to a Backbone Human Collection
- `yo react-app:listbb HumansList Human` generate a list linked to a Backbone Human Collection


- `yo react-app:tab ApplicationTab` create a "Bootstrap" Tab (and tab panes) inside a container (ie:`div`)
- `yo react-app:shell MyComponent tagName` create a React Component skeleton


##Getting Started

###Install

To install generator-react-app from npm, run:

```
$ npm install -g generator-react-app
```

###Create an application

####1-ignition

    mkdir myapp
    cd myapp
    yo react-app

####2-generate

     _____             _       _____
    | __  |___ ___ ___| |_ ___|  _  |___ ___
    |    -| -_| .'|  _|  _|___|     | . | . |
    |__|__|___|__,|___|_|     |__|__|  _|  _|
                                    |_| |_|
    Hi! This is a React-Express-Mongoose Generator :) Enjoy!
    [?] Application name? MyApplication
    [?] DataBase name? mydatabase

Type your application name (ie: `MyApplication`), then database name (ie: `mydatabase`) and valid, and wait ...

####3-first launch

- start MongoDb (`mongod`)
- start `grunt watch`
- start Application : `node app.js` (use node monitor it's useful)
- open your webapp : [http://localhost:3000](http://localhost:3000)

###Add Express routes, Mongoose Schemas, models and controllers (back side)

Type `yo react-app:mgroutes Human` (where `Human` is the model name), then describe schema and url (keep default value)

    [?] mongoose schema (ie: name: String, remark: String)? firstName : String, lastName : String
    [?] url? humans

3 files are created :

    create models/Human.js
    create routes/Humans.routes.js
    create controllers/HumansCtrl.js

**Remark**: Each time, `./all.routes.js` file is automatically updated (to load all routes)

###You need form and data table

####1-create human form

Type `yo react-app:formbb HumanForm Human` (where `HumanForm` is the React component Name, `Human` the associated model)

    [?] model name (ie: Book) Human
    [?] fields (for UI) (ie : title, author)? firstName, lastName
    [?] url? humans

- Fill the Model name (keep default value)
- Fill the fields (same as Mongoose Schema)
- Fill url (keep default value)

1 new file is generated :

    create public/js/react_components/HumanForm.js

####2-create humans data table

Type `yo react-app:tablebb HumansTable Human`

    [?] model name (ie: Book) Human
    [?] fields (for UI) (ie : title, author)? firstName, lastName
    [?] url? humans

1 new file is generated :

    create public/js/react_components/HumansTable.js

####3-integrate our 2 components

Open `public/js/modules/main.js` and replace content with this :

    /** @jsx React.DOM */
    var React   = require('react');
    var Backbone = require("backbone");
    var About = require('../react_components/About');

    var HumanForm = require('../react_components/HumanForm');
    var HumansTable = require('../react_components/HumansTable');

    Backbone.history.start();

    React.renderComponent(
      <HumansTable pollInterval={500}/>,
      document.querySelector('HumansTable')
    );

    React.renderComponent(
      <HumanForm/>,
      document.querySelector('HumanForm')
    );

Then open `public/index.html` and replace :

    <div class="container">
      <div class="row">
        <div class="col-md-6 about_my_app">
        </div>
        <div class="col-md-6 about_how_to">
        </div>
      </div>
    </div>

by

    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <HumanForm/>
        </div>
        <div class="col-md-6">
          <HumansTable pollIntervall={500}/>
        </div>
      </div>
    </div>

You can now re-start `node app.js`. That's All!

##Other sub generators

- Tab : `yo react-app:tab ApplicationTab div` create a "Bootstrap" Tab (and tab panes) inside a container (ie:`div`)
- Shell : `yo react-app:shell MyComponent div` create a React Component skeleton
- **more to come** ... WIP

**Remark**: all components are generated to the `public/js/components` directory. Each time, `public/js/all.scripts.js` file is automatically updated (to load components)

###Shell sample :

    /** @jsx React.DOM */
    var MyComponent = React.createClass({

      getInitialState: function() {
        return {content:"..."};
      },

      componentWillMount: function() {},
      componentDidMount: function() {},

      render: function() {
        return (
          <div>
            {this.state.content}
          </div>
        );
      }
    });

####Use MyComponent :

    /*--- javascript side ---*/
    React.renderComponent(
      <MyComponent/>,
      document.querySelector('.mycomponent')
    );

    <!-- html side -->
    <div class="mycomponent"></div>

###Put components inside Tab component

Add dependencies :

    var HumanForm = require('./HumanForm');
    var HumansTable = require('./HumansTable');

This is the `render` method of a Tab component :

    render: function() {

      return (
        <div id={this.props.id}>

          <ul className="nav nav-tabs">
            <li><a href="#humanform" data-toggle="tab">HumanForm</a></li>
            <li><a href="#humantable" data-toggle="tab">HumanTable</a></li>

          </ul>

          <div className="tab-content">
            <div className="tab-pane" id="humanform">
              <div className="container">content of HumanForm</div>
            </div>
            <div className="tab-pane" id="humantable">
              <div className="container">content of HumanTable</div>
            </div>

          </div>
        </div>
      );
    }

If you want to use our Form and Table components inside Tab component, it's simple, you have just to change panes content like that :

    <div className="tab-content">
      <div className="tab-pane" id="humanform">
        <div className="container">
          <HumanForm/>
        </div>
      </div>
      <div className="tab-pane" id="humantable">
        <div className="container">
          <HumansTable pollIntervall={500}/>
        </div>
      </div>
    </div>

and replace source code of `main.js` by this :

    /** @jsx React.DOM */
    var React   = require('react');
    var Backbone = require("backbone");

    var BigTab = require('../react_components/BigTab');

    Backbone.history.start();

     React.renderComponent(
     <BigTab id={"42"}/>,
     document.querySelector('BigTab')
     );

and update `index.html` :

Replace

    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <HumanForm/>
        </div>
        <div class="col-md-6">
          <HumansTable pollIntervall={500}/>
        </div>
      </div>
    </div>

By

  <div class="container">
    <BigTab/>
  </div>

That's all

##Backbone generators

- Model and Collection : `yo react-app:bbmc Human` generate `public/modules/models/HumanModel.js` and `public/modules/models/HumansCollection.js`


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

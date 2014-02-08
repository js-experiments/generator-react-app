#generator-react-app

A generator for [Yeoman](http://yeoman.io).

What can i do with it ?

- generate single page application with [React](http://facebook.github.io/react/index.html), jQuery and Bootstrap.
- generate Mongoose + Express project
- generate some React components (some linked to data source) (more to come)


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

Type `yo react-app:form HumanForm div Human` (where `HumanForm` is the React component Name, `div` the container tag, `Human` the associated model)

    [?] model name (ie: Book) Human
    [?] fields (for UI) (ie : title, author)? firstName, lastName
    [?] url? humans

- Fill the Model name (keep default value)
- Fill the fields (same as Mongoose Schema)
- Fill url (keep default value)

1 new file is generated :

    create public/js/components/HumanForm.js

####2-create humans data table

Type `yo react-app:table HumansTable div Human`

    [?] model name (ie: Book) Human
    [?] fields (for UI) (ie : title, author)? firstName, lastName
    [?] url? humans

1 new file is generated :

    create public/js/components/HumansTable.js

####3-integrate our 2 components

Open `public/js/application/Application.js` and replace content with this :

    /** @jsx React.DOM */
    $(function() {
       React.renderComponent(
         <HumanForm id="human-form"/>,
         document.querySelector('.humanform')
       );

      React.renderComponent(
        <HumansTable pollInterval={500} id="humans-table"/>,
        document.querySelector('.humanstable')
      );
    });

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
        <div class="col-md-6 humanform">
        </div>
        <div class="col-md-6 humanstable">
        </div>
      </div>
    </div>

You can now re-start `node app.js`. That's All!

##Other sub generators

- List : `yo react-app:list HumansList div Human` create a list(`<ul></ul>`) linked to Human data
- Tab : `yo react-app:tab ApplicationTab div` create a "Bootstrap" Tab (and tab panes) inside a container (ie:`div`)
- Shell : `yo react-app:shell MyComponent div` create a React Component skeleton
- **more to come** ... WIP

**Remark**: all components are generated to the `public/js/components` directory. Each time, `public/js/components/all.components.js` file is automatically updated (to load components)

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
          <div id={this.props.id}>
            {this.state.content}
          </div>
        );
      }
    });

####Use MyComponent :

    /*--- javascript side ---*/
    React.renderComponent(
      <MyComponent id={something}/>,
      document.querySelector('.mycomponent')
    );

    <!-- html side -->
    <div class="mycomponent"></div>

###Put components inside Tab component

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

and replace source code of `Application.js` by this :

    /** @jsx React.DOM */
    $(function() {
      React.renderComponent(
        <ApplicationTab id="my-tab"/>,
        document.querySelector('.applicationtab')
      );
    });

and update `index.html` :

Replace

    <div class="container">
      <div class="row">
        <div class="col-md-6 humanform">
        </div>
        <div class="col-md-6 humanstable">
        </div>
      </div>
    </div>

By

    <div class="container">
      <div class="row applicationtab">
      </div>
    </div>

That's all

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

# Student Selector

This small app is a mobile-responsive single-page application that allows instructors to press a button and select a student to call upon in class.

![screenshot](https://user-images.githubusercontent.com/4055501/43234147-06776f8a-9040-11e8-8333-b73a853400a0.png){:height="300px" border="1px solid black"}

**Editing student names**: You can edit students' names by modifying the array in `/app/fixtures/students.js`.

**Editing colors**: This app was built at the University of Kansas and uses [the university's official color palette](http://brand.ku.edu/guidelines/color). This includes three colors that are defined by the variables:
- `@darkPrimaryColor: @kuBlue;`
- `@buttonBackgroundColor: @darkPrimaryColor;`
- `@buttonForegroundColor: @jayhawkYellow;`
- `@buttonBorderColor: @crimson;`

You should only have to edit the three colors at the top of the `app.less` file in order to restyle the application for your respective university.

## Deploying to Heroku

This app is hosted on Heroku for ease and portability. In order to enable Heroku to recognize this app as an Ember application and not a Node.js application, visit [this link](https://github.com/heroku/heroku-buildpack-emberjs#usage), provided by Heroku, and follow the instructions under the Usage heading.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd student-selector`
* `npm install`

## Running / Development

* `ember serve` or `ember s`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

:-D

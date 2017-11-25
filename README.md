# Project Man

A project manager web app using Angular and Firebase

## UI Dependencies and sources
 - [Flaticon Architeture Pack](https://www.flaticon.com/packs/architecture-2)
 - [Bulma CSS Framework](https://bulma.io/documentation/overview/start/)

 ### Bulma Compatibility Issue
 Seems that Bulma CSS framework has a incompatibility when using Angular Compiler version 4.3 and up ,already reported accordingly [issue #1190](https://github.com/jgthms/bulma/issues/1190). This incompatibility happens due to changes at postCSS configurations in Angular CLI in these version and a specific feature in Bulma. To fix this, I'm importing these files mannually via SASS and commenting the affected feature into the sass source file, as suggegested by some users in the already mentioned issue.
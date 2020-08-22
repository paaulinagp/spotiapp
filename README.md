# Spotiapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Usage
Postman must be opened and a call must be made to the endpoint 
`https://accounts.spotify.com/api/token` with `POST method` and send the following body:

NOTE: The `client_id` and `client_secret` are in [Spotify for developers](https://developer.spotify.com/)

```
grant_type: 'client_credentials',
client_id: 'client_id',
client_secret: 'client_secret'
```

Then you have to modify the token that is generated in the SpotifyService service.

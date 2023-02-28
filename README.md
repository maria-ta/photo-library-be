# PhotoLibrary BE App

PhotoLibrary server test app which serves as a proxy to Unsplash API for [PhotoLibrary FE App](https://github.com/angular/angular-cli).

## Environment variables

Set following environment variables to get an access to Unsplash API:

```
UNSPLASH_API="<API location>"
UNSPLASH_APP_NAME="<your app name>"
UNSPLASH_ACCESS_KEY="<your access key>"
```

The app will throw an error when no values specified.

Set PORT variable to specify port to run the app (default `3000`);

## Build

Run `npm run start` to start the app.

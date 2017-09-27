# TurfAnalytics

## Deployed at

https://turfanalytics.herokuapp.com

## Description

TurfAnalytics is a Football Odds analytics web app. Using TurfAnalytics you can view Football Odds data from vegas compared to a betting model to determine if you should bet a certain game.


## To start from codebase
```
yarn install
createdb TurfAnalytics
create a secrets.js with keys for:
 * process.env.GOOGLE_CLIENT_ID
 * process.env.GOOGLE_CLIENT_SECRET
 * process.env.GOOGLE_CALLBACK
yarn seed
yarn start-dev
```

## To test
```
yarn install
createdb TurfAnalytics-test
yarn test
```

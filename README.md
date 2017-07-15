# myfutz

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku CLI](https://cli.heroku.com/) installed.

```sh
$ git clone git@github.com:norrebronx/myfutz.git # or clone your own fork
$ cd myfutz
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

```
$ heroku create
$ heroku addons:create sendgrid:starter
$ heroku config:set SENDGRID_API_KEY=xxxx_api_key_xxxx
$ heroku addons:create redistogo
$ heroku config:set SENDGRID_FROM=email@from.com
$ git push heroku master
$ heroku open
```



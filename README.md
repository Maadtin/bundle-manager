## Required stack:

- NodeJS >= 14
- PHP >= 7.4
- Composer >= 2
- MySQL => 5.7

## Backend setup

Any local web server can be used ([XAMPP](https://www.apachefriends.org/es/index.html),
[WampServer](https://www.wampserver.com/en/),
[Laragon](https://laragon.org/)) I prefer laragon

### Steps

- cd into the `back` folder and run `composer install`
- copy the `.env.example` and name it `.env` then fill up the variables with blank value.


## Frontend setup

### Steps

- cd into the `front` folder and run `npm install`
- copy the `.env.example` and name it `.env` then fill up the `VITE_API_URL` with the full domain of your backend.
- run `npm run dev` to boot up the dev server.


## DB Setup

### Steps

- Run the [sql file](back/bundle_manager.sql) with the mysql schema to create the db estructure

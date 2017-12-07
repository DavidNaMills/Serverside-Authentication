# Server-side authentication template

A basic express back end with authentication.
3 end points are provided to handle:
* signup
* signin
* an example protected route

Uses the Local Strategy.
Once user has signed in or signed up, a JWT token is provided.


### Prerequisites

Requires an open MongoDB connection.
To be used with a Front end such as: https://github.com/DavidNaMills/Serverside-Authentication


## testing

This code has not been tested, therefore unsuitable for production at this stage.


## Built With

* Express
* Passport
* MongoDB


## Future Improvements

* Fully test the database, routes, and authentication to production standard
* Breakout error messages to separate file to ensure reusability
* Breakout system specific settings such as Port, Database URL... to separate file to ensure reusability
* Enable other databases to be plugged in 


## Authors

* **David Mills** [DavidNaMills](https://github.com/DavidNaMills/)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
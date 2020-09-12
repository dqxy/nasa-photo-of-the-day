# Module Project: Component Side Effects- NASA APOD

This project consumes the NASA API to fetch the "Astronomy Photo Of The Day" or APOD. A few components  will render different pieces of data in the interface. 


## Project Set Up

---

This project was put together using create-react-app (CRA). Follow the steps below to setup the project with the proper dependencies.

- [ ] In `App.js` (or where ever you wanted to fetch the data) add state for the data you'll be getting from NASA.
- [ ] Add an effect hook to handle the API call side effect.
- [ ] Go to the [NASA APOD API docs](https://api.nasa.gov/#apod) and read through the docs to see how to make the API call.
- [ ] You don't _need_ an API key. However you may need one if you exceed the API request limits.
- [ ] Using the endpoint given, fetch the data using `axios`.
- [ ] In your `.then()` make sure to `console.log` the response so you can look at the shape of the data. 
- [ ] Before you add your data to state, make sure your effect hook has a dependency array (probably empty, since we don't want this effect synced up to any state/props), otherwise you will start an **infinite loop, and you will exceed the API rate limits of the DEMO_KEY and need to use a real API_KEY.**

DEMO KEY rate limits:

> Hourly Limit: 30 requests per IP address per hour

> Daily Limit: 50 requests per IP address per day

_Note: if the photo url is NOT a photo, you will need to learn how to display a video in a React app on your own, OR just fetch the APOD from a different date by adding this to the back of the API endpoint: `&date=2012-03-14`_

**Adding the Data to State**

- [ ] Once you have made the call correctly, and logged the data, add the data to the state property you built.

**Display the Data**

Now is the time to build out your other components. Compose your UI, and then pass the data to your children components via props so you can render it on the DOM.

## Pro Tips:

- You may run into an error where your components try to access object properties before your data is finished being fetched - ie. `Cannot read property 'url' of undefined`. This means that the data you passed as props is undefined, when you were expecting it to be an object. You can fix this by simply adding something like this to any component that needs to read data from your state object:

```js
// Display a loading message while the data is fetching
if (!props.photoOfTheDay) return <h3>Loading...</h3>;

// Display your component as normal after the data has been fetched
return (
  {* your normal JSX here *}
);
```

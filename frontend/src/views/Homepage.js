import React from 'react'

function Homepage() {
  return (
    <div>
      <>
  <main role="madin" style={{ marginTop: 50 }}>
    {/* Main jumbotron for a primary marketing message or call to action */}
    <div className="jumbotron">
      <div className="container">
        <h1 className="display-3">Welcome to Uber Eats</h1>
        <p>
        Your favorite meals delivered fast at your door
        </p>
        <p>
          <a className="btn btn-primary btn-lg" href="#" role="button">
            Learn more »
          </a>
        </p>
      </div>
    </div>
    <div className="container">
      {/* Example row of columns */}
      <div className="row">
        <div className="col-md-4">
          <h2>About Our Service</h2>
          <p>
          Our service provides a convenient way to enjoy meals from your favorite restaurants without leaving home. We partner with a variety of restaurants to offer a wide range of options, from fast food to fine dining.{" "}
          </p>
          <p>
            <a className="btn btn-secondary" href="#" role="button">
              View details »
            </a>
          </p>
        </div>
        <div className="col-md-4">
          <h2>How it Works</h2>
          <p>
          Simply enter your location, browse through the list of available restaurants or search by cuisine type, and choose your meal. Place your order and pay online, and our delivery partner will bring your order straight to your door.{" "}
          </p>
          <p>
            <a className="btn btn-secondary" href="#" role="button">
              View details »
            </a>
          </p>
        </div>
        <div className="col-md-4">
          <h2>Browse Restaurants</h2>
          <p>
          Heck out our comprehensive list of partnered restaurants where you can view menus and read reviews from other customers. Choose from hundreds of different cuisines and find exactly what you're craving.
          </p>
          <p>
            <a className="btn btn-secondary" href="#" role="button">
              View details »
            </a>
          </p>
        </div>
      </div>
      <hr />
    </div>{" "}
    {/* /container */}
  </main>
  <footer className="container">
    <p>© Company 2024</p>
  </footer>
</>

    </div>
  )
}

export default Homepage
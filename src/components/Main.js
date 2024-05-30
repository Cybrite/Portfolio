export function Main() {
  return (
    <>
      <h3 className="py-6 mt-2 text-3xl text-center">Check out my projects!</h3>
      <div className="grid grid-rows-4 h-min-48 w-100% gap-2">
        <div className="transition duration-200 ease-in card hover:scale-95">
          <h2 className="mb-4 text-xl font-semibold">Weather</h2>
          <p className="mb-4 text-gray-600">
            A project made using Vanilla Javascript and pure CSS, HTML, project
            uses openWeatherAPI to forcast the weather of the location you
            search.
          </p>
          <div className="flex items-center space-x-2">
            <span className="text-green-500">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 13l4 4L19 7"></path>
              </svg>
            </span>
            <p className="text-sm text-gray-500">
              Check out the project-code on Github:
              <a
                href="https://github.com/Cybrite/weather-"
                target="_blank"
                className="text-underline"
                rel="noreferrer"
              >
                <b>Here</b>
              </a>
            </p>
          </div>
        </div>

        <div className="transition duration-200 ease-in card hover:scale-95">
          <h2 className="mb-4 text-xl font-semibold">eat-n-split</h2>
          <p className="mb-4 text-gray-600">
            A project made using React.js and pure CSS, project helps you add
            friends and individually split bills with them.
          </p>
          <div className="flex items-center space-x-2">
            <span className="text-green-500">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 13l4 4L19 7"></path>
              </svg>
            </span>
            <p className="text-sm text-gray-500">
              Check out the project :
              <a
                href="http://Cybrite.github.io/eat-n-split"
                target="_blank"
                className="text-underline"
                rel="noreferrer"
              >
                <b>Here</b>
              </a>
            </p>
          </div>
        </div>
        <div className="transition duration-200 ease-in card hover:scale-95">
          <h2 className="mb-4 text-xl font-semibold">Travel-List</h2>
          <p className="mb-4 text-gray-600">
            A project made using React.js and pure CSS, a basic list making
            application that helps you create a list and it has sorting features
            to use when you have large amount of items in your list.
          </p>
          <div className="flex items-center space-x-2">
            <span className="text-green-500">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 13l4 4L19 7"></path>
              </svg>
            </span>
            <p className="text-sm text-gray-500">
              Check out the project :
              <a
                href="http://Cybrite.github.io/Travel-list"
                target="_blank"
                rel="noreferrer"
              >
                <b>Here</b>
              </a>
            </p>
          </div>
        </div>

        <div className="transition duration-200 ease-in card hover:scale-95">
          <h2 className="mb-4 text-xl font-semibold">To-Do List</h2>
          <p className="mb-4 text-gray-600">
            A list making application build using React.js.
          </p>
          <div className="flex items-center space-x-2">
            <span className="text-green-500">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 13l4 4L19 7"></path>
              </svg>
            </span>
            <p className="text-sm text-gray-500">
              Check out the project :
              <a
                href="http://Cybrite.github.io/To-Do"
                target="_blank"
                className="text-underline"
                rel="noreferrer"
              >
                <b>Here</b>
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-2">
        <h4 className="text-center">
          To see more of my projects checkOut my
          <a href="https://github.com/Cybrite" target="_blank" rel="noreferrer">
            <b> Github</b>
          </a>
        </h4>
      </div>
    </>
  );
}

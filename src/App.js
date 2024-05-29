import { trefoil } from "ldrs";

trefoil.register();

export default function App() {
  return (
    <div className="font-His">
      <Heading />
      <Start />
      <Intro />
      <About />
      <Main />
    </div>
  );
}

function Heading() {
  return (
    <>
      <div className="flex justify-center mt-3 text-4xl font-semibold animate-[fadeIn_1s_linear]">
        <l-trefoil
          size="40"
          stroke="4"
          stroke-length="0.15"
          bg-opacity="0.1"
          speed="1.4"
          color="black"
        ></l-trefoil>
        <p className="m-3">Welcome</p>
        <l-trefoil
          size="40"
          stroke="4"
          stroke-length="0.15"
          bg-opacity="0.1"
          speed="1.4"
          color="black"
        ></l-trefoil>
        <br></br>
      </div>
      <div className="text-center animate-fadeIn">
        <i className="text-l">To the stars, Through Hardships!</i>
      </div>
    </>
  );
}

function Start() {
  return (
    <div className="grid grid-rows-2 card">
      <div className="animate-fadeIn">
        <h4 className="text-2xl text-center text-black">Hi , I am Harsh!</h4>
        <h4 className="mt-4 text-2xl text-center text-black">
          Developer &bull; Poet
        </h4>

        <h2 className="mt-4 text-sm text-center text-black ">
          Reach out to me on;
        </h2>
      </div>

      <div className="flex mt-6 text-base justify-evenly">
        <div>
          <a href="https://github.com/Cybrite" target="_blank" rel="noreferrer">
            <svg
              className="transition duration-200 ease-out cursor-pointer hover:scale-110"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 30 30"
            >
              <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
            </svg>
          </a>
        </div>
        <div>
          <a href="3">
            <svg
              className="transition duration-200 ease-out cursor-pointer hover:scale-110"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 50 50"
            >
              <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
            </svg>
          </a>
        </div>
        Sybrite, [29-05-2024 21:59]
        <div>
          <a
            href="https://www.instagram.com/harsh_krv?igsh=MTl5OWh4dDRpY3lvMA=="
            traget="_blank"
          >
            <svg
              className="transition duration-200 ease-out cursor-pointer hover:scale-110"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 50 50"
            >
              <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
            </svg>
          </a>
        </div>
        <div>
          <a
            href="https://www.reddit.com/u/Cylber/s/teYnb5FKpy"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              className="transition duration-200 ease-out cursor-pointer hover:scale-110"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 50 50"
            >
              <path d="M 29 3 C 26.896 3 24.427687 4.636625 24.054688 12.015625 C 24.368687 12.007625 24.682 12 25 12 C 25.353 12 25.701781 12.007578 26.050781 12.017578 C 26.288781 7.5845781 27.354 5 29 5 C 29.703 5 30.091938 5.3873594 30.835938 6.1933594 C 31.702938 7.1333594 32.843547 8.3378281 35.060547 8.7988281 C 35.024547 8.5368281 35 8.271 35 8 C 35 7.578 35.045906 7.1665312 35.128906 6.7695312 C 33.753906 6.3935312 33.015688 5.6088906 32.304688 4.8378906 C 31.510687 3.9768906 30.61 3 29 3 z M 41 4 C 38.794 4 37 5.795 37 8 C 37 10.205 38.794 12 41 12 C 43.206 12 45 10.205 45 8 C 45 5.795 43.206 4 41 4 z M 25 14 C 12.869 14 3 20.178 3 29 C 3 37.822 12.869 45 25 45 C 37.131 45 47 37.822 47 29 C 47 20.178 37.131 14 25 14 z M 7.5 14.949219 C 6.04 14.949219 4.65275 15.53375 3.59375 16.59375 C 1.87175 18.31575 1.5247656 20.797656 2.5097656 22.847656 C 4.0197656 19.920656 6.5990781 17.423453 9.9550781 15.564453 C 9.1930781 15.177453 8.365 14.949219 7.5 14.949219 z M 42.5 14.949219 C 41.635 14.949219 40.805922 15.177453 40.044922 15.564453 C 43.399922 17.423453 45.980234 19.920656 47.490234 22.847656 C 48.475234 20.796656 48.12825 18.31575 46.40625 16.59375 C 45.34625 15.53375 43.96 14.949219 42.5 14.949219 z M 17 23 C 18.657 23 20 24.343 20 26 C 20 27.656 18.657 29 17 29 C 15.343 29 14 27.656 14 26 C 14 24.343 15.343 23 17 23 z M 33 23 C 34.656 23 36 24.343 36 26 C 36 27.656 34.656 29 33 29 C 31.344 29 30 27.656 30 26 C 30 24.343 31.344 23 33 23 z M 16.070312 34.013672 C 16.321562 34.057047 16.557297 34.195922 16.716797 34.419922 C 16.823797 34.568922 19.167 37.699219 25 37.699219 C 30.912 37.699219 33.25925 34.458781 33.28125 34.425781 C 33.59725 33.974781 34.223781 33.862641 34.675781 34.181641 C 35.126781 34.498641 35.234969 35.122219 34.917969 35.574219 C 34.799969 35.742219 31.939 39.699219 25 39.699219 C 18.06 39.699219 15.200031 35.742219 15.082031 35.574219 C 14.765031 35.122219 14.874172 34.499641 15.326172 34.181641 C 15.551672 34.023141 15.819063 33.970297 16.070312 34.013672 z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

function Intro() {
  return (
    <div className="card w-100%">
      <article>
        <p className="mb-2 text-sm text-center font-His">
          <em>This portfolio is made using React.js and Tailwind CSS.</em>
        </p>
        <p>
          if i talk about Myself a passionate web developer with a flair for
          creativity. My journey began with <b> Python</b> basics, shifting to
          <b> C++</b>, later diving into web development with
          <b> HTML,CSS & vanilla Javascript</b>. I'm currently mastering{" "}
          <b>React.js</b> with <b>Tailwind</b>. I thrive on turning ideas into
          polished code. Let’s connect and bring your vision to life!
        </p>
      </article>
    </div>
  );
}

function About() {
  return (
    <>
      <div className="w-100% mt-4"></div>
      <div className="text-center card">
        <p>I am currently at;</p>
        <ul className="list-none">
          <li>
            <p className="font-semibold">
              National Institue of Technology (NIT),Rourkela-769005
            </p>
          </li>
          <li>
            {" "}
            Enrolled in Bachelor of Technology (B.Tech.) in Chemical Engineering
            (2023-27){" "}
          </li>
        </ul>
      </div>
    </>
  );
}

function Main() {
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

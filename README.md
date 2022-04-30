# Dynamic Form (React with Redux)

This project is written as a Client-Side Rendering and based on React and Redux(Thunk) frontend libraries with Typescript. The project has been implemented using [Create-React-App typescript](https://create-react-app.dev/docs/adding-typescript/) boilerplate. Further, [React test library](https://testing-library.com/docs/react-testing-library/intro/) with Jest is being used for the TDDs, and [Material-UI] (https://mui.com/) is also being used as the stylings.

![](https://github.com/sameera9th/dynamic-forms/blob/main/readme-assets/demo.gif?raw=true)
## Requisites
* npm >= 8.5.0 or Yarn >= 1.22.10
* NodeJS >= v16.14.2

## Quick Reference
* React Dev Server -- You can find the React application here (`dynamic-forms/src`)
    * http://localhost:3000*
## File Structure
This is not an exhaustive list, just some worth noting
```
+-- /dynamic-forms                  : React application
|   +-- /public                     : React public assets
|   +-- /src                        : React app source
|       +-- /__mock__               : Mock data
|       +-- /components             : UI components
|       +-- /interfaces             : Interfaces realted to form fields
|       +-- /pages                  : Pages (Container components)
|       +-- /redux                  : Redux files
|           +-- /actions            : Action files
|           +-- /reducers           : Reducer files
|           +-- /types              : Action types
|           +-- /store.ts           : Redux store configuration file
|       +-- /services               : API calls with endpoints
|       +-- /utils                  : Utility methods and helpers
|       +-- /App.tsx                : App file [source code]
|       +-- /index.tsx              : App initiate file
|       +-- /jest.config.js         : Jest tests setup
|   +-- /package.json               : App dependencies
|   +-- /tsconfig.json              : Typescript configurations
```
### Starting React Application

> **First** - move to `/dynamic-forms`, first you need to intall dependencies using `npm install` or `yarn install` then you can start the dev server using `npm start` or `yarn start`. The default port for the react application is 3000, you can check if the application started successfully visiting `http://localhost:3000`

> **Note**: A proxy has been added as a fix for the CORS issue that getting from the endpoint `https://ansible-template-engine.herokuapp.com/form`. You might need to allow it once before using it.

### Run tests

Move to `/dynamic-forms`, and you need to intall dependencies using `npm install` or `yarn install` then you can run the tests using `npm run test`. Please note that all the tests are there with the respective ts/tsx files with `file.test.ts or file.test.tsx`.

### Run Coverage
![](https://github.com/sameera9th/dynamic-forms/blob/main/readme-assets/test-coverage.png?raw=true)

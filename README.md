# React-Vite-Goole-Firebase-Auth

Welcome to a spectacular blend of React, Vite, and Firebase. Login seamlessly with Google, explore your well-crafted profile, and sign out with a simple click.

## Setup

Follow these steps to set up the project:

### Step 1: Clone the repository and install dependencies

Clone this repository to your local machine and navigate into its directory:

git clone ...
cd your-repo-name
npm install

### Step 2: Firebase Account

First, you need to create a Firebase account if you don't already have one. Visit the [Firebase website](https://firebase.google.com/) and follow the sign-up process.

### Step 3: Firebase Project

Once you have your account set up, create a new project in Firebase. After your project is ready, go to Project settings > General and scroll down to 'Your apps' to register a new web application.

### Step 4: Firebase SDK

After you've registered your app, you'll see a Firebase SDK snippet that looks something like this:

```javascript
var firebaseConfig = {
apiKey: "AIza...",
authDomain: "...firebaseapp.com",
projectId: "...",
storageBucket: "...appspot.com",
messagingSenderId: "...",
appId: "...",
measurementId: "G-..."
};
```

You have two options:
Copy this config object to the src/firebase.js to replace the similar part (This will work but if you want to push it to github or want to use in the production it is not recommended for security reasons) .

Other option is that you can create a .env file In the root of your project directory, create a new file named .env. In this file, you'll need to define the following environment variables:

```javscript
VITE_APP_API_KEY=apiKeyFromFirebaseSDK
VITE_APP_AUTH_DOMAIN=authDomainFromFirebaseSDK
VITE_APP_PROJECT_ID=projectIdFromFirebaseSDK
VITE_APP_STORAGE_BUCKET=storageBucketFromFirebaseSDK
VITE_APP_MESSAGING_SENDER_ID=messagingSenderIdFromFirebaseSDK
VITE_APP_APP_ID=appIdFromFirebaseSDK
VITE_APP_MEASUREMENT_ID=measurementIdFromFirebaseSDK
```

Now you're all set! Enjoy your exploration into this React-Vite-Firebase odyssey.

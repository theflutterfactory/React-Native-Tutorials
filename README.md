# Coding with Curry - React Native
Welcome to the React Native repo for Coding with Curry. Topics Covered are added to their own branches and will be updated periodically as needed.

## Topics / Branches
* [AsyncStorage](https://github.com/JulianCurrie/CwC_React_Native/tree/async_storage)
* [Hooks & Context](https://github.com/JulianCurrie/CwC_React_Native/tree/context_api_demo)
* [Firebase](https://github.com/JulianCurrie/CwC_React_Native/tree/firebase_basics)
* [React Native Maps](https://github.com/JulianCurrie/CwC_React_Native/tree/react-native-maps_example)
* [Redux](https://github.com/JulianCurrie/CwC_React_Native/tree/redux_tutorial)
* [React Navigation (v5)](https://github.com/JulianCurrie/CwC_React_Native/tree/react_navigation_v5)

## Prerequisites
Knowledge of fundamental programming concepts is required. These include things like conditional statements, loops, lists manipulation, etc. I won't be covering general programming concepts so some programming experience is expected.

## Installing (Using a terminal)
1. Copy the repo to your local machine with 'git clone https://github.com/JulianCurrie/CwC_React_Native.git'
2. cd into the top level folder
3. Make sure you have the Metro bundler running with 'react-native start'
4. **iOS**: On a mac, run the app in a simulator with 'react-native run-ios --simulator="YOUR DEVICE NAME". You may have to set up a new device in Xcode.
5. **Android**: Make sure your Android Home path is setup correctly and run the app in the emulator with 'react native run-android'
  *export ANDROID_HOME=/Library/Android/sdk (or wherever your sdk is located)
  *export PATH=$PATH:$ANDROID_HOME/tools 
  *export PATH=$PATH:$ANDROID_HOME/platform-tools

You will probably get errors switching between branches. Make sure you run these commands before running the code:
* Install project packages in the top level folder with 'npm install' in your terminal
* cd into the 'ios; folder and run 'pod install' in the terminal.
* If you still get package related errors, try deleting the Podfile.lock and/or the package-lock.json file before running the commands above.

## Contributions
You can fork this repo if you wish, but I am not accepting external contributions at this time.

## Authors
* **Julian Currie**

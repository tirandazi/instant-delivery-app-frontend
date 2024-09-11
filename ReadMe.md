# IDA (Instant Delivery App)

## Overview

IDA is an instant delivery app where prospective buyers can place orders for daily-use household goods which can be delivered to their doorstep quickly, thereby providing convenience. This project serves as a learning exercise to explore and practice best practices in using React Native.

## Tech Stack

- **Frontend**: React Native with expo-cli

## Installation

### Prerequisites

- Node.js
- npm or yarn

### Setting Up Development Environments

#### IOS

1. **Install Xcode**:
   - Download and install Xcode from the [Mac App Store](https://apps.apple.com/us/app/xcode/id497799835).

2. **Install Xcode Command Line Tools**:

     ```bash
     brew install --cask xcode
     ```

#### Android

1. **Install Android Studio**:
   - Download and install Android Studio from the [Android Developer website](https://developer.android.com/studio).

2. **Set Up Android SDK**:
   - Open Android Studio, go to **Preferences** > **System Settings** > **Android SDK**, and ensure the following packages are installed:
     - Android SDK Platform-Tools
     - Android SDK Build-Tools
     - Android SDK Tools
     - A recent Android API (e.g., API 30 or higher)

3. **Export PATH**:
    - Add the following to the file ~/.zprofile or ~/.zshrc
    - [Note] If using any other shell, kindly add in the respective file (eg: .bashrc)

    ```bash
    export ANDROID_HOME=$HOME/Library/Android/sdk
    export PATH=$PATH:$ANDROID_HOME/emulator
    export PATH=$PATH:$ANDROID_HOME/platform-tools
    ```

4. **Set Up Android Emulator**:
   - In Android Studio, go to **AVD Manager** (Android Virtual Device Manager) and create a new virtual device.
   - Choose a device definition and a system image (preferably a recent version).

### Project Setup

1. **Install Expo CLI**:

    ```bash
    npm install -g expo-cli
    ```

2. **Clone the repository**:

    ```bash
    git clone https://github.com/tirandazi/instant-delivery-app-frontend.git
    ```

    OR

    ```bash
    git clone git@github.com:tirandazi/instant-delivery-app-frontend.git
    ```

3. **Navigate into the project directory**:

    ```bash
    cd instant-delivery-app-frontend
    ```

4. **Install dependencies**:

    ```bash
    npm install
    ```

    OR

    ```bash
    yarn install
    ```

5. **Start the Expo development server**:

    ```bash
    npm start
    ```

## Usage

Once expo dev server is started, press `a` to open the app on android emulator and press `i` to open the app on IOS emulator

# CONTRIBUTING

Every single contribution matters and makes sense. To contribute to this project, create your updates in a separate branch and create a pull request to this repository.

## Style Guide

### Code conventions

There are certain code conventions to be followed. The linting configuration will catch most of the following code styling issues.

    - Strictly follow ES6 standards
    - Indentation with 2 spaces
    - Only single quotes allowed
    - No inline styles
    - No color literals
    - No unused styles and variables
    - No semicolons
    - JSX single quotes
    - PropTypes is mandatory

**Format:** To make sure the entire project is formatted according to the defined rules,

    npm run format

**Lint Fix:** To view the linting issues all together,

    npm run lint

To fix autofixable issues,

    npm run lint:fix

### Folder Structure

    src/
    ├── components
    │   ├── atoms
    │   │   ├── Tile.atom.js
    │   │   └── ...
    │   ├── molecules
    │   └── organisms
    ├── constants
    │   ├── colors.js
    │   └── styles.js (global styles)
    ├── navigation
    │   └── RootNavigator.js
    └── screens
        ├── HomeScreen.js
        └── ...

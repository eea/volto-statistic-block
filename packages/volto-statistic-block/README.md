# @eeacms/volto-statistic-block

[![Releases](https://img.shields.io/github/v/release/eea/volto-statistic-block)](https://github.com/eea/volto-statistic-block/releases)
[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-statistic-block%2Fmaster&subject=master)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-statistic-block/job/master/display/redirect)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-statistic-block&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-statistic-block)

[Volto](https://github.com/plone/volto) add-on that provides the React Semantic UI [Statistic](https://react.semantic-ui.com/views/statistic) component as a [Block](https://6.docs.plone.org/volto/blocks/)

## Features

See [Statistic Component Storybook](https://eea.github.io/eea-storybook/?path=/story/components-statistic--default).

### Demo (Volto Theme)

![Statistic Block](https://raw.githubusercontent.com/eea/volto-statistic-block/master/docs/volto-statistic-block.gif)

### Demo (EEA Theme)

![Statistic Block](https://raw.githubusercontent.com/eea/volto-statistic-block/master/docs/eea-statistic-block.gif)

## Requirements

### Backend

- [Plone](https://plone.org/download)
- [plone.restapi](https://pypi.org/project/plone.restapi/)

### Frontend

- Node.js: `>=22.0.0`

## Installation

1. Make sure you have a [Plone backend](https://plone.org/download) up-and-running at http://localhost:8080/Plone

   ```Bash
   docker compose up backend
   ```

1. Start Volto frontend

* If you already have a volto project, just update `package.json`:

   ```JSON
   "dependencies": {
       "@eeacms/volto-statistic-block": "*"
   }
   ```

   and `volto.config.js`:

   ```JavaScript
   const addons = ['@eeacms/volto-statistic-block'];
   ```

* If not, create one with Cookieplone, as recommended by the official Plone documentation for Volto 18+:

   ```
   uvx cookieplone project
   cd project-title
   ```

1. Install or update dependencies, then start the project:

   ```
   make install
   ```

   For a Cookieplone project, start the backend and frontend in separate terminals:

   ```
   make backend-start
   make frontend-start
   ```

1. Go to http://localhost:3000

1. Happy editing!

## License

See [LICENSE.md](LICENSE.md) for details.

## Funding

[European Environment Agency (EU)](http://eea.europa.eu)

# volto-statistic-block

[![Releases](https://img.shields.io/github/v/release/eea/volto-statistic-block)](https://github.com/eea/volto-statistic-block/releases)

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-statistic-block%2Fmaster&subject=master)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-statistic-block/job/master/display/redirect)
[![Lines of Code](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-statistic-block&metric=ncloc)](https://sonarqube.eea.europa.eu/dashboard?id=volto-statistic-block)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-statistic-block&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-statistic-block)
[![Bugs](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-statistic-block&metric=bugs)](https://sonarqube.eea.europa.eu/dashboard?id=volto-statistic-block)
[![Duplicated Lines (%)](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-statistic-block&metric=duplicated_lines_density)](https://sonarqube.eea.europa.eu/dashboard?id=volto-statistic-block)

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-statistic-block%2Fdevelop&subject=develop)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-statistic-block/job/develop/display/redirect)
[![Lines of Code](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-statistic-block&branch=develop&metric=ncloc)](https://sonarqube.eea.europa.eu/dashboard?id=volto-statistic-block&branch=develop)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-statistic-block&branch=develop&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-statistic-block&branch=develop)
[![Bugs](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-statistic-block&branch=develop&metric=bugs)](https://sonarqube.eea.europa.eu/dashboard?id=volto-statistic-block&branch=develop)
[![Duplicated Lines (%)](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-statistic-block&branch=develop&metric=duplicated_lines_density)](https://sonarqube.eea.europa.eu/dashboard?id=volto-statistic-block&branch=develop)

[Volto](https://github.com/plone/volto) add-on that provides the React Semantic UI [Statistic](https://react.semantic-ui.com/views/statistic) component as a [Block](https://6.docs.plone.org/volto/blocks/)

## Features

See [Statistic Component Storybook](https://eea.github.io/eea-storybook/?path=/story/components-statistic--default).

### Demo (Volto Theme)


![Statistic Block](https://raw.githubusercontent.com/eea/volto-statistic-block/master/docs/volto-statistic-block.gif)

### Demo (EEA Theme)

![Statistic Block](https://raw.githubusercontent.com/eea/volto-statistic-block/master/docs/eea-statistic-block.gif)

## Getting started

### Try volto-statistic-block with Docker

      git clone https://github.com/eea/volto-statistic-block.git
      cd volto-statistic-block
      make
      make start

Go to http://localhost:3000

`make start` now defaults to Volto 18. To run the same setup against Volto 17, use:

      VOLTO_VERSION=17 make
      VOLTO_VERSION=17 make start

### Add volto-statistic-block to your Volto project

1. Make sure you have a [Plone backend](https://plone.org/download) up-and-running at http://localhost:8080/Plone

   ```Bash
   docker compose up backend
   ```

1. Start Volto frontend

* If you already have a volto project, just update `package.json`:

   ```JSON
   "addons": [
       "@eeacms/volto-statistic-block"
   ],

   "dependencies": {
       "@eeacms/volto-statistic-block": "*"
   }
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

   For a legacy Volto 17 project, install the package with `yarn` and restart the frontend as usual.

1. Go to http://localhost:3000

1. Happy editing!

## Release

See [RELEASE.md](https://github.com/eea/volto-statistic-block/blob/master/RELEASE.md).

## How to contribute

See [DEVELOP.md](https://github.com/eea/volto-statistic-block/blob/master/DEVELOP.md).

## Copyright and license

The Initial Owner of the Original Code is European Environment Agency (EEA).
All Rights Reserved.

See [LICENSE.md](https://github.com/eea/volto-statistic-block/blob/master/LICENSE.md) for details.

## Funding

[European Environment Agency (EU)](http://eea.europa.eu)

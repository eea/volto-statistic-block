# volto-statistic-block

[![Releases](https://img.shields.io/github/v/release/eea/volto-statistic-block)](https://github.com/eea/volto-statistic-block/releases)

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-statistic-block%2Fmaster&subject=master)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-statistic-block/job/master/display/redirect)
[![Lines of Code](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-statistic-block-master&metric=ncloc)](https://sonarqube.eea.europa.eu/dashboard?id=volto-statistic-block-master)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-statistic-block-master&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-statistic-block-master)
[![Bugs](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-statistic-block-master&metric=bugs)](https://sonarqube.eea.europa.eu/dashboard?id=volto-statistic-block-master)
[![Duplicated Lines (%)](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-statistic-block-master&metric=duplicated_lines_density)](https://sonarqube.eea.europa.eu/dashboard?id=volto-statistic-block-master)

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-statistic-block%2Fdevelop&subject=develop)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-statistic-block/job/develop/display/redirect)
[![Lines of Code](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-statistic-block-develop&metric=ncloc)](https://sonarqube.eea.europa.eu/dashboard?id=volto-statistic-block-develop)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-statistic-block-develop&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-statistic-block-develop)
[![Bugs](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-statistic-block-develop&metric=bugs)](https://sonarqube.eea.europa.eu/dashboard?id=volto-statistic-block-develop)
[![Duplicated Lines (%)](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-statistic-block-develop&metric=duplicated_lines_density)](https://sonarqube.eea.europa.eu/dashboard?id=volto-statistic-block-develop)

[Volto](https://github.com/plone/volto) add-on that provides the React Semantic UI [Statistic](https://react.semantic-ui.com/views/statistic) component as a [Block](https://6.docs.plone.org/volto/blocks/)

## Features

See [Statistic Component Storybook](https://eea.github.io/eea-storybook/?path=/story/components-statistic--default).

### Demo (Volto Theme)


![Statistic Block](https://raw.githubusercontent.com/eea/volto-statistic-block/master/docs/docs/volto-statistic-block.gif)

### Demo (EEA Theme)

![Statistic Block](https://raw.githubusercontent.com/eea/volto-statistic-block/master/docs/eea-statistic-block.gif)

## Getting started

### Try volto-statistic-block with Docker

      git clone https://github.com/eea/volto-statistic-block.git
      cd volto-statistic-block
      make
      make start

Go to http://localhost:3000

### Add volto-statistic-block to your Volto project

1. Make sure you have a [Plone backend](https://plone.org/download) up-and-running at http://localhost:8080/Plone

   ```Bash
   docker compose up backend
   ```

1. Start Volto frontend

- If you already have a volto project, just update `package.json`:

  ```JSON
  "addons": [
      "@eeacms/volto-statistic-block"
  ],

  "dependencies": {
      "@eeacms/volto-statistic-block": "*"
  }
  ```

- If not, create one:

  ```
  npm install -g yo @plone/generator-volto
  yo @plone/volto my-volto-project --addon @eeacms/volto-statistic-block
  cd my-volto-project
  ```

1. Install new add-ons and restart Volto:

   ```
   yarn
   yarn start
   ```

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

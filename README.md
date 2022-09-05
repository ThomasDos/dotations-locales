## Dotations Locales App

Bienvenue sur `dotations-locales-app`, l'interface web de [dotations.incubateur.anct.gouv.fr](http://dotations.incubateur.anct.gouv.fr) !

### Installation

`dotations-locales-app` s'appuie sur le framework [Next.js](https://nextjs.org).

#### Installation de l'environnement de l'environnement de développement

Pour `Next.js` et le gestionnaire de dépendances, installer l'interpréteur JavaScript Node.js suivant les instructions de sa [documentation officielle](https://nodejs.org/fr/).

#### Installation du gestionnaire de dépendances Yarn

Vous pouvez installer les dépendances de ce dépôt avec le gestionnaire de dépendances [Yarn v2+](https://yarnpkg.com).  

Vous retrouverez les étapes d'installation de Yarn et de ses propres dépendances est dans sa [documentation officielle](https://yarnpkg.com/getting-started/install).

> Nous conseillons l'emploi de Node.js dans sa version LTS (long-term support, soit à date, la version 16.17.0 ou supérieure).

#### Installation de dotations-locales-app

Dans un terminal shell et dans le répertoire `dotations-locales-app/`, installer les dépendances avec la commande suivante :

```shell
yarn
```

Celle-ci doit s'achever sans erreur.

### Démarrer l'application en mode développement

En local et dans le répertoire `dotations-locales-app/`, exécuter le code en mode développement avec la commande suivante :

```shell
yarn dev
```

L'application est alors disponible dans un navigateur à l'adresse indiquée dans le terminal (http://localhost:3000).

Pour les données et les calculs de dotations, celle-ci fait appel à l'API web Dotations Locales dont le code source est disponible sur [dotations-locales-back](https://gitlab.com/incubateur-territoires/startups/dotations-locales/dotations-locales-back).

🎉 Bravo, vous êtes maintenant prêt à utiliser et contribuer à `dotations-locales-app` !

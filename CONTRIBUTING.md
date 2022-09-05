
# Contribuer à dotations-locales-app

Merci de votre volonté de contribuer à l'interface web `dotations-locales-app` !

Afin de faciliter la lisibilité et l'amélioration continue de `dotations-locales-app`, les contributions suivent certaines règles présentées par cette documentation.

## Messages de commits

### Langue(s)

Les termes métier qui figurent dans les messages de commits sont en Français.  
Les termes techniques et, de façon générale les éléments qui ont trait à la mécanique de code, sont en Anglais. 

### Structure

> Ce qui suit suppose que vous avez déjà suivi les instructions d'installation décrites dans le `./README.md`.

Les messages de commits sont structurés par la librairie [git-cz](https://www.npmjs.com/package/git-cz) (se rapprochant ainsi de la [spécification Conventional Commits](https://www.conventionalcommits.org)).

Après référencement des éléments à commiter, rédiger un message de commit en pas à pas avec la commande suivante :

```shell
yarn git-cz
```

Ou, lorsque la branche distante a déjà été créée, utiliser le raccourci `yarn git` défini dans les `scripts` du fichier `./package.json`. 

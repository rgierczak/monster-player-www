'use strict';

import PlayerDirective from './directives/player.es6';

let moduleName = 'Player';
let moduleDependencies = [];

angular.module(moduleName, moduleDependencies)
    .directive('player', PlayerDirective);

export default moduleName;

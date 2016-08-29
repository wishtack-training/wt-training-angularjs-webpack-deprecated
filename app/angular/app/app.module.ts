/**
 *
 * (c) 2013-2016 Wishtack
 *
 * $Id: $
 */


import * as angular from 'angular';
import {UserSelectorComponent} from './user-selector/user-selector.component';
export const appModule = angular.module('app', []);

appModule.component(UserSelectorComponent.config.name, UserSelectorComponent.config);

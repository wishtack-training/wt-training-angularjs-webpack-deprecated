/**
 *
 * (c) 2013-2016 Wishtack
 *
 * $Id: $
 */


import * as angular from 'angular';
import {UserFormComponent} from './user-list/user-form/user-form.component';
import {UserListComponent} from './user-list/user-list.component';
import {UserPreviewComponent} from './user-list/user-preview/user-preview.component';
import {UserStore} from './common/user/user-store';

export const appModule = angular.module('app', [
]);

appModule.component('wtUserForm', UserFormComponent.config);
appModule.component('wtUserList', UserListComponent.config);
appModule.component('wtUserPreview', UserPreviewComponent.config);
appModule.service('userStore', UserStore);

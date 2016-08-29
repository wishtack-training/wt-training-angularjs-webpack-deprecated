/**
 *
 * (c) 2013-2016 Wishtack
 *
 * $Id: $
 */


import * as angular from 'angular';
import {UserListComponent} from './user-list/user-list.component';
import {UserFormComponent} from './user-form/user-form.component';
import {UserStore} from './common/user/user-store';
import {UserPreviewComponent} from './user-preview/user-preview.component';

export const appModule = angular.module('app', []);

appModule.component('wtUserForm', UserFormComponent.config);
appModule.component('wtUserList', UserListComponent.config);
appModule.component('wtUserPreview', UserPreviewComponent.config);
appModule.service('userStore', UserStore);
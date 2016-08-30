/**
 *
 * (c) 2013-2016 Wishtack
 *
 * $Id: $
 */

import {User} from './user';

export class UserStore {

    _userList: User[] = [];

    constructor(private $http) {
        'ngInject';
    }

    addUser(user: User) {
        this._userList.push(user);
    }

    removeUser(user: User) {
        this._userList = this._userList
            .filter(it => !it.isEqual({user: user}));
    }

    userList(): Promise<User[]> {
        return this.$http.get('/api/v1/users/')
            .then((response) => response.data.objects.map(userData => new User(userData)));
    }

}

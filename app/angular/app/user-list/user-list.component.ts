/**
 *
 * (c) 2013-2016 Wishtack
 *
 * $Id: $
 */

import {User} from '../common/user/user';

export class UserListComponent {

    static config = {
        controller: UserListComponent,
        templateUrl: require('./user-list.component.html')
    };

    userList: User[];

    constructor(private userStore) {
        'ngInject';

        this.userStore.addUser(new User({
            firstName: 'Foo',
            lastName: 'BAR'
        }));

        this.userStore.addUser(new User({
            firstName: 'John',
            lastName: 'BAR'
        }));

        this._updateUserList();

    }

    addUser(user: User) {

        this.userStore.addUser(user);

        this._updateUserList();

    }

    removeUser(user: User) {

        this.userStore.removeUser(user);

        this._updateUserList();

    }

    private _updateUserList() {
        this.userStore.userList()
            .then(userList => this.userList = userList);
    }

}

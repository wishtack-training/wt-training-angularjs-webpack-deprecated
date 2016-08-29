/**
 *
 * (c) 2013-2016 Wishtack
 *
 * $Id: $
 */

import {User} from '../common/user/user';

export class UserSelectorComponent {

    static config = {
        controller: UserSelectorComponent,
        name: 'wtUserSelector',
        templateUrl: require('./user-selector.component.html')
    };

    selectedUser: User;
    userList: User[];

    constructor() {

        this.userList = [
            new User({
                firstName: 'Foo',
                lastName: 'BAR'
            }),
            new User({
                firstName: 'John',
                lastName: 'BAR'
            })
        ];
    }

    selectUser(user) {
        this.selectedUser = user;
    }

}

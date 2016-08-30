/**
 *
 * (c) 2013-2016 Wishtack
 *
 * $Id: $
 */

import {UserStore} from '../../../../../app/angular/app/common/user/user-store';
import {User} from '../../../../../app/angular/app/common/user/user';
import {appModule} from '../../../../../app/angular/app/app.module';

describe('UserStore', () => {

    beforeEach(angular.mock.module(appModule.name));

    beforeEach(angular.mock.module((userStoreProvider) => {}));

    beforeEach(inject(($rootScope,
                       userStore) => {
        this.$rootScope = $rootScope;
        this.userStore= userStore;
    }));

    it('should add users and return list', () => {

        let userList;
        let userStore = this.userStore;

        let user1 = new User({firstName: 'Foo', lastName: 'BAR'});
        let user2 = new User({firstName: 'John', lastName: 'BAR'});
        let user3 = new User({firstName: 'Foo', lastName: 'BAR'});

        userStore.userList().then(_userList_ => userList = _userList_);

        this.$rootScope.$apply();

        expect(userList.length).toEqual(0);

        userStore.addUser(user1);
        userStore.addUser(user2);
        userStore.addUser(user3);

        userList = null;

        userStore.userList().then(_userList_ => userList = _userList_);

        this.$rootScope.$apply();

        expect(userList.length).toEqual(3);
        expect(userList[0].firstName).toEqual('Foo');
        expect(userList[1].firstName).toEqual('John');
        expect(userList[2].firstName).toEqual('Foo');

    });

});

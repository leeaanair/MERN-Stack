import React from 'react';

import UserList from '../components/UserList';
import {USERLIST} from '../../shared/Users';

const Users = () =>{

	const USERS = USERLIST;

	return <UserList items = {USERS}/>;
}

export default Users;
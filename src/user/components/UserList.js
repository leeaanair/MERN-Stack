import React from 'react';

import './UserList.css';

import UserItem from './UserItem';

const UserList = props => {

	if(props.items.length === 0){
		return(<div> No user found!</div>);
	}

	return(
		<ul className="users-list">
			{
				props.items.map(user=>
					(
						<UserItem 
						key={user.id} 
						id={user.id} 
						image={user.image} 
						name={user.name} 
						placeCount={user.places} 
						/>
				))}

			</ul>
		);
};

export default UserList;
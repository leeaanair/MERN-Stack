import React from 'react';

import PlaceList from '../components/PlaceList';
import {DUMMY_PLACES} from '../../shared/Places';

const PLACES = DUMMY_PLACES;

const UserPlaces = () => {


	return <PlaceList items={PLACES}/>;
};

export default UserPlaces;
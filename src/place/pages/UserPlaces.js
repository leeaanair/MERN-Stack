import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';
import {DUMMY_PLACES} from '../../shared/Places';

const PLACES = DUMMY_PLACES;

const UserPlaces = () => {

	const userId  = useParams().userId;
	const loadedPlaces  = PLACES.filter(place => place.creator === userId);

	return <PlaceList items={loadedPlaces}/>;
};

export default UserPlaces;
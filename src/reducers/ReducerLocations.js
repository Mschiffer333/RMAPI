import { apiLocations } from '../API/API';

export default function (state = [], action) {
	switch (action.type) {
		case apiLocations:
			if (action.payload.data) {
				return [action.payload.data];
			}
			return state;
		default:
	}
	return state;
}
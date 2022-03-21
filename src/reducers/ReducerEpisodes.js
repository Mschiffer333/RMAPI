import { apiEpisodes } from '../API/API';

export default function (state = [], action) {
	switch (action.type) {
		case apiEpisodes:
			if (action.payload.data) {
				return state.concat(action.payload.data.results);
			}
			return state;
		default:
	}
	return state;
}
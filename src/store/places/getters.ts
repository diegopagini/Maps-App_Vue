/** @format */
import { GetterTree } from 'vuex';

import { StateInterface } from '..';
import { PlacesState } from './state';


const getters: GetterTree<PlacesState, StateInterface> = {
	isUserlocationReady(state) {
		return !!state.userLocation;
	},
};

export default getters;

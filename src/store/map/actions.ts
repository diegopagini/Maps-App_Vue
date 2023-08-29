/** @format */
import { directionsApi } from '@/apis';
import { DirectionsResponse } from '@/interfaces/directions';
import { ActionTree } from 'vuex';

import { StateInterface } from '..';
import { MapState } from './state';


export type LngLat = [number, number];

const actions: ActionTree<MapState, StateInterface> = {
	async getRouteBetweenPoints({ commit }, { start, end }: { start: LngLat; end: LngLat }) {
		const resp = await directionsApi.get<DirectionsResponse>(`${start.join(',')};${end.join(',')}`);

		commit('setDistanceDuration', {
			distance: resp.data.routes[0].distance,
			duration: resp.data.routes[0].duration,
		});

		commit('setRoutePolyline', resp.data.routes[0].geometry.coordinates);
	},
};

export default actions;

/** @format */
import { GetterTree } from 'vuex';

import { StateInterface } from '..';
import { ExampleStateInterface } from './state';


const getters: GetterTree<ExampleStateInterface, StateInterface> = {
	someGetter(/* state */) {
		// return true;
	},
};

export default getters;

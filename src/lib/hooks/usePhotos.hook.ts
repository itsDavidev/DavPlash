import { useReducer, useEffect } from 'react';

import { INITIAL_EMPTY_STATE_PHOTOS } from '~constants/unsplash.const';

import { IAdapterPhotos } from '~interfaces/Adapters.types';
import { IUsePhotosHook } from '~interfaces/hooks.types';

import { ACTIONS_PHOTOS } from '~lib/actions/photos.actions';

import { photosApi } from '~lib/api/photos.api';

import { photosReducer } from '~lib/reducers';

/**
 * @description UsePhotos hook
 *
 */
export default function usePhotos(): IUsePhotosHook {
	const [photos, setPhotos] = useReducer(
		photosReducer,
		INITIAL_EMPTY_STATE_PHOTOS
	);

	const initRequestPhotos = (): void =>
		setPhotos({
			type: ACTIONS_PHOTOS._INIT_REQUEST_PHOTOS_,
		});

	const successRequestPhotos = (photos: IAdapterPhotos): void =>
		setPhotos({
			type: ACTIONS_PHOTOS._SUCCESS_REQUEST_PHOTOS_,
			payload: {
				photos,
			},
		});

	const errorRequestPhotos = ({
		error,
		code,
	}: {
		error: string;
		code?: string | number | undefined;
	}): void =>
		setPhotos({
			type: ACTIONS_PHOTOS._FAILURE_REQUEST_PHOTOS_,
			payload: {
				error,
				code,
			},
		});

	const setPagePhotos = (page: number): void =>
		setPhotos({
			type: ACTIONS_PHOTOS._SET_PAGE_PHOTOS_,
			payload: {
				page,
			},
		});

	const setPerPagePhotos = (perPage: number): void =>
		setPhotos({
			type: ACTIONS_PHOTOS._SET_PER_PAGE_PHOTOS_,
			payload: {
				perPage,
			},
		});

	const setOrderByPhotos = (orderBy: string): void =>
		setPhotos({
			type: ACTIONS_PHOTOS._SET_ORDER_BY_PHOTOS_,
			payload: {
				orderBy,
			},
		});

	useEffect(() => {
		photosApi({
			init: initRequestPhotos,
			success: successRequestPhotos,
			err: errorRequestPhotos,
			orderBy: photos.orderBy,
			perPage: photos.perPage,
			page: photos.page,
		});
		return () => {};
	}, [photos.orderBy, photos.page, photos.perPage]);

	return {
		totalPhotos: photos.perPage,
		photos: photos.photos,
		isLoading: photos.isLoading,
		setOrderByPhotos,
		setPagePhotos,
		setPerPagePhotos,
	};
}

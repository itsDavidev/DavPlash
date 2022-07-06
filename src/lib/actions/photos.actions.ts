export interface TypeActionsPhotos {
	_SET_PER_PAGE: string;
	_SET_PAGE: string;
	_SET_ORDER_BY: string;
	_SET_PHOTOS: string;
	_SET_PHOTOS_LOADING: string;
	_SET_PHOTOS_ERROR: string;
}

export const ACTIONS_PHOTOS = {
	_SET_PER_PAGE: 'SET_PER_PAGE',
	_SET_PAGE: 'SET_PAGE',
	_SET_ORDER_BY: 'SET_ORDER_BY',
	_INTIAL_REQUEST: 'INTIAL_REQUEST_PHOTOS',
	_SUCCESS_REQUEST: 'SUCCESS_PHOTOS',
	_ERROR_REQUEST: 'ERROR_REQUEST_PHOTOS',
};

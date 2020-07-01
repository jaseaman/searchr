import {createAction} from "redux-actions";
import {createApiTypes} from "../../shared/store/util/types.util";

export const FETCH_PHOTOS = createApiTypes('FETCH_PHOTOS');

export const fetchPhotosRequest = createAction(FETCH_PHOTOS.REQUEST, p => p);

import {put, call, takeEvery} from "@redux-saga/core/effects";
import {FETCH_PHOTOS} from "./photos.actions";
import {fetchPhotosApi} from "./api/photos.api";


function* fetchPhotosSaga(action) {
    try {
        const response = yield call(fetchPhotosApi, action.payload);
        const payload = {
            data: response.results.map(r => ({
                description: r.description,
                url: r.urls.regular,
                createdBy: r.user.name,
                width: r.width,
                height: r.height
            })),
            total: response.total,
            pages: response.total_pages
        }
        yield put({type: FETCH_PHOTOS.SUCCESS, payload: payload});
    } catch (e) {
        yield put({type: FETCH_PHOTOS.FAILURE, payload: e});
    }
}

const photosSaga = [
    takeEvery(FETCH_PHOTOS.REQUEST, fetchPhotosSaga)
]

export default photosSaga;

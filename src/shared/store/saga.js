import {all} from "@redux-saga/core/effects";
import photosSaga from "../../features/photoSearch/photos.saga";


export default function* index() {
    yield all([
        ...photosSaga
    ])
}

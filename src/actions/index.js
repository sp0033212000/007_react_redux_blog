import _ from 'lodash';
import jsonPlaceholder from '../api/jsonPlaceholder';

export const fetchPostsAndUsers = () => {
    return async (dispatch, getState) => {
        await dispatch(fetchPosts());
        // const userIds = _.uniq(_.map(getState().posts, 'userId'));
        // userIds.forEach(id => dispatch(fetchUser(id)));
        // console.log(getState().users);

        _.chain(_.map(getState().posts))
         .map('userId')
         .uniq()
         .forEach(id => dispatch(fetchUser(id)))
         .value();
    }
}

export const fetchPosts = () => {
    return async (dispatch) => {
        const res = await jsonPlaceholder.get('/posts');

        dispatch({
            type: 'FETCH_POSTS',
            payload: res.data
        });
    };
};

export const fetchUser = (id) => {
    return async (dispatch) => {
        const res = await jsonPlaceholder.get(`/users/${id}`);

        dispatch({
            type: 'FETCH_USER',
            payload: res.data
        });
    };
};
//get data

export function loadComments() {
    return function (dispatch) {
        fetch('http://localhost:4001/comments')
        .then((response) => {
            return response.json();
        }).then((comments) => {
            dispatch(commentsLoaded(comments));
        })
    }
}
export function commentsLoaded(comments){
    return {
        type: 'COMMENTS_LOADED',
        value: comments
    }
}

// create data
export function createComment(comment){
    return function(dispatch){
        fetch('http://localhost:4001/comments', {
            method: 'post',
            body: JSON.stringify(comment),
            headers: {

                'Content-type': 'application/json'
            }
        }).then(function(res){
            return res.json();
        }).then(function(c){
            dispatch(commentCreated(c))
        })
    }
}

export function commentCreated(comment){
    return {
        type: 'COMMENT_CREATED',
        value: comment
    }
}
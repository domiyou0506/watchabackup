package com.watchapedia.watchpedia_user.model.network.response;

public record StarAndCommentResponse(
        Long starPoint,
        String commentText
) {
    public static StarAndCommentResponse of(
            Long starPoint, String commentText
    ){
        return new StarAndCommentResponse(starPoint,commentText);
    }
}

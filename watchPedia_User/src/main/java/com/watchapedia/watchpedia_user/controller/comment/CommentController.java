package com.watchapedia.watchpedia_user.controller.comment;

import com.watchapedia.watchpedia_user.model.entity.comment.Comment;
import com.watchapedia.watchpedia_user.model.entity.content.ajax.Star;
import com.watchapedia.watchpedia_user.model.network.request.comment.CommentRequest;
import com.watchapedia.watchpedia_user.model.network.request.comment.LikeRequest;
import com.watchapedia.watchpedia_user.model.network.response.comment.CommentResponse;
import com.watchapedia.watchpedia_user.model.network.response.content.MovieResponse;
import com.watchapedia.watchpedia_user.model.network.response.content.TvResponse;
import com.watchapedia.watchpedia_user.model.network.response.content.WebtoonResponse;
import com.watchapedia.watchpedia_user.model.repository.content.ajax.StarRepository;
import com.watchapedia.watchpedia_user.model.repository.UserRepository;
import com.watchapedia.watchpedia_user.service.comment.CommentService;
import com.watchapedia.watchpedia_user.service.content.MovieService;
import com.watchapedia.watchpedia_user.service.content.TvService;
import com.watchapedia.watchpedia_user.service.content.WebtoonService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;


@Controller
@RequestMapping("/comment")
@RequiredArgsConstructor
public class CommentController {
    final CommentService commentService;
    private final StarRepository starRepository;
    private final UserRepository userRepository;

    @PostMapping("/save")
    @ResponseBody
    public Long commentSave(
            @RequestBody CommentRequest request
    ){
        Comment comment = commentService.commentSave(request);
        commentService.spoilerSave(comment, request.spoiler());
        return comment.getCommIdx();
    }

    @PostMapping("/delete")
    @ResponseBody
    public boolean commentDelete(
            @RequestBody CommentRequest request
    ){
        commentService.commentDelete(request);
        Star star = starRepository.findByStarContentTypeAndStarContentIdxAndStarUserIdx(
                request.contentType(),request.contentIdx(),request.userIdx()
        );
        if(star != null){
            return true;
        }else {
            return false;
        }
    }

    @PostMapping("/like/save")
    @ResponseBody
    public boolean likeSave(
            @RequestBody LikeRequest request
    ){
        return commentService.likeSave(request);
    }
    final TvService tvService;
    final WebtoonService webtoonService;
    final MovieService movieService;
    @GetMapping("/{commentIdx}")
    public String commentView(
            @PathVariable Long commentIdx,
            @PageableDefault(size = 9, sort = "recommIdx", direction = Sort.Direction.ASC) Pageable pageable,
            ModelMap map
    ){
        Long userIdx = 12L;
        CommentResponse comment = commentService.findComment(commentIdx, userIdx, pageable);

        switch (comment.contentType()){
            case "movie" -> {
                MovieResponse content =movieService.movieView(comment.contentIdx());
                map.addAttribute("content", content);
            }
            case "tv" -> {
                TvResponse content = tvService.tvView(comment.contentIdx());
                map.addAttribute("content", content);
            }

            case "webtoon" -> {
                WebtoonResponse content = webtoonService.webtoonView(comment.contentIdx());
                map.addAttribute("content", content);
            }
//            case "book" -> {
//                map.addAttribute("content", content);
//            }
        }
        map.addAttribute("comment", comment);
        map.addAttribute("userIdx", userIdx);

        return "/recomment";
    }

    @GetMapping("/{commentIdx}/new")
    @ResponseBody
    public Map<String, Object> commentView(
            @PathVariable Long commentIdx,
            @PageableDefault(size = 9, sort = "recommIdx", direction = Sort.Direction.ASC) Pageable pageable
    ){
        Long userIdx = 12L;
        CommentResponse comment = commentService.findComment(commentIdx, userIdx, pageable);
        Map<String, Object> mv = new HashMap<>();

        mv.put("comment", comment.recomment());
        return mv;
    }
}

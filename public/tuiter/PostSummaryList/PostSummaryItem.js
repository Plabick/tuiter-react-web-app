const PostSummaryItem = (post) => {
    var summary = `<li class="list-group-item"><div class="row"><div class="col-9">`
    if(post.topic){summary +=`<div class="wd-tuit-topic">${post.topic}</div>`}
    if(post.userName){summary += `<span class="wd-tuit-author">${post.userName}</span><span><i class="fa fa-check-circle"></i> </span>`}
    summary += `<span class="wd-tuit-timestamp"> - ${post.time}</span>`
    if(post.title){summary += `<div>${post.title}</div>`}
    if(post.tweets){summary += `<div class="wd-tuit-topic">${post.tweets} Tuits</div>`}
    summary += `</div><div class="col my-auto"> <img class="wd-article-pic" src="${post.image}"></div></div></li>`
    return summary;
}
export default PostSummaryItem;
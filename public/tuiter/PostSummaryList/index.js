import items from "./items.js"
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {
    let summarylist = ``;
    for (const item of items) {
        summarylist += PostSummaryItem(item)
    }

    return `<ul class="list-group">${summarylist}</ul>`;
}

export default PostSummaryList
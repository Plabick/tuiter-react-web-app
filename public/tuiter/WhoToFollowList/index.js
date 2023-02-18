import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
    let list = ``

    for(const elm of who){
        list += WhoToFollowListItem(elm)
    }

    return (`
           <ul class="list-group">
                <a class="list-group-item p-0">Who to follow</a>
                <a class="list-group-item p-0" href="#">
            ${list}
           </ul>
`); }

export default WhoToFollowList
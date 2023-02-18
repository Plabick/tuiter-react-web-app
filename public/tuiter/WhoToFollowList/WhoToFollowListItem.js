const WhoToFollowListItem = (who) => {
    return(`
    <div class="row g-0">
        <div class="container col-1">
            <img class="wd-profile-pic" src="../../images/${who.avatarIcon}">
        </div>
        <div class="container col-7">
            <div class="wd-tuit-author">${who.userName}<i class="fa fa-check-circle"></i>
            </div>
            <div class="wd-tuit-handle">@${who.handle}</div>
        </div>
        <div class=" col-3 my-auto">
                    <span class="btn btn-primary rounded-pill wd-small justify-content-end">
                        Follow
                    </span>
        </div>
        </div>
`);
}
export default WhoToFollowListItem;
const NavigationSidebar = () => {
    return(`
 <div class="list-group ">
                <a class="list-group-item list-group-item-action" href="#">
                    <i class="fab fa-twitter"></i></a>
                <a class="list-group-item list-group-item-action" href="#">
                    <i class="fa fa-home "></i><span class="d-none d-xl-inline"> Home</span></a>
                <a class="list-group-item list-group-item-action active" href="#">
                    <i class="fa fa-hashtag"></i><span class="d-none d-xl-inline"> Explore</span></a>
                <a class="list-group-item list-group-item-action " href="#">
                    <i class="fa fa-bell"></i><span class="d-none d-xl-inline"> Notifications</span></a>
                <a class="list-group-item list-group-item-action" href="#">
                    <i class="fa fa-envelope"></i> <span class="d-none d-xl-inline"> Messages</span></a>
                <a class="list-group-item list-group-item-action" href="#">
                    <i class="fa fa-bookmark"></i><span class="d-none d-xl-inline"> Bookmarks</span> </a>
                <a class="list-group-item list-group-item-action" href="#">
                    <i class="fa fa-list"></i><span class="d-none d-xl-inline"> Lists</span> </a>
                <a class="list-group-item list-group-item-action" href="#">
                    <i class="fa fa-user"></i><span class="d-none d-xl-inline"> Profile</span></a>
                <a class="list-group-item list-group-item-action" href="#">
                        <i class="fa fa-ellipsis-h"></i><span class="d-none d-xl-inline"> More</span></a>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div> </div>
 `);
}
export default NavigationSidebar;
import PostSummaryList
    from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="mb-10 row">
                <div class="col">
                    <div class="form-group has-search">
                        <span class="fa fa-search form-control-feedback"></span>
                        <input type="text" class="form-control rounded-pill" placeholder="Search Tuiter">
                    </div>
                </div>
                <div class="col-1 my-auto">
                    <i class="fa fa-cog fa-2x" style="color: lightblue"></i>
                </div>
            </div>

            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" href="#">For You</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Sports</a>
                </li>
                <li class="nav-item d-none d-md-block d-sm-none">
                    <a class="nav-link" href="#">Entertainment</a>
                </li>
            </ul>
            <img class="img-fluid" src="starship.png">
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;

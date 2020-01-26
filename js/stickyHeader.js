class StickyHeader {
    constructor() {
        this.siteHeader = $(".main-header");
        this.headTriggerElement = $(".slider-content");
        this.createHeaderWaypoint();
    }


createHeaderWaypoint() {
    var that = this;
    new Waypoint({
        element: this.headTriggerElement[0],
        handler: function(direction) {
            if(direction == "down") {
                that.siteHeader.addClass("site-header-dark");
            } 
            else {
                that.siteHeader.removeClass("site-header-dark");
            }
        }
    });
}}

var stickyheader = new StickyHeader();

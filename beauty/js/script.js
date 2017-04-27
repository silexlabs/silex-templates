
        /*
         * active menu widget for Silex
         * create an element which links to an anchor, e.g. an element with a link to #anchor1
         * add the css class "anchor-link" to this element
         * create an element which is the anchor, e.g. an element with the css class "anchor1"
         * when the user clicks on the link, the scroll slides until the element is visible
         * when the user slides and the element is visible, the link gets a css class "active-menu"
         */
        $(function() {
            var navSectionHeight = $('.nav-section').height();
            // Cache selectors
            var lastId,
                // All list items
                menuItems = $(".anchor-link"),
                // Anchors corresponding to menu items
                // find the name of the elements which are anchors
                scrollItems = menuItems.map(function(){
                    // the names are in the href attribute of the anchor links
                    var attr = $(this).attr("data-silex-href") || $(this).attr("href");
                    // case of a link in text field or an external link after publish
                    $(this).find("[href]").each(function() {
                        attr = $(this).attr("href");
                    });
                    // case of an "external link" before publish
                    $(this).find("[data-silex-href]").each(function() {
                        attr = $(this).attr("href");
                    });
                    // the links to anchors are expected to start with #
                    if(attr && attr.indexOf("#") === 0) {
                        var name = attr.substring(attr.lastIndexOf("#") + 1);
                        // exclude page names (#!page-)
                        if(name.indexOf("!page") !== 0) {
                            var item = $("." + name);
                            // check if there is a hash in the URL to scroll to the anchor at start
                            if(window.location.hash.indexOf("#" + name) > 0) {
                                var offsetTop = item.offset().top;
                                $('html, body').stop().animate({
                                    scrollTop: offsetTop - navSectionHeight
                                }, 300);
                            }
                            // now find the element itself, which has the name as a css class
                            if (item.length) { 
                                return {
                                    "link": this,
                                    "item": item.get(0)
                                };
                            }
                        }
                    }
                });
            // Bind click handler to menu items
            // so we can get a fancy scroll animation
            scrollItems.each(function() {
                var link = this.link;
                var item = this.item;
                $(link).click(function(e){
                    // leave time for the page to open
                    // and then scroll
                    setTimeout(function() {
                      var offsetTop = $(item).offset().top;
                      $('html, body').stop().animate({
                          scrollTop: offsetTop - navSectionHeight
                      }, 300);
                      e.preventDefault();
                    }, 100);
                });
            })
        
            // Bind to scroll
            $(window).scroll(function(){
               // Get container scroll position
               var fromTop = $(this).scrollTop();
               // Get id of current scroll item
               var cur = scrollItems.map(function(){
                 if ($(this.item).offset().top <= fromTop + navSectionHeight)
                   return this;
               });
               // add the css class on the current menu item
        /*       if(fromTop < navSectionHeight) {
                   $('.nav-section').removeClass('invisible');
               }
        */       $(".active-menu").removeClass("active-menu");
               if(cur.length > 0) {
                   cur = cur[cur.length-1];
                   $(cur.link).addClass("active-menu");
        /*           if(fromTop > navSectionHeight) {
                       $('.nav-section').addClass('invisible');
                   }
        */       }
            });
        });
    
$(function() {


  //  var siteSticky = function() {
  //   $(".js-sticky-header").sticky({topSpacing:0});
  // };
  // siteSticky();
	var siteMenuClone = function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function() {
			
			var counter = 0;
      $('.site-mobile-menu .has-children').each(function(){
        var $this = $(this);
        
        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();  
      
    });

		$(window).resize(function() {
			var $this = $(this),
				w = $this.width();

			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function(e) {
			var $this = $(this);
			e.preventDefault();

			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		}) 

		// click outisde offcanvas
		$(document).mouseup(function(e) {
	    var container = $(".site-mobile-menu");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
	    }
		});
	}; 
	siteMenuClone();

});
function AddReadMore() {
        //This limit you can set after how much characters you want to show Read More.
        var carLmt = 80;
        // Text to show when text is collapsed
        var contentDataTxt = " ... xem thêm";
        // Text to show when text is expanded
        var someVeekTxt = " thu gọn";


        //Traverse all selectors with this class and manupulate HTML part to show Read More
        $(".showContentAll").each(function() {
            if ($(this).find(".firstSec").length)
                return;

            var allstr = $(this).text();
            if (allstr.length > carLmt) {
                var firstSet = allstr.substring(0, carLmt);
                var secdHalf = allstr.substring(carLmt, allstr.length);
                var strtoadd = firstSet + "<span class='DspInfo'>" + secdHalf + "</span><span class='contentData'  title='Click to Show More'>" + contentDataTxt + "</span><span class='someVeek' title='Click to Show Less'>" + someVeekTxt + "</span>";
                $(this).html(strtoadd);
            }

        });
        //ReadMore and ReadLess Click Event binding
        $(document).on("click", ".contentData,.someVeek", function() {
            $(this).closest(".showContentAll").toggleClass("displayreadallsome readalldatafull");
        });
    }
    $(function() {
        //Calling function after Page Load
        AddReadMore();
    });

$(document).ready(function(){
      $(window).scroll(function(){
        if($(window).scrollTop() > 300){
          $('#btnScrollTop').css({
            "opacity":"1", "pointer-events":"auto"
          });
        }else{
          $('#btnScrollTop').css({
            "opacity":"0", "pointer-events":"none"
          });
        }
      });
      $('#btnScrollTop').click(function(){
        $('html').animate({scrollTop:0}, 500);
      });
    });

// $(document).ready(function() {
//       var stickyTop = $('.sticky').offset().top;//300

//       $(window).scroll(function() {
//        var windowTop = $(window).scrollTop();//300

//         if (stickyTop < windowTop) {
//           $('.sticky').addClass('sticky-top');
//         } else {
        
//           $('.sticky').removeClass('sticky-top');
//         }
//         });
//       });

if ($('.smart-scroll').length > 0) { // check if element exists
    var last_scroll_top = 0;
     var positionStart = $('.smart-scroll').offset().top;//vị trí của element
    $(window).on('scroll', function() {
        scroll_top = $(this).scrollTop();
        // if(positionStart < scroll_top)
        // {
          
        // }
        if (scroll_top < last_scroll_top && scroll_top >positionStart) {
           $('.smart-scroll').addClass('fixed-top');
           console.log("lên");
        }

        else if(scroll_top <= positionStart ){
            $('.smart-scroll').removeClass('fixed-top');
            console.log("nhỏ hơn bằng")
        }
        else{
           $('.smart-scroll').removeClass('fixed-top');
          console.log("xuống");
        }
        last_scroll_top = scroll_top;

    });
}

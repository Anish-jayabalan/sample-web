jQuery(document).ready(function () {
jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 50) {
        jQuery('header').addClass('bg-header');
    } else {
        jQuery('header').removeClass('bg-header');
    }
});
	});

jQuery(window).load(function() {
	
        jQuery.get("https://api.ipdata.co/country_name?api-key=841906a095a8c845ae38372cc1b5b99f39df93fe33a42d1314d4f7f6").done(function (e) {
			if(e == 'India') {      		
			var delayMs = 1500; 
			setTimeout(function(){
				if (document.cookie.indexOf('modal_shown=') >= 0) {
                 } else {
				jQuery('#myModal1').modal('show');
			   document.cookie = 'modal_shown=seen';
				 }
			}, delayMs);
			}
			if (e == 'United States') {
			
			var delayMs = 1500; 
			setTimeout(function(){
				if (document.cookie.indexOf('modal_shown=') >= 0) {
                 } else {
				jQuery('#usModal').modal('show');
				 document.cookie = 'modal_shown=seen';
				 }
			}, delayMs);	
			}
			if (e == 'United Arab Emirates') {
			
			var delayMs = 1500; 
			setTimeout(function(){
				if (document.cookie.indexOf('modal_shown=') >= 0) {
                 } else {
				jQuery('#uaeModal').modal('show');
			     document.cookie = 'modal_shown=seen';
				 }
			}, delayMs);	
			}
			
	});
});

jQuery(function () {
  function e(r) {
    var o,
      t,
      n,
      a,
      i = parseInt(r.html(), 10);
    (o = r),
      (t = jQuery(window).scrollTop()),
      (n = t + jQuery(window).height()),
      (a = o.offset().top) + o.height() <= n &&
      a >= t &&
      !r.data("isCounting") &&
      i < r.data("count") &&
      (r.html(++i),
        r.data("isCounting", !0),
        setTimeout(function () {
          r.data("isCounting", !1), e(r);
        }, 10));
  }
  function r() {
    jQuery(".count-number").each(function () {
      e(jQuery(this));
    });
  }
  jQuery(".count-number").each(function () {
    jQuery(this).data("count", parseInt(jQuery(this).html(), 10)), jQuery(this).html("0"), jQuery(this).data("isCounting", !1);
  }),
    jQuery(window).scroll(function () {
      r();
    }),
    r();
})

jQuery(function () {

  jQuery(".accordion-content:not(:first-of-type)").css("display", "none");

  jQuery(".js-accordion-title:first-of-type").addClass("open");

  jQuery(".js-accordion-title").click(function () {
    jQuery(".open").not(this).removeClass("open").next().slideUp(300);
    jQuery(this).toggleClass("open").next().slideToggle(300);
  });
});

jQuery(document).ready(function () {
  jQuery('.serve-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    autoplay: true,
    prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    nextArrow: '<button class="slide-arrow next-arrow"></button>',
    autoplaySpeed: 5000,

    responsive: [
      {
        breakpoint: 991,
        settings: {
          arrows: false,
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  });
});

jQuery(document).ready(function () {
  jQuery('.award-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    autoplay: true,
    prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    nextArrow: '<button class="slide-arrow next-arrow"></button>',
    autoplaySpeed: 5000,

    responsive: [
      {
        breakpoint: 1199,
        settings: {
          arrows: false,
        }
      },
      {
        breakpoint: 991,
        settings: {
          arrows: false,
          slidesToShow: 2
        }
      }
    ]
  });
});

jQuery(document).ready(function () {
  jQuery('.partner-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    autoplay: true,
    vertical: true,
    verticalSwiping: true,
    autoplaySpeed: 5000,

    responsive: [
      {
        breakpoint: 991,
        settings: {
          dots: false
        }
      }
    ]
  });
});


(function () {
  'use strict';

  const keyboardSupport = function (container, hasTabs) {
    const tablist = container.querySelectorAll('[role="tablist"]')[0];
    let tabs;
    let panels;

    const generateArrays = function () {
      panels = container.querySelectorAll('[role="tabpanel"]');
      tabs = container.querySelectorAll('[role="tab"]');
    };

    generateArrays();

    // For easy reference
    const keys = {
      end: 35,
      home: 36,
      left: 37,
      up: 38,
      right: 39,
      down: 40,
      delete: 46,
      enter: 13,
      space: 32
    };

    // Add or subtract depending on key pressed
    const direction = {
      37: -1,
      38: -1,
      39: 1,
      40: 1
    };

    // Deactivate all tabs and tab panels
    const deactivateTabs = function () {
      for (let t = 0; t < tabs.length; t++) {
        tabs[t].setAttribute('tabindex', '-1');
        tabs[t].setAttribute('aria-selected', 'false');
      }
    };

    // Activates any given tab panel
    const activateTab = function (tab, setFocus) {
      setFocus = setFocus || true;
      // Deactivate all other tabs
      deactivateTabs();

      // Remove tabindex attribute
      tab.removeAttribute('tabindex');

      // Set the tab as selected
      tab.setAttribute('aria-selected', 'true');

      // Set focus when required
      if (setFocus) {
        tab.focus();
      }
    };

    const triggerTabClick = function (e) {
      const clickedId = e.target.getAttribute('id');
      if (clickedId) {
        const clickedTab = container.querySelector('[aria-controls="' + clickedId + '"]');
        clickedTab.click();
        document.getElementById(clickedId).scrollIntoView({
          behavior: 'smooth'
        });
      }
    };

    const accordionClickEventListener = function (event) {
      triggerTabClick(event);
    };

    // When a tab is clicked, activateTab is fired to activate it
    const clickEventListener = function (event) {
      const tab = event.target;
      activateTab(tab, false);
    };

    // Make a guess
    const focusFirstTab = function () {
      const target = hasTabs ? tabs : panels;
      target[0].focus();
    };

    // Make a guess
    const focusLastTab = function () {
      const target = hasTabs ? tabs : panels;
      target[target.length - 1].focus();
    };

    // Either focus the next, previous, first, or last tab
    // depending on key pressed
    const switchTabOnArrowPress = function (event) {
      const pressed = event.keyCode;

      if (direction[pressed]) {
        const target = event.target;
        const targetElems = hasTabs ? tabs : panels;
        if (target.index !== undefined) {
          if (targetElems[target.index + direction[pressed]]) {
            targetElems[target.index + direction[pressed]].focus();
          }
          else if (pressed === keys.left || pressed === keys.up) {
            focusLastTab();
          }
          else if (pressed === keys.right || pressed == keys.down) {
            focusFirstTab();
          }
        }
      }
    };

    // When a tablist's aria-orientation is set to vertical,
    // only up and down arrow should function.
    // In all other cases only left and right arrow function.
    const determineOrientation = function (event) {
      const key = event.keyCode;
      const vertical = tablist ? tablist.getAttribute('aria-orientation') === 'vertical' : null;
      let proceed = false;

      if (vertical || !hasTabs) {
        if (key === keys.up || key === keys.down) {
          event.preventDefault();
          proceed = true;
        }
      }
      else {
        if (key === keys.left || key === keys.right) {
          proceed = true;
        }
      }

      if (proceed) {
        switchTabOnArrowPress(event);
      }
    };

    // Handle keydown on tabs
    const keydownEventListener = function (event) {
      const key = event.keyCode;
      switch (key) {
        case keys.end:
          event.preventDefault();
          // Activate last tab
          focusLastTab();
          break;
        case keys.home:
          event.preventDefault();
          // Activate first tab
          focusFirstTab();
          break;

        // Up and down are in keydown
        // because we need to prevent page scroll >:)
        case keys.up:
        case keys.down:
          determineOrientation(event);
          break;
      }
    };

    // Handle keyup on tabs
    const keyupEventListener = function (event) {
      const key = event.keyCode;
      switch (key) {
        case keys.left:
        case keys.right:
          determineOrientation(event);
          break;
        case keys.enter:
        case keys.space:
          if (hasTabs) {
            activateTab(event.target);
          } else {
            triggerTabClick(event);
          }
          break;
      }
    };

    const addListeners = function (index) {
      const target = hasTabs ? tabs[index] : panels[index];
      tabs[index].addEventListener('click', clickEventListener);
      if (target) {
        if (!hasTabs) {
          target.addEventListener('click', accordionClickEventListener);
        }
        target.addEventListener('keydown', keydownEventListener);
        target.addEventListener('keyup', keyupEventListener);
        // Build an array with all tabs (<button>s) in it
        target.index = index;
      }
    };

    // Bind listeners
    for (let i = 0; i < tabs.length; ++i) {
      addListeners(i);
    }

    // Accordion mode
    if (!hasTabs) {
      for (const panel of panels) {
        panel.onclick = function (e) {
          triggerTabClick(e);
        };
      }
    }
  };

  const toggleClass = function (otherElems, thisELem, className = 'is-active') {
    for (const otherElem of otherElems) {
      otherElem.classList.remove(className);
    }
    thisELem.classList.add(className);
  };

  const toggleVerticalTabs = function (tabContainer, tabs, items, item) {
    item.onclick = function (e) {
      const currId = item.getAttribute('id');
      const tab = tabContainer.querySelector('.ootb-tabcordion--tabs [aria-controls="' + currId + '"]');
      toggleClass(tabs, tab);
      toggleClass(items, item);
    };
  };

  const toggleTabs = function (tabContainer) {
    const tabs = tabContainer.querySelectorAll('.ootb-tabcordion--tabs .tab');
    const items = tabContainer.querySelectorAll('.ootb-tabcordion--entry');
    for (const tab of tabs) {
      tab.onclick = function () {
        const target = tab.getAttribute('aria-controls');
        const content = document.getElementById(target);
        toggleClass(tabs, tab);
        toggleClass(items, content);
      };
    }
    for (const item of items) {
      toggleVerticalTabs(tabContainer, tabs, items, item);
    }
  };

  const hasTabs = function (container) {
    return container.classList.contains('has-tabs');
  };

  const modeSwitcher = function (tabContainer, containerWidth) {
    const tabs = tabContainer.querySelectorAll('.tab');
    const container = tabs[0].closest('.ootb-tabcordion');
    let totalW = 0;
    for (const tab of tabs) {
      totalW += tab.offsetWidth;
    }
    if (totalW >= containerWidth) {
      container.classList.remove('has-tabs');
    } else {
      container.classList.add('has-tabs');
    }
    keyboardSupport(tabContainer, hasTabs(container));
  };

  const resizeObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
      modeSwitcher(entry.target, entry.contentRect.width);
    }
  });

  const tabContainers = document.querySelectorAll('.ootb-tabcordion');
  for (const tabContainer of tabContainers) {
    const tabList = tabContainer.querySelector('.ootb-tabcordion--tabs');
    resizeObserver.observe(tabList);
    toggleTabs(tabContainer);
    keyboardSupport(tabContainer, hasTabs(tabContainer));
  }
})();

/*** Tab 1***/
jQuery(document).ready(function () {
  jQuery('.expanding-grid').expandingGrid();
  // Events page
  jQuery('.events-list-tab a').click(function () {
    jQuery('.events-list-tab a').removeClass('active');
    jQuery(this).addClass('active');
    var currentEvent = jQuery(this).attr('rel');
    jQuery('.events-list-outer-wrap > div').fadeOut(300);
    setTimeout(function () {
      jQuery('.' + currentEvent).fadeIn(300);
    }, 300);

  });
});

/*** Tab 2***/
jQuery(document).ready(function () {
  jQuery('.overseas-grp .expanding-grid-over').expandingGrid();
  // Events page
  jQuery('.overseas-grp .expanding-grid-over .events-list-tab a').click(function () {
    jQuery('.overseas-grp .expanding-grid-over .events-list-tab a').removeClass('active');
    jQuery(this).addClass('active');
    var currentEvent = jQuery(this).attr('rel');
    jQuery('.overseas-grp .expanding-grid-over .events-list-outer-wrap > div').fadeOut(300);
    setTimeout(function () {
      jQuery('.' + currentEvent).fadeIn(300);
    }, 300);
  });
});

jQuery(".close-text").click(function () {

  jQuery(this).parent().parent().parent().parent().find('.close-button').trigger("click");

});

/*** Why Slider ***/
jQuery(document).ready(function () {
  jQuery('.why-repeater').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,

    responsive: [
      {
        breakpoint: 991,
        settings: {
          dots: false
        }
      }
    ]
  });
});


// tabbed content
jQuery(".service-tab-content").hide();
jQuery(".service-tab-content:first").show();

/* if in tab mode */
jQuery("ul.tabs li").click(function () {

  jQuery(".service-tab-content").hide();
  var activeTab = jQuery(this).attr("rel");
  jQuery("#" + activeTab).fadeIn();

  jQuery("ul.tabs li").removeClass("active");
  jQuery(this).addClass("active");

  jQuery(".tab_drawer_heading").removeClass("d_active");
  jQuery(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("d_active");

});

/* if in drawer mode */
jQuery(".tab_drawer_heading").click(function () {

  jQuery(".service-tab-content").hide();
  var d_activeTab = jQuery(this).attr("rel");
  jQuery("#" + d_activeTab).fadeIn();

  jQuery(".tab_drawer_heading").removeClass("d_active");
  jQuery(this).addClass("d_active");

  jQuery("ul.tabs li").removeClass("active");
  jQuery("ul.tabs li[rel^='" + d_activeTab + "']").addClass("active");
});


/**** Vertical Tab ***/
tabControl();

var resizeTimer;
jQuery(window).on('resize', function (e) {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function () {
    tabControl();
  }, 250);
});

function tabControl() {
  var tabs = jQuery('.tabbed-content').find('.tabs');
  if (tabs.is(':visible')) {
    tabs.find('a').on('click', function (event) {
      event.preventDefault();
      var target = jQuery(this).attr('href'),
        tabs = jQuery(this).parents('.tabs'),
        buttons = tabs.find('a'),
        item = tabs.parents('.tabbed-content').find('.item');
      buttons.removeClass('active');
      item.removeClass('active');
      jQuery(this).addClass('active');
      jQuery(target).addClass('active');
    });
  } else {
    jQuery('.item').on('click', function () {
      var container = jQuery(this).parents('.tabbed-content'),
        currId = jQuery(this).attr('id'),
        items = container.find('.item');
      container.find('.tabs a').removeClass('active');
      items.removeClass('active');
      jQuery(this).addClass('active');
      container.find('.tabs a[hrefjQuery="#' + currId + '"]').addClass('active');
    });
  }
}

/*** FAQ ****/
jQuery(document).ready(function () {
  jQuery(".industry-faq .card.in").addClass("bg-color"),
    jQuery(".industry-faq .card-header").click(function () {
      jQuery(".industry-faq .card").removeClass("bg-color");
    }),
    jQuery(".industry-faq .collapse").on("shown.bs.collapse", function () {
      jQuery(this).parent().addClass("active");
    }),
    jQuery(".industry-faq .collapse").on("hidden.bs.collapse", function () {
      jQuery(this).parent().removeClass("active");
    });
})


/*** CSR Slider ***/
jQuery(document).ready(function () {
  jQuery('.yellow-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    dots: false,
    arrows: true,
    autoplay: true,
    prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    nextArrow: '<button class="slide-arrow next-arrow"></button>',
    autoplaySpeed: 3000,

    responsive: [
      {
        breakpoint: 1199,
        settings: {
          arrows: false
        }
      }
    ]
  });
});

/*** CSR Action Slider ***/
jQuery(document).ready(function () {
  jQuery('.csr-action-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,

    responsive: [
      {
        breakpoint: 991,
        settings: {
          dots: false,
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

/**Gallery  ***/
jQuery(document).ready(function () {
  var items = jQuery(".gallery-wrap .gallery-item");
var numItems = items.length;
var perPage = 1;

items.slice(perPage).hide();

jQuery('#pagination-container').pagination({
  items: numItems,
  itemsOnPage: perPage,
  prevText: "&laquo;",
  nextText: "&raquo;",
  onPageClick: function (pageNumber) {
    var showFrom = perPage * (pageNumber - 1);
    var showTo = showFrom + perPage;
    items.hide().slice(showFrom, showTo).show();
  }
});
});

/*** Client say Slider ***/
jQuery(document).ready(function () {
  jQuery('.client-say-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    autoplay: true,
    prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    nextArrow: '<button class="slide-arrow next-arrow"></button>',
    autoplaySpeed: 5000,
  });
});


/*** Culture Slider ***/
jQuery(document).ready(function () {
  jQuery('.culture-slider-wrap').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    autoplay: true,
    prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    nextArrow: '<button class="slide-arrow next-arrow"></button>',
    autoplaySpeed: 5000,

    responsive: [
      {
        breakpoint: 991,
        settings: {
          arrows: false,
          slidesToShow: 1,
        }
      }
    ],
    customPaging: function (slider, i) {
      console.log(slider);
      return (i + 1) + '/' + slider.slideCount;
    }
  });
});

jQuery(document).ready(function () {
  var $slider = jQuery('.culture-slider-wrap');
  var $progressBar = jQuery('.progress');
  var $progressBarLabel = jQuery('.slider__label');

  $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var calc = ((nextSlide) / (slick.slideCount - 1)) * 100;

    $progressBar
      .css('background-size', calc + '% 100%')
      .attr('aria-valuenow', calc);

    $progressBarLabel.text(calc + '% completed');
  });


});

/*** Client say Slider ***/
jQuery(document).ready(function () {
  jQuery('.other-slider').slick({
    infinite: true,
    slidesToShow: 1.7,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 5000,
    centerMode: true,

    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false
        }
      }
    ]
  });
});
/*** Resource btn ***/
jQuery(document).ready(function () {
  jQuery(".view-btn-2").click(function () {
    jQuery(".nav .trigger").removeClass("active show");
    jQuery(".tab-content .trigger").removeClass("active show");
    jQuery(".trigger-2").addClass("active show");   
    jQuery('html,body').animate({
      scrollTop: jQuery("#resource-tab").offset().top
    },
      1000);
  });
	
  jQuery(".view-btn-1").click(function () {
    jQuery(".nav .trigger").removeClass("active show");
    jQuery(".tab-content .trigger").removeClass("active show");
    jQuery(".trigger-1").addClass("active show");
    jQuery('html,body').animate({
      scrollTop: jQuery("#resource-tab").offset().top
    },
      1000);
  });

  jQuery(".view-btn-3").click(function () {
    jQuery(".nav .trigger").removeClass("active show");
    jQuery(".tab-content .trigger").removeClass("active show");
    jQuery(".trigger-3").addClass("active show");
    jQuery('html,body').animate({
      scrollTop: jQuery("#resource-tab").offset().top
    },
      1000);
  });
});

jQuery(document).ready(function () {
  jQuery('.relat-blog-list').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    autoplay: false,
    prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    nextArrow: '<button class="slide-arrow next-arrow"></button>',
    autoplaySpeed: 5000,

    responsive: [
      {
        breakpoint: 991,
        settings: {
          arrows: false,
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  });
});


/*** Who We Serve  ***/

jQuery(document).ready(function() {


function setCookie(cname, cvalue, exdays) {
			var d = new Date();
			d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
			var expires = "expires=" + d.toGMTString();
			document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/";
		}
	function setCookieform(cname, cvalue, exdays) {
			var d = new Date();
			d.setTime(d.getTime() + (5 * 1 * 1000));
			var expires = "expires=" + d.toGMTString();
			document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/";
		}

		function getCookie(cname) {
			var name = cname + "=";
			var ca = document.cookie.split(';');
			for (var i = 0; i < ca.length; i++) {
				var c = ca[i];
				while (c.charAt(0) === ' ') c = c.substring(1);
				if (c.indexOf(name) === 0) {
					return c.substring(name.length, c.length);
				}
			}
			return "";
		}	
		
	jQuery(document).ready(function(){

		
	
		jQuery('#Retail').click(function() { 
			
			var value0="li0";
			setCookieform("lichoose", value0, 365);
		});
	
		jQuery('#Automotive').click(function() { 
		
			var value1="li1";
			setCookieform("lichoose", value1, 365);
		});
		jQuery('#globalsystemintegrators').click(function() { 
			
			var value2="li2";
			setCookieform("lichoose", value2, 365);
		});
		
		jQuery('#Government').click(function() { 
			
			var value3="li3";
			setCookieform("lichoose", value3, 365);
		});

		jQuery('#healthcare').click(function() { 
			
			var value4="li4";
			setCookieform("lichoose", value4, 365);
		});
		
		jQuery('#oilandgas').click(function() { 
			
			var value5="li5";
			setCookieform("lichoose", value5, 365);
		});
		
		jQuery('#Telecom').click(function() { 
			
			var value6="li6";
			setCookieform("lichoose", value6, 365);
		});

		jQuery('#Fintech').click(function() { 
			
			var value7="li7";
			setCookieform("lichoose", value7, 365);
		});
		
		jQuery('#BFSI').click(function() { 
			
			var value8="li8";
			setCookieform("lichoose", value8, 365);
		});
		
		jQuery('#CPG').click(function() { 
			
			var value9="li9";
			setCookieform("lichoose", value9, 365);
		});
		
		jQuery('#Logistics').click(function() { 
		
			var value10="li10";
			setCookieform("lichoose", value10, 365);
		});
	});

	jQuery(window).load(function() {
		var lichoose = getCookie("lichoose");
		if(lichoose == "li0"){

			jQuery('.tabs li:eq(0)').addClass('active');
			jQuery('#tab1').css("display", "none");
			jQuery('#tab1').css("display", "block");
			scroolltosection();

		}

		if(lichoose == "li1"){

			jQuery('.tabs li:eq(1)').addClass('active');
			jQuery('#tab1').css("display", "none");
			jQuery('#tab2').css("display", "block");
			scroolltosection();

		}

		if(lichoose == "li2"){

			jQuery('.tabs li:eq(2)').addClass('active');
			jQuery('#tab1').css("display", "none");
			jQuery('#tab3').css("display", "block");
			scroolltosection();

		}
		
		if(lichoose == "li3"){

			jQuery('.tabs li:eq(3)').addClass('active');
			jQuery('#tab1').css("display", "none");
			jQuery('#tab4').css("display", "block");
			scroolltosection();

		}

       if(lichoose == "li4"){

			jQuery('.tabs li:eq(4)').addClass('active');
			jQuery('#tab1').css("display", "none");
			jQuery('#tab5').css("display", "block");
			scroolltosection();

		}
		
		 if(lichoose == "li5"){

			jQuery('.tabs li:eq(5)').addClass('active');
			jQuery('#tab1').css("display", "none");
			jQuery('#tab6').css("display", "block");
			scroolltosection();

		}

		 if(lichoose == "li6"){

			jQuery('.tabs li:eq(6)').addClass('active');
			jQuery('#tab1').css("display", "none");
			jQuery('#tab7').css("display", "block");
			scroolltosection();

		}

		 if(lichoose == "li7"){

			jQuery('.tabs li:eq(7)').addClass('active');
			jQuery('#tab1').css("display", "none");
			jQuery('#tab8').css("display", "block");
			scroolltosection();

		}
		 if(lichoose == "li8"){

			jQuery('.tabs li:eq(8)').addClass('active');
			jQuery('#tab1').css("display", "none");
			jQuery('#tab9').css("display", "block");
			scroolltosection();

		}
		
		 if(lichoose == "li9"){

			jQuery('.tabs li:eq(9)').addClass('active');
			jQuery('#tab1').css("display", "none");
			jQuery('#tab10').css("display", "block");
			scroolltosection();

		}
		
		 if(lichoose == "li10"){

			jQuery('.tabs li:eq(10)').addClass('active');
			jQuery('#tab1').css("display", "none");
			jQuery('#tab11').css("display", "block");
			scroolltosection();

		}

	});
	});


/*** We serve slider ***/
jQuery(document).ready(function() {

function setCookie(cname, cvalue, exdays) {
			var d = new Date();
			d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
			var expires = "expires=" + d.toGMTString();
			document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/";
		}
	function setCookieform(cname, cvalue, exdays) {
			var d = new Date();
			d.setTime(d.getTime() + (5 * 1 * 1000));
			var expires = "expires=" + d.toGMTString();
			document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/";
		}

		function getCookie(cname) {
			var name = cname + "=";
			var ca = document.cookie.split(';');
			for (var i = 0; i < ca.length; i++) {
				var c = ca[i];
				while (c.charAt(0) === ' ') c = c.substring(1);
				if (c.indexOf(name) === 0) {
					return c.substring(name.length, c.length);
				}
			}
			return "";
		}	
		
	jQuery(document).ready(function(){

		
	
		jQuery('#serve-1').click(function() { 
			
			var value0="li0";
			setCookieform("lichoose", value0, 365);
		});
	
		jQuery('#serve-2').click(function() { 
			
			var value1="li1";
			setCookieform("lichoose", value1, 365);
		});
		jQuery('#serve-3').click(function() { 
			
			var value2="li2";
			setCookieform("lichoose", value2, 365);
		});
		
		jQuery('#serve-4').click(function() { 
			
			var value3="li3";
			setCookieform("lichoose", value3, 365);
		});

		jQuery('#serve-5').click(function() { 
			
			var value4="li4";
			setCookieform("lichoose", value4, 365);
		});
		
		jQuery('#serve-6').click(function() { 
			
			var value5="li5";
			setCookieform("lichoose", value5, 365);
		});
		
		jQuery('#serve-7').click(function() { 
			
			var value6="li6";
			setCookieform("lichoose", value6, 365);
		});

		jQuery('#serve-8').click(function() { 
			
			var value7="li7";
			setCookieform("lichoose", value7, 365);
		});
		
		jQuery('#serve-9').click(function() { 
			
			var value8="li8";
			setCookieform("lichoose", value8, 365);
		});
		
		jQuery('#serve-10').click(function() { 
			
			var value9="li9";
			setCookieform("lichoose", value9, 365);
		});
		
		jQuery('#serve-11').click(function() { 
			
			var value10="li10";
			setCookieform("lichoose", value10, 365);
		});
	});

	jQuery(window).load(function() {
		var lichoose = getCookie("lichoose");
		if(lichoose == "li0"){

			jQuery('.tabs li:eq(0)').addClass('active');
			jQuery('#tab1').css("display", "none");
			jQuery('#tab1').css("display", "block");
			scrolltosection();

		}

		if(lichoose == "li1"){

			jQuery('.tabs li:eq(1)').addClass('active');
			jQuery('#tab1').css("display", "none");
			jQuery('#tab2').css("display", "block");
			scrolltosection(100);

		}

		if(lichoose == "li2"){

			jQuery('.tabs li:eq(2)').addClass('active');
			jQuery('#tab1').css("display", "none");
			jQuery('#tab3').css("display", "block");
			scrolltosection();

		}
		
		if(lichoose == "li3"){

			jQuery('.tabs li:eq(3)').addClass('active');
			jQuery('#tab1').css("display", "none");
			jQuery('#tab4').css("display", "block");
			scrolltosection();

		}

       if(lichoose == "li4"){

			jQuery('.tabs li:eq(4)').addClass('active');
			jQuery('#tab1').css("display", "none");
			jQuery('#tab5').css("display", "block");
			scrolltosection();

		}
		
		 if(lichoose == "li5"){

			jQuery('.tabs li:eq(5)').addClass('active');
			jQuery('#tab1').css("display", "none");
			jQuery('#tab6').css("display", "block");
			scrolltosection();

		}

		 if(lichoose == "li6"){

			jQuery('.tabs li:eq(6)').addClass('active');
			jQuery('#tab1').css("display", "none");
			jQuery('#tab7').css("display", "block");
			scrolltosection();

		}

		 if(lichoose == "li7"){

			jQuery('.tabs li:eq(7)').addClass('active');
			jQuery('#tab1').css("display", "none");
			jQuery('#tab8').css("display", "block");
			scrolltosection();

		}
		 if(lichoose == "li8"){

			jQuery('.tabs li:eq(8)').addClass('active');
			jQuery('#tab1').css("display", "none");
			jQuery('#tab9').css("display", "block");
			scrolltosection();

		}
		
		 if(lichoose == "li9"){

			jQuery('.tabs li:eq(9)').addClass('active');
			jQuery('#tab1').css("display", "none");
			jQuery('#tab10').css("display", "block");
			scrolltosection();

		}
		
		 if(lichoose == "li10"){

			jQuery('.tabs li:eq(10)').addClass('active');
			jQuery('#tab1').css("display", "none");
			jQuery('#tab11').css("display", "block");
			scrolltosection();

		}

	});
	});


/*** Home Accordion ***/
jQuery(function () {
   jQuery("#hm-accordion").accordion();
    if (localStorage.getItem('open') != null) {
        jQuery(jQuery('h4').get(parseInt(localStorage.getItem('open')))).trigger("click");
    }
});

jQuery('h4').click(function () {
    localStorage.setItem('open', jQuery(this).index("h4"));
});


/*** Resources tab ***/
jQuery(document).ready(function() {
var hash = window.location.hash;
if (hash) {
	jQuery(document).scrollTop( jQuery("#resource-tab").offset().top );
    jQuery('.nav-tabs li span[href='+hash+']').tab('show');
	 
}
});

$(document).ready(function () {
  $(document).scroll(function(){
    if($(document).scrollTop()>100){
      $('#top').css({display:"flex"})
    }
    else{
      $('#top').css({display:"none"})
    }
  })
  $('#top').click(
    function(){
      $(document).scrollTop(0)
    }
  )

  $('.navbar-toggler').click(
    function(){
      $('.nav-links').toggle("slow")
    }
  )

  function manytimes(delay, callback) {
    let x = function () {
      callback();
      setTimeout(x, delay);
    };
    x();
  }
  let cb= function(){
      $(".coder").fadeOut(2000, function () {
        $(".ui").fadeOut(2000, function () {
          $(".developer").fadeOut(2000);
        });
      });
      $(".coder").fadeIn(2000, function () {
        $(".ui").fadeIn(2000, function () {
          $(".developer").fadeIn(2000);
        });
      });
  }
  manytimes(7000, cb);


  $('.see-more').click(
    function(){
      $('.see-more-details').show()
      $('.see-more').hide()
    }
  )
  $('.see-less').click(
    function(){
      $('.see-more-details').hide()
      $('.see-more').show()
    }
  )

  $('.skills').hide()
  $('.experience').hide()
  $('.cert').hide()

  $('#edu').click(
    function(){
      $('.education').show("slow")
      $('.skills').hide("slow")
      $('.experience').hide("slow")
      $('.cert').hide("slow")

      $('.edu .resume-topic-div').addClass('addclass1')
      $('.edu .resume-topic-div p').addClass("addclass2")

      $('.skl .resume-topic-div').removeClass('addclass1')
      $('.skl .resume-topic-div p').removeClass("addclass2")

      $('.exp .resume-topic-div').removeClass('addclass1')
      $('.exp .resume-topic-div p').removeClass("addclass2")

      $('.crt .resume-topic-div').removeClass('addclass1')
      $('.crt .resume-topic-div p').removeClass("addclass2")
    }
  )
  $('#skill').click(
    function(){
      $('.education').hide("slow")
      $('.skills').show("slow")
      $('.experience').hide("slow")
      $('.cert').hide("slow")

      $('.edu .resume-topic-div').removeClass('addclass1')
      $('.edu .resume-topic-div p').removeClass("addclass2")

      $('.skl .resume-topic-div').addClass('addclass1')
      $('.skl .resume-topic-div p').addClass("addclass2")

      $('.exp .resume-topic-div').removeClass('addclass1')
      $('.exp .resume-topic-div p').removeClass("addclass2")

      $('.crt .resume-topic-div').removeClass('addclass1')
      $('.crt .resume-topic-div p').removeClass("addclass2")
    }
  )
  $('#exp').click(
    function(){
      $('.education').hide("slow")
      $('.skills').hide("slow")
      $('.experience').show("slow")
      $('.cert').hide("slow")

      $('.edu .resume-topic-div').removeClass('addclass1')
      $('.edu .resume-topic-div p').removeClass("addclass2")

      $('.skl .resume-topic-div').removeClass('addclass1')
      $('.skl .resume-topic-div p').removeClass("addclass2")

      $('.exp .resume-topic-div').addClass('addclass1')
      $('.exp .resume-topic-div p').addClass("addclass2")

      $('.crt .resume-topic-div').removeClass('addclass1')
      $('.crt .resume-topic-div p').removeClass("addclass2")
    }
  )
  $('#cert').click(
    function(){
      $('.education').hide("slow")
      $('.skills').hide("slow")
      $('.experience').hide("slow")
      $('.cert').show("slow")

      $('.edu .resume-topic-div').removeClass('addclass1')
      $('.edu .resume-topic-div p').removeClass("addclass2")

      $('.skl .resume-topic-div').removeClass('addclass1')
      $('.skl .resume-topic-div p').removeClass("addclass2")

      $('.exp .resume-topic-div').removeClass('addclass1')
      $('.exp .resume-topic-div p').removeClass("addclass2")

      $('.crt .resume-topic-div').addClass('addclass1')
      $('.crt .resume-topic-div p').addClass("addclass2")
    }
  )

});


window.addEventListener('load', function(){
  document.getElementById("edu").click()
})



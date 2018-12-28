function main() {

  $('.search-toggle-label').on('click', function() {
    if ($('#search-toggle').is(':checked')) {
      $(".search__form").animate({right: 0},500);
      $('.search__input').animate({  width: '80px'},200);
    } else {
      $(".search__form").animate({right:'255px'},500);
      $('.search__input').animate({  width: '350px'},200);
    }
  });

  $('.login__switch').on('click', function() {
    $('.login-form-background').fadeIn(200);
  });

  $('.login-form__close').on('click', function() {
    $('.login-form-background').fadeOut(200);
  });

////////////////////////////////////////////////////////////////////////

  var x, i, j, selElmnt, a, b, c;
  x = document.getElementsByClassName("site-search-options-select");
  for (i = 0; i < x.length; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < selElmnt.length; j++) {
      c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener("click", function(e) {
          var y, i, k, s, h;
          s = this.parentNode.parentNode.getElementsByTagName("select")[0];
          h = this.parentNode.previousSibling;
          for (i = 0; i < s.length; i++) {
            if (s.options[i].innerHTML == this.innerHTML) {
              s.selectedIndex = i;
              h.innerHTML = this.innerHTML;
              y = this.parentNode.getElementsByClassName("same-as-selected");
              for (k = 0; k < y.length; k++) {
                y[k].removeAttribute("class");
              }
              this.setAttribute("class", "same-as-selected");
              break;
            }
          }
          h.click();
      });
      b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
  }
  function closeAllSelect(elmnt) {
    var x, y, i, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    for (i = 0; i < y.length; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i)
      } else {
        y[i].classList.remove("select-arrow-active");
      }
    }
    for (i = 0; i < x.length; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
      }
    }
  }
  document.addEventListener("click", closeAllSelect);

////////////////////////////////////////////////////////////////////////

  $('.map-toggle').on('click', () => {
   $('#map').fadeToggle(500);
  });

////////////////////////////////////////////////////////////////////////

  var x, i, j, selElmnt, a, b, c;
  /*look for any elements with the class "custom-select":*/
  x = document.getElementsByClassName("city-select-filter");
  for (i = 0; i < x.length; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    /*for each element, create a new DIV that will act as the selected item:*/
    a = document.createElement("DIV");
    a.setAttribute("class", "city-select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /*for each element, create a new DIV that will contain the option list:*/
    b = document.createElement("DIV");
    b.setAttribute("class", "city-select-items select-hide");
    for (j = 1; j < selElmnt.length; j++) {
      /*for each option in the original select element,
      create a new DIV that will act as an option item:*/
      c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener("click", function(e) {
          /*when an item is clicked, update the original select box,
          and the selected item:*/
          var y, i, k, s, h;
          s = this.parentNode.parentNode.getElementsByTagName("select")[0];
          h = this.parentNode.previousSibling;
          for (i = 0; i < s.length; i++) {
            if (s.options[i].innerHTML == this.innerHTML) {
              s.selectedIndex = i;
              h.innerHTML = this.innerHTML;
              y = this.parentNode.getElementsByClassName("same-as-selected");
              for (k = 0; k < y.length; k++) {
                y[k].removeAttribute("class");
              }
              this.setAttribute("class", "same-as-selected");
              break;
            }
          }
          h.click();
      });
      b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
        /*when the select box is clicked, close any other select boxes,
        and open/close the current select box:*/
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
  }
  function closeAllSelect(elmnt) {
    /*a function that will close all select boxes in the document,
    except the current select box:*/
    var x, y, i, arrNo = [];
    x = document.getElementsByClassName("city-select-items");
    y = document.getElementsByClassName("city-select-selected");
    for (i = 0; i < y.length; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i)
      } else {
        y[i].classList.remove("select-arrow-active");
      }
    }
    for (i = 0; i < x.length; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
      }
    }
  }
  /*if the user clicks anywhere outside the select box,
  then close all select boxes:*/
  document.addEventListener("click", closeAllSelect);

////////////////////////////////////////////////////////////////////////

  $('.habitation-toggle').on('click', () => {
   $('.habitation-offer-toggle').fadeToggle(200);
  });

  $('.entertainment-toggle').on('click', () => {
   $('.entertainment-offe-toggle').fadeToggle(200);
  });

  $('.transportation-toggle').on('click', () => {
   $('.transportation-offer-toggle').fadeToggle(200);
  });

////////////////////////////////////////////////////////////////////////

  $( ".city-select-selected" ).click(function() {
     if($(".city-select-selected").text()=="Dubai")
     {
       $(".offer-section").slideDown(300);
     }
      else
      {
        $(".offer-section").slideUp(300);
      }
  });


////////////////////////////////////////////////////////////////////////

$('.habitationIconLabel').click(function(){
  $('.OfferSectionContainer .OfferIcon__description').each(function(){
    $(this).removeClass('offer__description__active')
  });
  $('.habitationIconDescrpt').addClass('offer__description__active');
});

$('.personalIconLabel').click(function(){
  $('.OfferSectionContainer .OfferIcon__description').each(function(){
    $(this).removeClass('offer__description__active')
  });
  $('.personalIconDescrpt').addClass('offer__description__active');
});

$('.educationIconLabel').click(function(){
  $('.OfferSectionContainer .OfferIcon__description').each(function(){
    $(this).removeClass('offer__description__active')
  });
  $('.educationIconDescrpt').addClass('offer__description__active');
});

$('.entertainmentIconLabel').click(function(){
  $('.OfferSectionContainer .OfferIcon__description').each(function(){
    $(this).removeClass('offer__description__active')
  });
  $('.entertainmentIconDescrpt').addClass('offer__description__active');
});

$('.transportationIconLabel').click(function(){
  $('.OfferSectionContainer .OfferIcon__description').each(function(){
    $(this).removeClass('offer__description__active')
  });
  $('.transportationIconDescrpt').addClass('offer__description__active');
});

////////////////////////////////////////////////////////////////////////

$('.habitationHideIconLabel').click(function(){
  $('.OfferSectionContainer .OfferHideIcon__description').each(function(){
    $(this).removeClass('offer__HideDescription__active')
  });
  $('.habitationHideIconDescrpt').addClass('offer__HideDescription__active');
});

$('.personalHideIconLabel').click(function(){
  $('.OfferSectionContainer .OfferHideIcon__description').each(function(){
    $(this).removeClass('offer__HideDescription__active')
  });
  $('.personalHideIconDescrpt').addClass('offer__HideDescription__active');
});

$('.educationHideIconLabel').click(function(){
  $('.OfferSectionContainer .OfferHideIcon__description').each(function(){
    $(this).removeClass('offer__HideDescription__active')
  });
  $('.educationHideIconDescrpt').addClass('offer__HideDescription__active');
});

$('.entertainmentHideIconLabel').click(function(){
  $('.OfferSectionContainer .OfferHideIcon__description').each(function(){
    $(this).removeClass('offer__HideDescription__active')
  });
  $('.entertainmentHideIconDescrpt').addClass('offer__HideDescription__active');
});

$('.transportationHideIconLabel').click(function(){
  $('.OfferSectionContainer .OfferHideIcon__description').each(function(){
    $(this).removeClass('offer__HideDescription__active')
  });
  $('.transportationHideIconDescrpt').addClass('offer__HideDescription__active');
});

////////////////////////////////////////////////////////////////////////
};

$(document).ready(main);

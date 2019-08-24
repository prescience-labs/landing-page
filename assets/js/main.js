$(document).ready(function($) {
  'use strict';

  /* ---------------------------------------------
     page  Prealoader
 --------------------------------------------- */
  $(window).on('load', function() {
    $('#loading-center-page').fadeOut();
    $('#loading-page')
      .delay(400)
      .fadeOut('slow');
  });

  /* ---------------------------------------------
  Accordion
 --------------------------------------------- */

  $('.collapse.in').each(function() {
    $(this)
      .siblings('.panel-heading')
      .find('.icon-accordion')
      .addClass(' arrow_carrot-up')
      .removeClass(' arrow_carrot-down ');
  });

  $('.collapse')
    .on('show.bs.collapse', function() {
      $(this)
        .parent()
        .find('.icon-accordion')
        .removeClass(' arrow_carrot-down ')
        .addClass(' arrow_carrot-up');
    })
    .on('hide.bs.collapse', function() {
      $(this)
        .parent()
        .find('.icon-accordion')
        .removeClass('arrow_carrot-up')
        .addClass(' arrow_carrot-down ');
    });

  /* ---------------------------------------------
 owl caroussel
 --------------------------------------------- */

  $('.testimonial-caroussel').owlCarousel({
    loop: true,
    responsiveClass: true,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 500,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1200: {
        items: 1,
      },
    },
  });

  $('.client-caroussel').owlCarousel({
    loop: true,
    responsiveClass: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 500,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 4,
      },
      1200: {
        items: 5,
      },
    },
  });

  /*----------------------------------------------------*/
  /*  VIDEO POP PUP
/*----------------------------------------------------*/

  $('.video-modal').magnificPopup({
    type: 'iframe',

    iframe: {
      patterns: {
        youtube: {
          index: 'youtube.com',
          src: 'https://www.youtube.com/embed/7e90gBu4pas',
        },
      },
    },
  });
  /* ---------------------------------------------
 Back top page scroll up
 --------------------------------------------- */

  $.scrollUp({
    scrollText: '<i class="arrow_up"></i>',
    easingType: 'linear',
    scrollSpeed: 900,
    animation: 'fade',
  });

  /* ---------------------------------------------
 WoW plugin
 --------------------------------------------- */

  new WOW().init({
    mobile: true,
  });

  /* ---------------------------------------------
 Smooth scroll
 --------------------------------------------- */

  $('a.section-scroll[href*="#"]:not([href="#"])').on('click', function(event) {
    if (
      location.pathname.replace(/^\//, '') ==
        this.pathname.replace(/^\//, '') ||
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html,body').animate(
          {
            scrollTop: target.offset().top,
          },
          750,
        );
        return false;
      }
    }
  });

  /*----------------------------------------
 Newsletter Subscribe
 --------------------------------------*/

  $('.subscribe-mail').ajaxChimp({
    callback: mailchimpCallRep,
    url: 'mailchimp-post-url', //Replace this with your own mailchimp post URL. Just paste the url inside "".
  });

  function mailchimpCallRep(resp) {
    if (resp.result === 'success') {
      $('.sucess-message')
        .html(resp.msg)
        .fadeIn(1000);
      $('.error-message').fadeOut(500);
    } else if (resp.result === 'error') {
      $('.error-message')
        .html(resp.msg)
        .fadeIn(1000);
    }
  }
});

const moreExamples = {
  id: '4cd00d8d-d7e2-4cef-bd29-20a2e85b3919',
  text: 'The staff is always happy and helpful',
  sentiment_analysis: {
    model: 'general_en',
    score_tag: 'P',
    agreement: 'AGREEMENT',
    subjectivity: 'SUBJECTIVE',
    confidence: '100',
    irony: 'NONIRONIC',
    sentence_list: [
      {
        text: 'The staff is always happy and helpful',
        inip: '0',
        endp: '36',
        bop: 'y',
        confidence: '100',
        score_tag: 'P',
        agreement: 'AGREEMENT',
        segment_list: [
          {
            text: 'The staff is always happy and helpful',
            segment_type: 'main',
            inip: '0',
            endp: '36',
            confidence: '100',
            score_tag: 'P',
            agreement: 'AGREEMENT',
            polarity_term_list: [
              {
                text: 'happy',
                inip: '20',
                endp: '24',
                confidence: '100',
                score_tag: 'P',
                sentimented_concept_list: [
                  {
                    form: 'staff',
                    id: '9431a28626',
                    variant: 'staff',
                    inip: '4',
                    endp: '8',
                    type: 'Top>Organization',
                    score_tag: 'P',
                  },
                ],
              },
              {
                text: 'helpful',
                inip: '30',
                endp: '36',
                confidence: '100',
                score_tag: 'P',
                sentimented_concept_list: [
                  {
                    form: 'staff',
                    id: '9431a28626',
                    variant: 'staff',
                    inip: '4',
                    endp: '8',
                    type: 'Top>Organization',
                    score_tag: 'P',
                  },
                ],
              },
            ],
            segment_list: [
              {
                text: 'always happy and helpful',
                segment_type: 'main',
                inip: '13',
                endp: '36',
                confidence: '100',
                score_tag: 'P',
                agreement: 'AGREEMENT',
                polarity_term_list: [
                  {
                    text: 'happy',
                    inip: '20',
                    endp: '24',
                    confidence: '100',
                    score_tag: 'P',
                  },
                  {
                    text: 'helpful',
                    inip: '30',
                    endp: '36',
                    confidence: '100',
                    score_tag: 'P',
                  },
                ],
              },
            ],
          },
        ],
        sentimented_entity_list: [],
        sentimented_concept_list: [
          {
            form: 'staff',
            id: '9431a28626',
            type: 'Top>Organization',
            score_tag: 'P',
          },
        ],
      },
    ],
    sentimented_entity_list: [],
    sentimented_concept_list: [
      {
        form: 'staff',
        id: '9431a28626',
        type: 'Top>Organization',
        score_tag: 'P',
      },
    ],
  },
};

function renderAnalyzeReview() {
  const divUpperFeedback = document.getElementById('upper-part-feedback');
  let aspectSerializer = [];

  moreExamples.sentiment_analysis.sentence_list.forEach(sentence_list => {
    sentence_list.segment_list.forEach(segment_list => {
      segment_list.polarity_term_list.forEach(polarity_term_list => {
        let typeOfAspect = 'NEU';

        if (
          polarity_term_list.score_tag === 'P' ||
          polarity_term_list.score_tag === 'P+'
        ) {
          typeOfAspect = 'positive';
        } else if (
          polarity_term_list.score_tag === 'N' ||
          polarity_term_list.score_tag === 'N+'
        ) {
          typeOfAspect = 'negative';
        }

        aspectSerializer.push({
          term: polarity_term_list.text,
          typeOfAspect,
        });

        polarity_term_list.sentimented_concept_list.forEach(
          sentimented_concept_list => {
            aspectSerializer.push({
              term: sentimented_concept_list.form,
              typeOfAspect: 'aspect',
            });
          },
        );
      });
    });
  });

  moreExamples.text.split(' ').forEach(element => {
    const newP = document.createElement('p');
    const text = document.createTextNode(element);
    newP.appendChild(text);

    aspectSerializer.forEach(serializeAspect => {
      if (serializeAspect.term === element && serializeAspect.term !== 'NEU') {
        newP.classList.add(serializeAspect.typeOfAspect);
      }
    });

    divUpperFeedback.appendChild(newP);
  });
}

document
  .getElementById('analyze-form')
  .addEventListener('submit', function(event) {
    event.preventDefault();
    const textArea = event.target[0];

    textArea.value = '';

    document.getElementById('feedback-text').classList.remove('hidden');
    document
      .getElementById('feedback-text')
      .classList.add('animated', 'fadeInUp');
  });

renderAnalyzeReview();

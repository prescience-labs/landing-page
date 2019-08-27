/**
 *Function to normalize the payload receive in the review request call and the creation of the analyze text.
 *
 * @param {*} reviewResult
 */
function renderAnalyzeReview(reviewResult) {
  const divUpperFeedback = document.getElementById('upper-part-feedback');

  // To clean the div;
  const range = document.createRange();
  range.selectNodeContents(divUpperFeedback);
  range.deleteContents();

  let aspectSerializer = [];

  reviewResult.sentiment_analysis.sentence_list.forEach(sentence_list => {
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
          term: reviewResult.text.slice(
            parseInt(polarity_term_list.inip),
            parseInt(polarity_term_list.endp) + 1,
          ),
          typeOfAspect,
        });

        if (polarity_term_list.sentimented_concept_list) {
          polarity_term_list.sentimented_concept_list.forEach(
            sentimented_concept_list => {
              aspectSerializer.push({
                term: sentimented_concept_list.variant,
                typeOfAspect: 'aspect',
              });
            },
          );
        }
      });

      if (segment_list.sentimented_concept_list) {
        segment_list.sentimented_concept_list.forEach(
          sentimented_concept_list => {
            aspectSerializer.push({
              term: sentimented_concept_list.variant,
              typeOfAspect: 'aspect',
            });
          },
        );
      }

      if (segment_list.sentimented_entity_list) {
        segment_list.sentimented_entity_list.forEach(
          sentimented_entity_list => {
            aspectSerializer.push({
              term: sentimented_entity_list.form,
              typeOfAspect: 'aspect',
            });
          },
        );
      }
    });
  });

  reviewResult.text.split(' ').forEach(element => {
    const newP = document.createElement('p');
    const text = document.createTextNode(element);
    newP.appendChild(text);

    aspectSerializer.forEach(serializeAspect => {
      const serializeTerm = serializeAspect.term.toUpperCase();
      const reviewTextPart = element.replace(/[.,;_?!%$#]/g, '').toUpperCase();

      if (serializeTerm === reviewTextPart && serializeAspect.term !== 'NEU') {
        newP.classList.add(serializeAspect.typeOfAspect);
      }
    });

    divUpperFeedback.appendChild(newP);
  });
}

/**
 * Function to listen to submissions of example reviews
 */
function analyzeDataSubmitListener() {
  document
    .getElementById('analyze-form')
    .addEventListener('submit', function(event) {
      event.preventDefault();

      const textArea = event.target[0];

      if (textArea.value === '') {
        textArea.classList.add('animated', 'shake');
        setTimeout(() => {
          textArea.classList.remove('animated', 'shake');
        }, 1000);
        return;
      }

      const postParams = Object.assign(
        {},
        {
          text: textArea.value,
        },
      );

      axios
        .post(`${documentServerBaseUrl}/documents`, postParams)
        .then(function(response) {
          renderAnalyzeReview(response.data);
          document.getElementById('feedback-text').classList.remove('hidden');
          document
            .getElementById('feedback-text')
            .classList.add('animated', 'fadeInUp');
          textArea.value = '';
        })
        .catch(function(error) {
          throw new Error(error);
        });
    });
}

analyzeDataSubmitListener();

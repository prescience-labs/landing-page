import envConfiguration from './Config/config';
envConfiguration();

/**
 *Function to normalize the payload receive in the review request call and the creation of the analyze text.
 *
 * @param {*} reviewResult
 */
function renderAnalyzeReview(reviewResult) {
  const divUpperFeedback = document.getElementById('upper-part-feedback');
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

  reviewResult.text.split(' ').forEach(element => {
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

      const axiosConfig = {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin': '*',
        },
      };

      axios
        .post(
          `${process.env.REVIEW_END_POINT}/documents`,
          postParams,
          axiosConfig,
        )
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

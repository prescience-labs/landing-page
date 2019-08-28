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

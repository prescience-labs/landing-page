const moreExamples = {
  text: 'The atmosphere was wonderful but the food was bland and dry.',
  aspects: [
    {
      term: 'atmosphere',
      overall_score: 0.78,
      opinion_terms: [
        {
          value: 'wonderful',
          score: 0.78,
        },
      ],
    },
    {
      term: 'food',
      overall_score: -0.35,
      opinion_terms: [
        {
          value: 'bland',
          score: -0.4,
        },
        {
          value: 'dry',
          score: -0.3,
        },
      ],
    },
  ],
};

const responseExample = {
  status: {
    code: '0',
    msg: 'OK',
    credits: '1',
    remaining_credits: '19989',
  },
  model: 'general_en',
  score_tag: 'NEU',
  agreement: 'DISAGREEMENT',
  subjectivity: 'SUBJECTIVE',
  confidence: '94',
  irony: 'NONIRONIC',
  sentence_list: [
    {
      text: "This is my review and it's FREAKING AWESOME!",
      inip: '0',
      endp: '43',
      bop: 'y',
      confidence: '100',
      score_tag: 'N',
      agreement: 'AGREEMENT',
      segment_list: [
        {
          text: 'This is my review',
          segment_type: 'secondary',
          inip: '0',
          endp: '16',
          confidence: '100',
          score_tag: 'NONE',
          agreement: 'AGREEMENT',
          polarity_term_list: [],
        },
        {
          text: "it's FREAKING AWESOME",
          segment_type: 'main',
          inip: '22',
          endp: '42',
          confidence: '100',
          score_tag: 'N',
          agreement: 'AGREEMENT',
          polarity_term_list: [
            {
              text: 'freak@V',
              inip: '24',
              endp: '34',
              confidence: '100',
              score_tag: 'N',
            },
          ],
        },
        {
          text: '!',
          segment_type: 'secondary',
          inip: '43',
          endp: '43',
          confidence: '100',
          score_tag: 'NONE',
          agreement: 'AGREEMENT',
          polarity_term_list: [],
        },
      ],
      sentimented_entity_list: [],
      sentimented_concept_list: [],
    },
    {
      text:
        'I love marvin gaye and jimmy buffet but i hate john travolta, john lennon, and john from the bible.',
      inip: '45',
      endp: '143',
      bop: 'n',
      confidence: '94',
      score_tag: 'P',
      agreement: 'DISAGREEMENT',
      segment_list: [
        {
          text: 'I love marvin gaye and jimmy buffet',
          segment_type: 'main',
          inip: '45',
          endp: '79',
          confidence: '100',
          score_tag: 'P+',
          agreement: 'AGREEMENT',
          polarity_term_list: [
            {
              text: 'love@V',
              inip: '47',
              endp: '50',
              confidence: '100',
              score_tag: 'P+',
              sentimented_entity_list: [
                {
                  form: 'Marvin Gaye',
                  id: '02b660a51b',
                  variant: 'marvin gaye',
                  inip: '52',
                  endp: '62',
                  type: 'Top>Person>FullName',
                  score_tag: 'P+',
                },
              ],
              sentimented_concept_list: [
                {
                  form: 'buffet',
                  id: '56af6936bd',
                  variant: 'buffet',
                  inip: '74',
                  endp: '79',
                  type: 'Top',
                  score_tag: 'P+',
                },
              ],
            },
          ],
        },
        {
          text: 'i hate john travolta, john lennon, and john from the bible',
          segment_type: 'main',
          inip: '85',
          endp: '142',
          confidence: '100',
          score_tag: 'N',
          agreement: 'AGREEMENT',
          polarity_term_list: [
            {
              text: 'hate',
              inip: '87',
              endp: '90',
              confidence: '100',
              score_tag: 'N',
              sentimented_entity_list: [
                {
                  form: 'John Travolta',
                  id: 'c713cf8959',
                  variant: 'john travolta',
                  inip: '92',
                  endp: '104',
                  type: 'Top>Person>FullName',
                  score_tag: 'N',
                },
                {
                  form: 'John Lennon',
                  id: '2f7fb2b8ef',
                  variant: 'john lennon',
                  inip: '107',
                  endp: '117',
                  type: 'Top>Person>FullName',
                  score_tag: 'N',
                },
              ],
            },
          ],
          sentimented_concept_list: [
            {
              form: 'bible',
              id: '35d1e8173e',
              variant: 'bible',
              inip: '138',
              endp: '142',
              type: 'Top>Product>CulturalProduct>Printing>Book',
              score_tag: 'NONE',
            },
          ],
        },
      ],
      sentimented_entity_list: [
        {
          form: 'Marvin Gaye',
          id: '02b660a51b',
          type: 'Top>Person>FullName',
          score_tag: 'P+',
        },
        {
          form: 'John Lennon',
          id: '2f7fb2b8ef',
          type: 'Top>Person>FullName',
          score_tag: 'N',
        },
        {
          form: 'John Travolta',
          id: 'c713cf8959',
          type: 'Top>Person>FullName',
          score_tag: 'N',
        },
      ],
      sentimented_concept_list: [
        {
          form: 'bible',
          id: '35d1e8173e',
          type: 'Top>Product>CulturalProduct>Printing>Book',
          score_tag: 'NONE',
        },
        {
          form: 'buffet',
          id: '56af6936bd',
          type: 'Top',
          score_tag: 'P+',
        },
      ],
    },
  ],
  sentimented_entity_list: [
    {
      form: 'Marvin Gaye',
      id: '02b660a51b',
      type: 'Top>Person>FullName',
      score_tag: 'P+',
    },
    {
      form: 'John Lennon',
      id: '2f7fb2b8ef',
      type: 'Top>Person>FullName',
      score_tag: 'N',
    },
    {
      form: 'John Travolta',
      id: 'c713cf8959',
      type: 'Top>Person>FullName',
      score_tag: 'N',
    },
  ],
  sentimented_concept_list: [
    {
      form: 'bible',
      id: '35d1e8173e',
      type: 'Top>Product>CulturalProduct>Printing>Book',
      score_tag: 'NONE',
    },
    {
      form: 'buffet',
      id: '56af6936bd',
      type: 'Top',
      score_tag: 'P+',
    },
  ],
};

import { React } from 'react';

import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import { Review } from './client/components';


describe('Review', () => {
  it('has a child div with className header', () => {
    const review = shallow(
      <Review
        key={1}
        id={1}
        name={'test'}
        avatar={'img'}
        reviewAge={100}
        content={'this is a test'}
        allReviews={[]}
        seeAllReviewsMode={false}
      />,
    );
     expect(review.find('.header').to.have.lengthOf(1))
  });
});

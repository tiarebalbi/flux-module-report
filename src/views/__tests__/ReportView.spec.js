import React from 'react';
import { mount } from 'enzyme';

import ReportView from '../ReportView';

describe('ReportView', () => {
  const wrapper = mount(<ReportView />);

  it('should load component', () => {
    expect(wrapper).toExist();
  });
});

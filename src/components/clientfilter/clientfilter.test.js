import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Clientfilter from './Clientfilter';

configure({ adapter: new Adapter()});

describe('client filter tests:', () => {
    let wrapper = shallow(<Clientfilter />);

    it('parent div should load', () => {
        expect(wrapper.find('.filter-container'));
    })

    it('client filter should show two drop downs', () => {
        expect(wrapper.find('.dropdown-filter')).toHaveLength(2);
    })
});
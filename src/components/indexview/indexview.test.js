// for a container im not testing connection to redux just the props and render method really

import React from 'react';

import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import IndexView from './indexview';

configure({ adapter: new Adapter()});

describe('Index View Tests running:', () => {
    let wrapper = mount(<IndexView />);

    it('should render loan apps when recieved as props from store', () => {
        wrapper.setProps({
            storeApplications: [
                {
                appId: 192,
                client: 'Nationwide',
                status: 'Approved',
                amount: 500
                }
            ]
        });
        console.log(wrapper.find('.loans-container'));

        expect(wrapper.find('.loans-container')).toHaveLength(1);
    })
});
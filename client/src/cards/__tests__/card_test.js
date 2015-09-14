import {expect} from 'chai';
import React, { findDOMNode } from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import _ from 'lodash';


//Component to test
import Card from '../Card';

describe('Card Component', function() {
    it('should render a title card', function() {
        var card = TestUtils.renderIntoDocument(<Card title="Test"/>);
        var cardDOM = findDOMNode(card);
        var hrs = TestUtils.scryRenderedDOMComponentsWithTag(card, "hr");
        expect(hrs).to.be.length(0);
    });
    it('should render a title and body card', function() {
        var card = TestUtils.renderIntoDocument(<Card title="Test"><p>Body</p></Card>);
        var cardDOM = findDOMNode(card);
        var hrs = TestUtils.scryRenderedDOMComponentsWithTag(card, "hr");
        var ps = TestUtils.scryRenderedDOMComponentsWithTag(card, "p");
        
        var bodyText = findDOMNode(ps[0]).textContent;
        
        expect(bodyText).to.equal("Body");
        expect(hrs).to.be.length(1);
    })
});

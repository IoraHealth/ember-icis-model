/* jshint expr:true */
import Ember from 'ember';
import { expect } from 'chai';
import {
  describeModel,
  it
} from 'ember-mocha';

describeModel(
  'issue',
  'Issue',
  {
    // Specify the other units that are required for this test.
    needs: ['model:patient']
  },
  function() {
    // Replace this with your real tests.
    it('has a patient association', function() {
      var Issue = this.store().modelFor('issue');
      var relationship = Ember.get(Issue, 'relationshipsByName').get('patient');

      expect(relationship.key).to.eql('patient');
      expect(relationship.kind).to.eql('belongsTo');
    });
  }
);

import Ember from 'ember';

import { expect } from 'chai';
import { describeModel, it } from 'ember-mocha';

describeModel(
  'note',
  'Note',
  {
    needs: [
      'serializer:note',
      'model:issue',
      'model:patient',
      'model:currentPracticeUser',
      'model:practice'
    ]
  },

  function() {

    it('does not serialize read only fields', function() {
      var record = this.subject();
      var serializedRecord = record.serialize();
      var keys = Ember.keys(serializedRecord);

      var readOnlyFields = [
        'issue_name',
        'created_at',
        'patient_name',
        'issue_id',
        'closed_date'
      ];

      readOnlyFields.forEach(function(fieldName) {
        expect(keys).not.to.contain(fieldName);
      });
    });

    it('serializes createdBy as created_by_uid', function() {
      var store  = this.store();
      var record = this.subject();

      Ember.run(function() {
        var createdByUser = store.createRecord('currentPracticeUser',
                                               { id: 'someuserid' });
        record.set('createdBy', createdByUser);
      });

      var serializedRecord = record.serialize();

      expect(serializedRecord.created_by_uid).to.eql('someuserid');
    });

    it('serializes patient as patient_guid', function() {
      var store  = this.store();
      var record = this.subject();

      Ember.run(function() {
        var patient = store.createRecord('patient', { id: 'somepatientguid' });
        record.set('patient', patient);
      });

      var serializedRecord = record.serialize();

      expect(serializedRecord.patient_guid).to.eql('somepatientguid');
    });

    it('serializes issues as issue_ids', function() {
      var store  = this.store();
      var record = this.subject();

      Ember.run(function() {
        var issue = store.createRecord('issue', { id: '54321' });
        record.get('issues').pushObject(issue);
      });

      var serializedRecord = record.serialize();

      expect(serializedRecord.issue_ids).to.deep.eql(['54321']);
    });
  }
);

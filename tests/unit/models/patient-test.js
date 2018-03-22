import Ember from 'ember';
import { expect } from 'chai';
import { describeModel, it } from 'ember-mocha';
import { describe, beforeEach } from 'mocha';

describeModel(
  'patient',
  'Patient',
  {
    needs: ['model:issue', 'model:practice']
  },

  function() {
    beforeEach(function() {
      this.patient = this.subject();
    });

    it('is associated to the practice', function() {
      var Patient = this.store().modelFor('patient');
      var relationship = Ember.get(Patient, 'relationshipsByName').get('practice');

      expect(relationship.key).to.eql('practice');
      expect(relationship.kind).to.eql('belongsTo');
    });

    describe('#fullName', function() {
      it('when there is only a first name', function() {
        var patient = this.patient;

        Ember.run(function() {
          patient.set('first_name', "Molly");
        });

        expect(patient.get('fullName')).to.eql('Molly');
      });

      it('when there is only a last name', function() {
        var patient = this.patient;

        Ember.run(function() {
          patient.set('last_name', "Ringwald");
        });

        expect(patient.get('fullName')).to.eql('Ringwald');
      });

      it('when there is a first and last name', function() {
        var patient = this.patient;

        Ember.run(function() {
          patient.set('first_name', "Molly");
          patient.set('last_name', "Ringwald");
        });

        expect(patient.get('fullName')).to.eql('Molly Ringwald');
      });
    });

    describe('#facesheetUri', function() {
      it('returns the appropriate uri', function() {
        this.patient.set('staffAppUrl', 'http://example.org');
        this.patient.set('id', 'abc123');

        expect(this.patient.get('facesheetUri')).to.
          eql('http://example.org/classic/#patients/abc123');
      });
    });
  }
);

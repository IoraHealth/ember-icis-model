/* jshint expr:true */
import Ember from 'ember';
import { expect } from 'chai';
import { describeModel, it } from 'ember-mocha';
import { beforeEach } from 'mocha';

describeModel(
  'note',
  'Note',
  {
    needs: [
      'model:issue',
      'model:patient',
      'model:currentPracticeUser',
      'model:practice'
    ]
  },

  function() {
    beforeEach(function() {
      this.Note = this.store().modelFor('note');
    });

    describe('#status', function() {
      var model;

      describe("note is closed", function() {
        beforeEach(function() {
          model = this.subject({closed_date: moment()});
        });

        it("returns closed", function() {
          expect(model.get('status')).to.eq("closed");
        });
      });

      describe("note is overdue", function() {
        beforeEach(function() {
          model = this.subject({created_at: moment().subtract(36, 'hours')});
        });

        it("returns overdue", function() {
          expect(model.get('status')).to.eq("overdue");
        });
      });

      describe("note is pending", function() {
        beforeEach(function() {
          model = this.subject({created_at: moment().subtract(12, 'hours')});
        });

        it("returns pending", function() {
          expect(model.get('status')).to.eq("pending");
        });
      });
    });

    describe("#closed", function() {
      var model;

      describe("model is closed", function() {
        beforeEach(function() {
          model = this.subject({status: 'closed'});
        });

        it("returns true", function() {
          expect(model.get('closed')).to.be.true;
        });
      });

      describe("model is not closed", function() {
        beforeEach(function() {
          model = this.subject({status: 'pending'});
        });

        it("returns false", function() {
          expect(model.get('closed')).to.be.false;
        });
      });
    });

    it('has a patient association', function() {
      var relationship = Ember.get(this.Note, 'relationshipsByName').get('patient');

      expect(relationship.key).to.eql('patient');
      expect(relationship.kind).to.eql('belongsTo');
    });

    it('has a createdBy association', function() {
      var relationship = Ember.get(this.Note, 'relationshipsByName').get('createdBy');

      expect(relationship.key).to.eql('createdBy');
      expect(relationship.kind).to.eql('belongsTo');
    });

    it('has a issues association', function() {
      var relationship = Ember.get(this.Note, 'relationshipsByName').get('issues');

      expect(relationship.key).to.eql('issues');
      expect(relationship.kind).to.eql('hasMany');
    });
  }
);

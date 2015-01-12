/* jshint expr:true */
import {
  describeModel,
  it
} from 'ember-mocha';

describeModel(
  'note',
  'Note',
  {
    // Specify the other units that are required for this test.
      needs: []
  },
  function() {
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
  }
);

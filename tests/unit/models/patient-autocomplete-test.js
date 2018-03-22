import {
  describeModel,
  it
} from 'ember-mocha';
import { describe, beforeEach } from 'mocha';
import { expect } from 'chai';
import moment from 'moment';

describeModel(
  'patient-autocomplete',
  'PatientAutocomplete',
  {
    needs: []
  },
  function() {
    describe("#prettyDob", function() {
      var model, dob;

      beforeEach(function() {
        dob = moment();
        model = this.subject({dob: dob});
      });

      it("formats the date to MM/DD/YYYY format", function() {
        expect(model.get('prettyDob')).to.eq(dob.format('MM/DD/YYYY'));
      });
    });

    describe("#fullName", function() {
      var model;

      describe("middle_name is empty string", function() {
        beforeEach(function() {
          model = this.subject({
            first_name: "Gorbechev",
            middle_name: "",
            last_name: "Thunderhorse",
            nickname: "Gorby",
            prettyDob: "01/01/2000"
          });
        });

        it("does not set the middle_name in the fullName", function() {
          expect(model.get('fullName')).to.eq("Gorbechev \"Gorby\" Thunderhorse - 01/01/2000");
        });
      });

      describe("middle_name is null", function() {
        beforeEach(function() {
          model = this.subject({
            first_name: "Gorbechev",
            middle_name: null,
            last_name: "Thunderhorse",
            nickname: "Gorby",
            prettyDob: "01/01/2000"
          });
        });

        it("does not set the middle_name in the fullName", function() {
          expect(model.get('fullName')).to.eq("Gorbechev \"Gorby\" Thunderhorse - 01/01/2000");
        });
      });

      describe("nickname is empty string", function() {
        beforeEach(function() {
          model = this.subject({
            first_name: "Gorbechev",
            middle_name: "Puff Puff",
            last_name: "Thunderhorse",
            nickname: "",
            prettyDob: "01/01/2000"
          });
        });

        it("does not set the nickname in the fullName", function() {
          expect(model.get('fullName')).to.eq("Gorbechev Puff Puff Thunderhorse - 01/01/2000");
        });
      });

      describe("nickname is null", function() {
        beforeEach(function() {
          model = this.subject({
            first_name: "Gorbechev",
            middle_name: "Puff Puff",
            last_name: "Thunderhorse",
            nickname: null,
            prettyDob: "01/01/2000"
          });
        });

        it("does not set the nickname in the fullName", function() {
          expect(model.get('fullName')).to.eq("Gorbechev Puff Puff Thunderhorse - 01/01/2000");
        });
      });

      describe("has a nickname", function() {
        beforeEach(function() {
          model = this.subject({
            first_name: "Gorbechev",
            middle_name: "Puff Puff",
            last_name: "Thunderhorse",
            nickname: "Gorby",
            prettyDob: "01/01/2000"
          });
        });

        it("sets the nickname in the fullName", function() {
          expect(model.get('fullName')).to.eq('Gorbechev "Gorby" Puff Puff Thunderhorse - 01/01/2000');
        });
      });
    });
  }
);

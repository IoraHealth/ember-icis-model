/* jshint expr:true */
import {
  describeModel,
  it
} from 'ember-mocha';

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

      describe("has no nickname", function() {
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

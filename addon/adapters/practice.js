import DS from "ember-data";

export default DS.RESTAdapter.extend({
  host: "https://staging.icisapp.com",
  namespace: "api/practices/v2"
});

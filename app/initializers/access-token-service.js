import AccessToken from 'ember-icis-model/services/access-token';

export function initialize(container, application) {
  application.inject('adapter:note', 'accessTokenWrapper', 'service:access-token');
  application.inject('adapter:practice', 'accessTokenWrapper', 'service:access-token');
  application.inject('adapter:patient-autocomplete', 'accessTokenWrapper', 'service:access-token');
  application.inject('adapter:staff-member', 'accessTokenWrapper', 'service:access-token');
}

export default {
  name: 'access-token-service',
  initialize: initialize
};

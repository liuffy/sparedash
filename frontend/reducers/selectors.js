import _ from 'lodash';

export const selectUser = ({ users }, id) => {
   const user = users[id] || {};
   return user
 }

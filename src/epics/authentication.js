import {map, take} from 'rxjs/operators';

import {exampleAction} from '../actions/authenticationActions';

const authenticationEpic = action$ => action$.pipe(
  take(1),
  map(() => exampleAction()),
);

export default authenticationEpic;

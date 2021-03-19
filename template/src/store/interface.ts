import { UserState } from './user';

interface RootStateTypes {
  name: string;
  version: string;
}

export default RootStateTypes;

export interface AllStateTypes extends RootStateTypes {
  user: UserState;
}
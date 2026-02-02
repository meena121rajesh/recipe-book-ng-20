import { environment } from './environment.local';

export const environmentConfig = {

  apiKey: environment.apiKey,
  authDomain: environment.authDomain,
  projectId: environment.projectId,
  storageBucket: environment.storageBucket,
  messagingSenderId: environment.messagingSenderId,
  appId: environment.appId,
  measurementId: environment.measurementId,

  signupUrl: `${environment.signupUri}`,
  signinUri: `${environment.signinUri}`
};

import { AuthConfig } from 'angular-oauth2-oidc';

export const authCodeFlowConfig: AuthConfig = {
    issuer: 'https://api.asgardeo.io/t/orgenox1/oauth2/token',
    clientId: 'cMiX7ul5LdNI8CNVEeNqFMcFpvEa',
    responseType: 'code',
    redirectUri: 'http://localhost:4200/dashboard',
    tokenEndpoint: 'https://api.asgardeo.io/t/orgenox1/oauth2/token',
    skipIssuerCheck: true,
    logoutUrl: 'https://api.asgardeo.io/t/orgenox1/oidc/logout',
    postLogoutRedirectUri: 'https://d7eaf07c-fb05-4851-88da-2e5dfd0cd730-dev.e1-us-cdp-2.choreoapis.dev/ballerina/ballerina/dash-ecb/v1.0',
    scope: 'openid profile internal_user_mgt_view', 
    useSilentRefresh: false,
    silentRefreshTimeout: 50000000,
    timeoutFactor: 0.25, 
    sessionChecksEnabled: true,
    showDebugInformation: true,
    clearHashAfterLogin: true,
    nonceStateSeparator : 'semicolon',
    strictDiscoveryDocumentValidation:false,
  
    
   
    
   };
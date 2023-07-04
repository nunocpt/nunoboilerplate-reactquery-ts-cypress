const CLIENT_ID = process.env.REACT_APP_CLIENT_ID || "0oa5romrb3LYSVqSe5d7";
const ISSUER = process.env.REACT_APP_ISSUER || "https://dev-82853032.okta.com/oauth2/default";
const OKTA_TESTING_DISABLEHTTPSCHECK = process.env.REACT_APP_OKTA_TESTING_DISABLEHTTPSCHECK || false;
const BASENAME = process.env.REACT_APP_PUBLIC_URL || "";
const REDIRECT_URI = `${window.location.origin}` + "/login/callback";
const USE_INTERACTION_CODE =
  process.env.REACT_APP_USE_INTERACTION_CODE === "true" || false;

export default {
  oidc: {
    clientId: CLIENT_ID,
    issuer: ISSUER,
    redirectUri: REDIRECT_URI,
    scopes: ["openid", "profile", "email", "groups"],
    pkce: true,
    disableHttpsCheck: OKTA_TESTING_DISABLEHTTPSCHECK,
    useInteractionCode: USE_INTERACTION_CODE,
  },
  resourceServer: {
    messagesUrl: "http://localhost:8000/api/messages",
  },
  app: {
    basename: BASENAME,
  },
};

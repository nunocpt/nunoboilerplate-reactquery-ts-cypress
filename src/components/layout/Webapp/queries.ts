import axios from "axios";

// const env = process.env.REACT_APP_ENDPOINTS_ENV;
// const apiUrl = "ERROR:no-REACT_APP_ENDPOINTS_ENV-defined";

const deleteThisIdentityAfter = {"id":"0e9eb2db-fbcb-4790-9c00-ab905676e43d","userId":"0e9eb2db-fbcb-4790-9c00-ab905676e43d","identityId":"00u5hbtst7vbQ1LMV5d7","idp":"okta","groups":[{"name":"investors","description":"Investors","roles":[{"name":"webapp-administrator","description":"Web App Role for web app Service","service":"web-app-api","capabilities":[]}]}]};

const deleteThisTcsAfter = {
  "tcsVersion": 5
};

export const getUserCredentials = async (token: string | undefined) => {
  /* (env === "dev") && (apiUrl = `${process.env.REACT_APP_API_URL}/afterw-okta-me`);
  (env === "qa") && (apiUrl = `${process.env.REACT_APP_API_URL}/users/me`);
  const res = await axios.get(
    apiUrl,
    {
      headers: {
        token: token as string,
      },
    }
  )
    .catch(function (error) {
      if (error.response || error.request){
        return deleteThisAfter;
      }
    }); */

  return deleteThisIdentityAfter;
};

export const getMetadata = async (
  token: string | undefined,
  userId: string | undefined
) => {
  // const res = await axios.get(`${process.env.REACT_APP_API_URL}/metadata`, {
  //   headers: {
  //     token: token as string,
  //     userId: userId as string,
  //   },
  // });
  return deleteThisTcsAfter;
};

export const updateTCS = async (user: { tcs: boolean; tcsVersion: number }) => {
  const res = await axios.patch(
    `${process.env.REACT_APP_API_URL}/after-okta-me`,
    user
  );

  return res.data;
};

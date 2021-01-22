import React from "react";
const hostUrl = `https://api.spaceXdata.com/v3/launches`;

const httpGateaway = {
  async getSpaceXLunchesData(params) {
    console.log(params);
    let urlParams = params.reduce((acc, val) => `${acc}&${val.key}=${val.value}`,"");
    const response = await fetch(`${hostUrl}?${urlParams}`);
    const result = await response.json();
    return result;
  },
};

export default httpGateaway;

import fetchReq from "../utils/requestUtil";
import { SAMPLE_OKR } from "../constants/urls";

export const getSampleOKR = () => {
  return fetchReq.get(SAMPLE_OKR);
};

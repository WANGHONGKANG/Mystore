import axios from "axios"
import qs from "qs"

export const reqMenuList = () => {
  return axios({
    url: baseUrl + "/api/menuedit",
    method: "post",
    data: qs.stringify(from)
  })
}
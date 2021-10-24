import axios from "axios";

export default function verifyEmail() {
  const data = {
    code: "2u05go",
  };

  axios
    .post(`${process.env.REACT_APP_SERVER_URL}/verifyEmail`, data, { withCredentials: true })
    .then((res) => {
      console.log(res.status, res.statusText, res.data);
      console.log(res.headers);
    })
    .catch((err) => {
      console.log(err);
    });
}

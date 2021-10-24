import axios from "axios";

export default function loginHandler() {
  const data = {
    user: "test",
    password: "password1",
  };

  axios
    .post(`${process.env.REACT_APP_SERVER_URL}/login`, data, { withCredentials: true })
    .then((res) => {
      console.log(res.status, res.statusText, res.data);
      console.log(res.headers);
    })
    .catch((err) => {
      console.log(err);
    });
}

import axios from "axios";
import Config from "../../config";
import { useState } from "react";

export default function useListUser() {
  const [user, setUser] = useState([]);
  const handleGetuser = () => {
    axios.get(Config.BACKEND_URL + "user/list").then((response) => {
      setUser(response.data);
    });
  };
  return { user, handleGetuser };
}

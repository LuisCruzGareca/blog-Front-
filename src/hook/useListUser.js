import Config from "../../config";
import { useState } from "react";
import api from "../interceptor/interceptor";

export default function useListUser() {
  const [user, setUser] = useState([]);
  const handleGetuser = () => {
    api.get(Config.BACKEND_URL + "user/list").then((response) => {
      setUser(response.data);
    });
  };
  return { user, handleGetuser };
}

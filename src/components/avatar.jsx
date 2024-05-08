import { useEffect, useState } from "react";
import apiUrl from "../config";
import axios from "axios";
import { settoken } from "../helpers/token-helper";

const Avatar = ({ id }) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    const PegaImagem = async () => {
      const response = await axios.get(`${apiUrl}/avatar/avatar/${id}`, {
        headers: {
          Authorization: `Bearer ${settoken}`,
        },
      });
      if (response.data.avatar === null) {
        const imgdefault = "avatar.png";
        setImage(imgdefault);
      } else {
        setImage(response.data.avatar.avatar);
      }
    };
    PegaImagem();
  }, [id]);

  return (
    <img
      className="avatar rounded rounded-circle m-auto"
      src={apiUrl + "/imagens/" + image}
      alt="Avatar"
    />
  );
};
export default Avatar;

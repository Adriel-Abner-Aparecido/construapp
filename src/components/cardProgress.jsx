import { Card, CardHeader, CardBody, Button } from "react-bootstrap";
import ProgressObras from "./progressObras";
import { useEffect, useState } from "react";
import apiUrl from "../config";
import axios from "axios";
import { settoken } from "../helpers/token-helper";

const CardProgress = () => {
  const [obras, setObras] = useState([]);

  useEffect(() => {
    const pegaObras = async () => {
      try {
        const response = await axios.get(`${apiUrl}/obras/verObras`, {
          headers: {
            Authorization: `Bearer ${settoken}`,
          },
        });
        setObras(response.data.obras);
      } catch (error) {
        console.error(error);
      }
    };
    pegaObras();
  }, []);

  return (
    <Card className="card-info">
      <CardHeader>
        Progresso
        <div className="float-end">
          <Button
            href="/obras/cadastroObras"
            variant="link"
            className="p-0 m-0"
          >
            <span className="material-symbols-outlined">add_circle</span>
          </Button>
        </div>
      </CardHeader>
      <CardBody>
        {obras.slice(0, 4).map((obra, index) => (
          <div key={index}>
            {obra.nomeObra}
            <ProgressObras id={obra._id} />
          </div>
        ))}
      </CardBody>
    </Card>
  );
};
export default CardProgress;

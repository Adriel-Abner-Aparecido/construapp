import axios from "axios";
import { useEffect, useState } from "react";
import apiUrl from "../config";
import { settoken } from "../helpers/token-helper";

const Unidades = ({ id }) => {
  const [numerosObra, setNumerosObra] = useState([]);
  const [unidades, setUnidades] = useState(0);

  useEffect(() => {
    const fetchUnidadesObra = async () => {
      try {
        const response = await axios.get(
          `${apiUrl}/numerosObra/numerosObra/${id}`,
          {
            headers: {
              Authorization: `Bearer ${settoken}`,
            },
          }
        );
        setNumerosObra(response.data.numerosObra);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUnidadesObra();
  }, [id]);

  useEffect(() => {
    const somaunidades = numerosObra.reduce((acc, numeros) => {
      const a = parseInt(numeros.numeroAndares);
      const b = parseInt(numeros.numeroUnidades);
      return acc + a * b;
    }, 0);
    setUnidades(somaunidades);
  }, [numerosObra]);

  return <>{unidades}</>;
};
export default Unidades;

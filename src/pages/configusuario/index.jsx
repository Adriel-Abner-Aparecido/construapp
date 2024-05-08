import { Button, Col, Container, Row } from "react-bootstrap";
import Avatar from "../../components/avatar";
import { useNavigate } from "react-router-dom";
import ProgressAreaUsuarios from "../../components/progressAreaUsuario";
import FormAvatar from "../../components/formAvatar";
import { id, userName } from "../../helpers/token-helper";

const ConfigUsuario = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    return navigate("/login");
  };

  return (
    <Container className="pb-5 p-0">
      <Row className="bg-light pt-5 pb-3 m-0">
        <Col>
          <Row>
            <Col className="d-flex justify-content-center">
              <Avatar id={id} />
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center p-2">
              <h3 className="my-auto">{userName}</h3>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center">
              <Button variant="link" onClick={handleLogout}>
                Sair
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="p-0 m-0">
        <div
          className="p-0 m-0"
          style={{ background: "#E9ECEF", height: "5px" }}
        >
          <ProgressAreaUsuarios id={id} />
        </div>
      </Row>
      <Row className="d-flex justify-content-center m-0">
        <Col xxl={4} className="p-5">
          <FormAvatar id={id} />
        </Col>
      </Row>
      <Row className="d-flex justify-content-center m-0">
        <Col xxl={4} className="d-flex justify-content-center">
          <Button href="/areaUsuario" className="m-auto">
            Voltar
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
export default ConfigUsuario;

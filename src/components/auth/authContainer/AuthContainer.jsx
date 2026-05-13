import { Card, Row } from "react-bootstrap";
import ComboLanguage from "../../services/translation/comboLanguage/ComboLanguage";
import { useTranslate } from "../../services/translation/useTranslate";

const AuthContainer = ({ children }) => {
  const translate = useTranslate();
  return (
    <Card
      className="mt-5 mx-auto p-3 px-5 shadow"
      style={{ maxWidth: "400px" }}
    >
      <Card.Body>
        <Row className="mb-2">
          <h5>{translate("welcome_title_login")}</h5>
        </Row>
        <ComboLanguage />

        {children}
      </Card.Body>
    </Card>
  );
};

export default AuthContainer;

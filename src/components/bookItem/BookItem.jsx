import { Badge, Card, Button } from "react-bootstrap";
import { useState } from "react";
import { Star, StarFill } from "react-bootstrap-icons";
const BookItem = ({
  title,
  author,
  rating,
  pageCount,
  imageUrl,
  available,
  onSelectedBook,
}) => {
  const [newTitle, setNewTitle] = useState(title);

  const handleClick = () => {
    setNewTitle(newTitle);
    console.log(newTitle);
    onSelectedBook(newTitle);
  };

  return (
    <Card style={{ width: "22rem" }} className="mx-3">
      <Card.Img
        height={400}
        variant="top"
        src={imageUrl !== "" ? imageUrl : "https://bit.ly/47Nylzk"}
      />
      <Card.Body>
        <div className="mb-2">
          {available ? (
            <Badge bg="success">Disponible</Badge>
          ) : (
            <Badge bg="danger">Reservado</Badge>
          )}
        </div>
        <Card.Title>{newTitle}</Card.Title>
        <Card.Subtitle>{author}</Card.Subtitle>
        <div>
          {Array.from({ length: 5 }, (_, index) =>
            index < rating ? (
              <StarFill key={index} className="text-warning" />
            ) : (
              <Star key={index} className="text-warning" />
            )
          )}
        </div>
        <p>{pageCount} páginas</p>
        <Button onClick={handleClick}>Seleccionar libro</Button>
      </Card.Body>
    </Card>
  );
};

export default BookItem;

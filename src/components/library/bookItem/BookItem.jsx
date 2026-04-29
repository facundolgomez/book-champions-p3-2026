import { Badge, Card, Button } from "react-bootstrap";
import { useState } from "react";
import { Star, StarFill } from "react-bootstrap-icons";
import MyModal from "../../ui/modal/MyModal";
import { useNavigate } from "react-router";
import { successToast, errorToast } from "../../ui/notifications/notifications";
const BookItem = ({
  id,
  title,
  author,
  rating,
  pageCount,
  summary,
  imageUrl,
  available,
  onSelectedBook,
  onBookDeleted,
}) => {
  const [newTitle, setNewTitle] = useState(title);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`${id}`, {
      state: {
        book: {
          title,
          author,
          rating,
          pageCount,
          summary,
          imageUrl,
          available,
        },
      },
    });
  };

  const handleConfirmDelete = () => {
    //hacer la eliminacion del libro aca dentro
    setShowModal(false);
    fetch(`http://localhost:3000/books/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error en el servidor");
        }
        onBookDeleted(id);
        successToast(`Libro con el id ${id} eliminado correctamente`);
      })
      .catch((err) => errorToast(err.message));
  };

  return (
    <>
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
          <Button
            style={{ marginLeft: "10px" }}
            variant="danger"
            onClick={() => setShowModal(true)}
          >
            Eliminarr libro
          </Button>
        </Card.Body>
      </Card>
      <MyModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleConfirmDelete}
      />
    </>
  );
};

export default BookItem;

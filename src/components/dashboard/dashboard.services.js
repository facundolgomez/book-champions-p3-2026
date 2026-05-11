const baseUrl = import.meta.env.VITE_BASE_URL_SERVER_URL;

export const getBooks = (onSuccess, onError) => {
  fetch(`${baseUrl}/books`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("book-champions-token")}`,
    },
  })
    .then((res) => {
      if (!res.ok) {
        return res.json().then((err) => {
          throw new Error(err.message || "Error al obtener los libros");
        });
      }
      return res.json();
    })
    .then(onSuccess)
    .catch(onError);
};

export const addBook = (newBook, onSuccess, onError) => {
  fetch("http://localhost:3000/books", {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("book-champions-token")}`,
    },
    method: "POST",
    body: JSON.stringify(newBook),
  })
    .then((res) => {
      if (!res.ok) {
        return res.json().then((err) => {
          throw new Error(err.message || "Error al crear el libro");
        });
      }
      return res.json();
    })
    .then(onSuccess)
    .catch(onError);
};

/**
 * USE STATE
 * HOOK DE REACT PARA QUE PODAMOS NOSOTROS CONTROLAR UN ESTADO LOCAL
 * UN ESTADO LOCAL SIGNIFICA QUE PODAMOS CANALIZAR/FLUIR/MANEJAR DATOS DENTRO DEL COMPONENTE
 */

import { useState } from "react";
import Alert from "../ui/Alert";

const Comment = ({ id, title, description, deleteFunction }) => {
  return (
    <article className="flex justify-between py-5 border-b border-gray-200">
      <div className="max-w-6xl">
        <h3 className="text-lg leading-8 font-medium text-gray-900">{title}</h3>
        <p className="mt-2 max-w-4xl text-sm text-gray-500">{description}</p>
      </div>
      <div className="mt-3 flex">
        <button
          className="inline-flex ml-6 max-h-12 items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          onClick={() => deleteFunction(id)}
        >
          Eliminar
        </button>
        <button className="inline-flex ml-6 max-h-12 items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
          Editar
        </button>
      </div>
    </article>
  );
};

export default function Crud() {
  // 1. HOOKS
  // CREAR NUEVO COMENTARIO
  const [newComment, setNewComment] = useState({
    title: "",
    description: "",
  });

  // OBTENER LISTADO DE COMENTARIOS
  const [comments, setNewComments] = useState([]);

  // ENTRAR A MODO EDITAR

  // MANEJO DE IDENTIFICADORES

  // MANEJO DE ERRORES

  // 2. FORMULARIO

  const handleChange = (event) => {
    console.log("event", event);
    console.log("event", event.target.name);

    setNewComment({
      ...newComment,
      [event.target.name]: event.target.value,
    });
  };

  // 3. FUNCIONES CRUD
  const addComment = (event) => {
    // 1. DETENER LA RECARGA AUTOMÁTICA
    event.preventDefault();

    // 2. EVALUACIÓN DE LOS INPUTS. MANEJO DE ERRORES EN INPUTS.
    if (!newComment.title || !newComment.description) {
      console.log("hubo un error");
      return;
    }

    // 3. AGREGAR COMENTARIO A NUESTRO LISTADO DE COMENTARIOS
    setNewComments([newComment, ...comments]);

    // 4. BORRAR EL VALOR DEL INPUT
    setNewComment({
      title: "",
      description: "",
    });
  };

  const deleteComment = (id) => {
    // 1. FILTAR EL COMENTARIO QUE NECESITO BORRAR Y GENERAR UN ARREGLO NUEVO SIN ESE COMENTARIO A BORRAR
    const filteredArray = comments.filter((item) => item.id !== id);

    // 2. ACTUALIZAMOS EL ESTADO LOCAL DE COMENTARIOS CON EL ARREGLO FILTRADO
    setNewComments(filteredArray);
  };

  console.log("newComment", newComment);

  return (
    <>
      {/* TÍTULO */}
      <div className="bg-blue-400 py-4">
        <h2 className="text-center text-3xl text-gray-900 sm:text-4xl">
          Caja de comentarios
        </h2>
      </div>
      <br />
      {/* FORMULARIO */}
      <div className="max-w-5xl mx-auto px-6 pb-6 border border-solid border-b-2">
        <form onSubmit={addComment}>
          <h3>Asunto</h3>
          <input
            name="title"
            className="border shadow-sm mt-2 rounded-md border-gray-200 w-full"
            onChange={(e) => handleChange(e)}
            value={newComment.title}
          />
          <h3>Descripción</h3>
          <textarea
            name="description"
            className="mt-2 border shadow-sm rounded-md border-gray-200 w-full"
            onChange={(e) => handleChange(e)}
            value={newComment.description}
          />
          <button className="mt-8 inline-flex max-h-12 items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            Agregar
          </button>
        </form>
      </div>

      {/* LISTADO DE COMENTARIOS */}
      <div className="max-w-5xl mx-auto px-6">
        {comments.length === 0 ? (
          <>
            <div className="my-8">
              <Alert message={"No hay comentarios aún..."} />
            </div>
          </>
        ) : (
          comments.map((e) => (
            <Comment
              key={e.id}
              id={e.id}
              title={e.title}
              description={e.description}
              deleteFunction={deleteComment}
            />
          ))
        )}
      </div>
    </>
  );
}

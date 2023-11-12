import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddTaskButton from "./Components/AddTaskButton";
import AddTaskModal from "./Components/AddTaskModal";

function App() {
  const [notes, setNotes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Hacer una solicitud GET a la API
    axios.get('http://localhost:3000/api/note')
      .then((response) => {
        // Actualizar el estado con los datos de la API
        setNotes(response.data);
      })
      .catch((error) => {
        console.error('Error al cargar datos de la API: ' + error);
      });
  }, []); // Usamos un arreglo vacío para asegurarnos de que useEffect se ejecute solo una vez al montar el componente

  const showModal = () => {
    setIsModalOpen(true);
  };

  const addNote = (newNote) => { // Cambiar el nombre de la función y el parámetro
 
    setIsModalOpen(false);
    axios
    .post("http://localhost:3000/api/note", newNote)
    .then((response) => {
        setNotes([...notes, newNote]); // Usar un nombre diferente para evitar conflicto
      // Actualiza el estado con los datos de la API o realiza cualquier otra acción necesaria
      showToast(`Nota "${newNote.title}" agregada correctamente!`);
    })
    .catch((error) => {
      console.error("Error al agregar la nota: " + error);
    });
  
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1>Notas</h1>
      <ul>
        {notes.map((note) => (
          <li key={note._id}>{note.title}</li>
        ))}
      </ul>
      <AddTaskButton onClick={showModal} />
      <AddTaskModal
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
        addTask={addNote} // Cambiar el nombre de la función
      />
    </div>
  );
}

export default App;

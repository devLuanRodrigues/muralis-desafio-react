import React, { useState } from 'react';
import './formularioCadastro.css';

const FormularioCadastro = () => {
  const [estado, setEstado] = useState('');
  const [cidades, setCidades] = useState([]);

  const cursos = ['Matemática', 'Letras', 'Geografia'];
  const estados = ['São Paulo', 'Rio de Janeiro', 'Minas Gerais'];

  const cidadesPorEstado = {
    'São Paulo': ['Mogi das Cruzes', 'Suzano', 'Poá', 'Guararema'],
    'Rio de Janeiro': ['Angra dos Reis', 'Niterói', 'Itaboraí'],
    'Minas Gerais': ['Belo Horizonte', 'Monte Azul', 'Muzambinho'],
  };

  const handleEstadoChange = (event) => {
    const selectedEstado = event.target.value;
    setEstado(selectedEstado);
    setCidades(cidadesPorEstado[selectedEstado] || []);
  };

  return (
    <div className="container">
      <h2 className="header">Cadastro de Ingressantes</h2>
      <form className="form">
        <div className="formGroup">
          <label className="label">Nome</label>
          <input type="text" className="input" />
        </div>
        <div className="formGroup">
          <label className="label">Curso</label>
          <div className="selectWrapper">
            <select className="select">
              <option value="">Selecione o curso</option>
              {cursos.map((curso) => (
                <option key={curso} value={curso}>
                  {curso}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="formGroup">
          <label className="label">Estado</label>
          <div className="selectWrapper">
            <select value={estado} onChange={handleEstadoChange} className="select">
              <option value="">Selecione o estado</option>
              {estados.map((estado) => (
                <option key={estado} value={estado}>
                  {estado}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="formGroup">
          <label className="label">Cidades</label>
          <div className="selectWrapper">
            <select className="select">
              <option value="">Selecione a cidade</option>
              {cidades.map((cidade) => (
                <option key={cidade} value={cidade}>
                  {cidade}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="buttonGroup">
          <button type="button" className="voltarButton">Voltar</button>
          <button type="submit" className="gravarButton">Gravar</button>
        </div>
      </form>
    </div>
  );
};

export default FormularioCadastro;

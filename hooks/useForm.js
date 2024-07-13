import { useEffect, useState, useCallback } from "react";

/**
 * @typedef {Object} ValidationRule
 * @property {function(any): boolean} check - Función validadora, debe devolver un booleano.
 * @property {string|string[]} message - Mensaje del error.
 * @property {string} equal - String referente a otra clave para comparar si son iguales.
 */

/**
 * @type {Object.<string, ValidationRule>}
 * Objeto que contiene reglas de validación para campos.
 * Las claves son los nombres de los campos, y los valores son objetos ValidationRule.
 */

/**
 * @typedef {Object} ValueReturn
 * @property {Object} form
 * @property {function(string, any): void} setForm - Función para actualizar el formulario.
 * @property {Object} errors
 * @property {function(): void} clear - Función usada para limpiar el formulario.
 * @property {function(Object): void} register - Función para setear formulario a cualquier valor.
 * @property {function(String): void} handleChange - Función para manejar inputs de tipo texto o que devuelvan un valor que se guarde sin editar.
 */

/**
 * Hook personalizado para manejar formularios con validaciones.
 *
 * @param {Object} options - Opciones para el hook.
 * @param {Object.<string, ValidationRule>} options.validations - Reglas de validación para campos del formulario.
 * @param {Object.<string, any>} options.initialValues - Valores iniciales del formulario.
 *
 * @returns {ValueReturn} - Un objeto que contiene el estado del formulario y las funciones para su manejo.
 */
const useForm = ({ validations = {}, initialValues = {} }) => {
  const [state, setState] = useState(initialValues);
  const [errors, setErrors] = useState({});

  /**
   * @param {string} key - Clave para guardar en el formulario.
   * @param {any} value - Valor a guardar en el formulario.
   */
  const setForm = useCallback((key, value) => {
    setState((prev) => ({ ...prev, [key]: value }));
  }, []);

  const clear = useCallback(() => {
    setState(initialValues);
    setErrors({});
  }, [initialValues]);

  const handleChange = (name) => (value) => setForm(name, value);

  useEffect(() => {
    const newErrors = {};

    Object.keys(validations).forEach((key) => {
      const value = state[key];
      const validation = validations[key];
      if (validation && value) {
        const isValid = validation.check(value);
        if (
          !isValid ||
          (validation.equal && state[validation.equal] !== value)
        ) {
          newErrors[key] = validation.message;
        }
      }
    });

    if (JSON.stringify(newErrors) !== JSON.stringify(errors)) {
      setErrors(newErrors);
    }
  }, [state, validations, errors]);

  const register = useCallback((newState) => {
    setState(newState);
  }, []);

  return {
    register,
    form: state,
    setForm,
    handleChange,
    errors,
    clear,
  };
};

export default useForm;

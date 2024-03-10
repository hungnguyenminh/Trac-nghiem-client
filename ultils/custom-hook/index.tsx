import { useState } from 'react';

const useBoolean = (defaultValue?: boolean) => {
  const [value, setValue] = useState(defaultValue ?? false);

  const onTrue = () => {
    setValue(true);
  };

  const onFalse = () => {
    setValue(false);
  };

  const onToggle = () => {
    setValue(!value);
  };

  return {
    value,
    onTrue,
    onFalse,
    onToggle,
  };
};

const actionModalGlobal = (defaultValue?: boolean) => {
  const [value, setValue] = useState(defaultValue ?? false);

  const openModal = () => {
    setValue(true);
  };

  const closeModal = () => {
    setValue(false);
  };

  const handleCancel = () => {
    setValue(!value);
  };

  return {
    value,
    openModal,
    closeModal,
    handleCancel,
  };
};

export { useBoolean, actionModalGlobal };

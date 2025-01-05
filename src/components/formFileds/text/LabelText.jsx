import { useContext } from 'react';
import { TextFiledContext } from './TextComponent';

export default function LabelText() {
  const {
    inputShow,
    label,
    filterValue,
    fieldVal,
    inputVal,
    newAdStorageValue,
    storagePram,
    index,
  } = useContext(TextFiledContext);
  return (
    <p
      className={`w-full text-md transition-all absolute bottom-3 ${
        ((inputShow !== undefined && inputShow === label) ||
          filterValue ||
          fieldVal ||
          inputVal ||
          (newAdStorageValue &&
            (typeof newAdStorageValue[storagePram] === 'object'
              ? newAdStorageValue[storagePram]?.name ||
                newAdStorageValue[storagePram][index]?.name
              : newAdStorageValue[storagePram]))) &&
        'mb-8 text-sm'
      }  ${inputShow === label && ` text-[#e4aac5]`} `}
    >
      {label}
    </p>
  );
}

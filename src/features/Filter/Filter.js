import { useDispatch } from 'react-redux';

import { setFilter } from 'app/slices';
import style from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const onChange = e => {
    const value = e.target.value.toLowerCase();
    dispatch(setFilter(value));
  };

  return (
    <>
      <label className={style.labelFilter} >Find contacts by name</label>
      <input className={style.inputFilter} type="text" name="filter" onChange={onChange} />
    </>
  );
};

export default Filter;
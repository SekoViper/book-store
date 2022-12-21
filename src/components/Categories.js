import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.category);

  function changeStatus() {
    dispatch(checkStatus());
  }

  return (
    <div>
      <button type="button" onClick={changeStatus}>Check Status</button>
      <h2>{status}</h2>
    </div>
  );
};

export default Categories;

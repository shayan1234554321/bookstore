import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

export default function Categories() {
  const status = useSelector((state) => state.categories.status);
  const dispatch = useDispatch();

  const checkState = () => {
    dispatch(checkStatus);
  };

  return (
    <div className="container categories">
      {status}
      {' '}
      <br />
      <button type="button" onClick={checkState}>
        Check Status
      </button>
    </div>
  );
}

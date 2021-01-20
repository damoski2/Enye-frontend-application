import React from "react";
import style from "./Pagination.module.css";

const Pagination = (props) => {

    const {setPagination, pagination} = props;

  return (
    <div className={style.pagination}>
      <a href="#">&laquo;</a>
      <a href="#" onClick={()=> setPagination(1)}  >1</a>
      <a href="#" onClick={()=> setPagination(2)} className={style.active}>
        2
      </a>
      <a href="#" onClick={()=> setPagination(3)} >3</a>
      <a href="#" >&raquo;</a>
    </div>
  );
};

export default Pagination;

import React from "react";
import { Link } from 'react-router-dom';

import style from './StudyMaterialItem.module.scss';

class StudyMaterialItem extends React.Component {
  render() {
    return(
      <Link 
      to='/study-material-single'
      className={style.StudyMaterialItem}
      >
        <h3 className={style.StudyMaterialItem_heading}>
          Java code snippets
        </h3>
      </Link>
    );
  }
}

export default StudyMaterialItem;
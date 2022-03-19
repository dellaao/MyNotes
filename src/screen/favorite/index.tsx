import React from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router";
import Navigationbar from '../../component/navigation';

const Favorite = () => {
    let navigate = useNavigate();
    function handleClickFavorite() {
      navigate("/src/screen/favorite/index.tsx");
    }
  return (
    <div>
        <Navigationbar/>
        <p>Favorite</p>
    </div>
  );
}

export default Favorite
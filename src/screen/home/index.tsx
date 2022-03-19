import React, { useState } from 'react'
import Navigationbar from '../../component/navigation'
import CardNote from '../../component/card';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router";

function Home() {
  let navigate = useNavigate();
  function handleClickCreateNote() {
    navigate("/src/component/create/index.tsx");
  }
  return (
    <div>
      <Navigationbar />
      <div className="d-grid gap-2">
        <Button
          style={{ marginTop: 25, marginLeft: 10, marginRight: 10 }}
          variant="primary"
          size="lg"
          onClick={handleClickCreateNote}
        >
          Create New Note
        </Button>
      </div>
      <CardNote />
    </div>
  );
}

export default Home
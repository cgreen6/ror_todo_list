import { useState } from 'react';

const ListForm = ({ addList }) => {
  const [list, setList] = useState({ title: '', desc: '' })

  const handleSubmit = (e) => {

  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        
      </form>
    </>
  )
}

export default ListForm;
import React from 'react'

const Searchloc = ({searchloc, setSearchloc}) => {
  return (
    <div className='col-sm-6 mb-4'>
<form onSubmit={(e)=>e.preventDefault()}>
<input className="form-control" type='search' role='searchbox' placeholder='Search Location...' value={searchloc} onChange={(e)=> setSearchloc(e.target.value)}>

</input>


</form>
    </div>
  )
}

export default Searchloc
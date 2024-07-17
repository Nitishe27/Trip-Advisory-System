import React from 'react'

const Search = ({search, setSearch}) => {  {/* passing data and functions between components*/}
  return (
    <div className='col-sm-6 mb-4'>
<form onSubmit={(e)=>e.preventDefault()}> {/*handle form submissions without reloading the page*/}
<input className="form-control" type='search' role='searchbox' placeholder='Search Places...' value={search} onChange={(e)=> setSearch(e.target.value)}>
{/*access the current value of an input field in React when handling input change events. */}
</input>
</form>
    </div>
  )
}

export default Search
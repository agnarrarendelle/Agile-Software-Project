import "./SearchBar.css"

interface Prop{
    setUserInput: (input:string)=>void
}

const SearchBar = (props:Prop) => {
    const onSearchBarChange = (e:React.FormEvent<HTMLInputElement> )=>{
        const input = e.currentTarget.value.trim().toLowerCase()
        console.log(input)
        props.setUserInput(input)
    }

  return (
    <div className="search-bar">
      <h1>Search for a task</h1>
        <input className="search-input" type="text" onChange={onSearchBarChange}/>
    </div>
  );
};

export default SearchBar

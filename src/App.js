import SearchBar from './components/SearchBar';
function App() {
  const handleSubmit = (term) => {
    console.log('Do a search with', term);
  };
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
}

export default App;

// Child To Parent Communication
// 1. Import the Child Component in Parent
// 2. Define a function in parent
// 3. Pass it down as prop to Child Component
// 4. Use the function passed as prop in child component

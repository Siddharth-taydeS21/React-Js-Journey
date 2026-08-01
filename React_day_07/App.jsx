import { useState } from "react";
import Header from "./components/Header";
import ProductsContainer from "./components/ProductsContainer";
import SearchBar from "./components/SearchBar";

export default function App() {
  const [query, setQuery] = useState('');
  return (
    <>
      <Header />
      <SearchBar setQueryCb={setQuery} />
      <ProductsContainer searchQuery={query} />
    </>
  )
}

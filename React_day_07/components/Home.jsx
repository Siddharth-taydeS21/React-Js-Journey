import React from 'react'
import SearchBar from './SearchBar'
import ProductsContainer from './ProductsContainer'
import { useState } from 'react';

export default function Home() {
    const [query, setQuery] = useState('');
    return (
        <>
            <SearchBar setQueryCb={setQuery} />
            <ProductsContainer searchQuery={query} />
        </>
    )
}

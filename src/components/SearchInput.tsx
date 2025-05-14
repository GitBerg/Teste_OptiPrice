import React from 'react'

interface SearchInputProps {
  value: string
  onChange: (value: string) => void
}

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange }) => {

  
  return (
    <input
      type="text"
      placeholder="Buscar por título ou conteúdo..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-4 py-2 border border-header rounded mb-4 focus:outline-none focus:ring-2 focus:ring-accent"
    />
  )
}

export default SearchInput
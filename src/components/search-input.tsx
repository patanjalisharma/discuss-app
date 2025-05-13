'use client'
import React from 'react'
import { Input } from './ui/input'
import { useSearchParams } from 'next/navigation'
import { search } from '@/actions/search'

const SearchInput = () => {

    const serachParams = useSearchParams()
  return (
    <div>
        <form action={search}>

        <Input className='text-white border-white rounded-2xl' defaultValue={serachParams.get("term") || ""} name='term' type="text" placeholder="Search post..." />
        </form>
    </div>
  )
}

export default SearchInput
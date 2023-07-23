'use client'

import { SessionInterface } from '@/common.types'
import { ChangeEvent, useState } from 'react'
import Image from 'next/image'
import FormField from './FormField'
import { categoryFilters } from '@/constants'
import CustomMenu from './CustomMenu'

type Props = {
  type: string
  session: SessionInterface
}

const ProjectForm = ({ type, session }: Props) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [form, setForm] = useState({
    image: '',
    title: '',
    description: '',
    liveSiteUrl: '',
    gitHubUrl: '',
    category: '',
  })

  const handleSubmit = (e: React.FormEvent) => {}
  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {}
  const hanldeStateChange = (fieldName: string, value: string) => {
    setForm((prev) => ({ ...prev, [fieldName]: value }))
  }

  return (
    <form action="" onSubmit={handleSubmit} className="flexStart form">
      <div className="flexStart form_image-container">
        <label htmlFor="poster" className="flexCenter form_image-label">
          {!form.image && 'Choose poster for your project'}
        </label>
        <input
          id="image"
          type="file"
          accept="image/*"
          required={type === 'create'}
          className="form_image-input"
          onChange={handleChangeImage}
        />
        {form.image && (
          <Image
            src={form.image}
            alt="poster"
            width={100}
            height={100}
            className="sm:-10 object-contain z-20"
            fill
          />
        )}
      </div>

      <FormField
        title="Title"
        state={form.title}
        placeholder="Enter title"
        setState={(value) => hanldeStateChange('title', value)}
      />
      <FormField
        title="Description"
        state={form.title}
        placeholder="Showcase & discover remarkable developer portfolios on Devfolio"
        setState={(value) => hanldeStateChange('description', value)}
      />
      <FormField
        type="url"
        title="Website URL"
        state={form.liveSiteUrl}
        placeholder="http://localhost:3000"
        setState={(value) => hanldeStateChange('liveSiteUrl', value)}
      />
      <FormField
        type="url"
        title="GitHub URL"
        state={form.gitHubUrl}
        placeholder="https://github.com"
        setState={(value) => hanldeStateChange('gitHubUrl', value)}
      />

      {/* Custom Inputs */}
      <CustomMenu
        title="Category"
        state={form.category}
        filters={categoryFilters}
        setState={(value) => hanldeStateChange('category', value)}
      />

      <div className="flexStart w-full">
        <button>Create</button>
      </div>
    </form>
  )
}

export default ProjectForm

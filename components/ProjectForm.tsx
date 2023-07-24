'use client'

import { FormState, ProjectInterface, SessionInterface } from '@/common.types'
import { ChangeEvent, useState } from 'react'
import Image from 'next/image'
import FormField from './FormField'
import { categoryFilters } from '@/constants'
import CustomMenu from './CustomMenu'
import Button from './Button'
import { createNewProject, fetchToken } from '@/lib/actions'
import { useRouter } from 'next/navigation'

type Props = {
  type: string
  session: SessionInterface
  propject?: ProjectInterface
}

const ProjectForm = ({ type, session, propject }: Props) => {
  const router = useRouter()

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [form, setForm] = useState<FormState>({
    image: '',
    title: '',
    description: '',
    liveSiteUrl: '',
    githubUrl: '',
    category: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setIsSubmitting(true)

    const token = await fetchToken()

    try {
      if (type === 'create') {
        await createNewProject(form, session?.user?.id, token)

        router.push('/')
      }
    } catch (error) {
      console.log(error, 'whut')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Hanlde upload image to Cloudinary
  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    const file = e.target.files?.[0]
    if (!file) return

    if (!file.type.includes('image')) {
      return alert('Please upload an image file')
    }

    const reader = new FileReader()

    reader.readAsDataURL(file)

    reader.onloadend = () => {
      const result = reader.result as string

      hanldeStateChange('image', result)
    }
  }

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
          <Image src={form.image} alt="poster" className="sm:p-10 object-contain z-20" fill />
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
        state={form.description}
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
        state={form.githubUrl}
        placeholder="https://github.com"
        setState={(value) => hanldeStateChange('githubUrl', value)}
      />

      {/* Custom Inputs */}
      <CustomMenu
        title="Category"
        state={form.category}
        filters={categoryFilters}
        setState={(value) => hanldeStateChange('category', value)}
      />

      <div className="flexStart w-full">
        <Button
          title={
            isSubmitting
              ? `${type === 'create' ? 'Creating' : 'Updating'}`
              : `${type === 'create' ? 'Create' : 'Update'}`
          }
          type="submit"
          leftIcon={isSubmitting ? '' : '/plus.svg'}
          isSubmitting={isSubmitting}
        />
      </div>
    </form>
  )
}

export default ProjectForm

/* eslint-disable react-hooks/exhaustive-deps */
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { usePostContext } from '../context/PostContext'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

export function PostForm() {
  const { createPost, getPost, updatePost } = usePostContext()
  const navigate = useNavigate()
  const { id } = useParams()
  const [post, setPost] = useState({
    title: '',
    description: '',
    image: null
  })

  useEffect(() => {
    (async () => {
      if (id) {
        const post = await getPost(id)
        setPost(post)
      }
    })()
  }, [])

  return (
    <Formik
      initialValues={post}
      validationSchema={Yup.object({
        title: Yup.string().required('Title is Required'),
        description: Yup.string().required('Description is required')
      })}
      onSubmit={async (values, actions) => {
        if (id) {
          await updatePost(id, values)
        } else {
          await createPost(values)
        }

        actions.setSubmitting(false)
        navigate('/')
      }}
      enableReinitialize
    >
      {({ setFieldValue, isSubmitting }) => (
        <Form
          className='flex flex-col items-center gap-4'
        >
          <Link className='bg-gray-700 text-white p-3 rounded-sm hover:bg-gray-600 w-min self-start absolute top-2 left-2 text-xl pb-4 px-4' to={'/'}>
            Home
          </Link>
          <div className="bg-zinc-800 p-10 w-full flex flex-col justify-center items-center rounded-lg max-w-2xl shadow-lg shadow-black">
            {
              id ? <h1 className='text-white text-4xl text-center mb-4'>Edit the post</h1>
                : <h1 className='text-white text-4xl text-center mb-4'>Create new post</h1>
            }
            <div className='flex gap-10 flex-col w-full'>
              <div className='relative w-full text-center '>
                <div className='flex items-center justify-center'>
                  <label htmlFor="title" className='mr-4 font-bold text-gray-300'>Enter a title</label>
                  <Field
                    id="title"
                    required
                    className='mt-4 mb-2 px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full max-w-md'
                    name='title'
                    placeholder="Title"
                  />
                </div>
                <ErrorMessage
                  className='text-red-400 ts-sm absolute -bottom-6 left-1/2 -translate-x-1/2'
                  component="p"
                  name='title'
                />
              </div>

              <div className='relative w-full text-center flex items-center justify-center'>
                <label htmlFor="description" className='mr-4 font-bold text-gray-300'>Enter a <br /> description</label>
                <Field
                  rows={3}
                  id="description"
                  component="textarea"
                  required
                  className='px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full max-w-md'
                  name='description'
                  placeholder="Description"
                />
                <ErrorMessage
                  component="p"
                  className='text-red-400 ts-sm absolute -bottom-8 left-1/2 -translate-x-1/2' name='description'
                />
              </div>

              <div className="w-full text-center flex items-center justify-center">
                <label htmlFor="image" className='mr-4 font-bold text-gray-300'>Enter a Image</label>
                <input
                  onChange={(e) => setFieldValue('image', e.target.files[0])} className='px-3 py-2 focus:outline-none rounded bg-gray-600 text-gray-400 w-full max-w-fit' type="file" name="image" id="image" />
              </div>
            </div>

            <button disabled={isSubmitting} className={`text-white bg-cyan-900 px-3 py-1.5 rounded-md text-lg ${!isSubmitting && 'hover:bg-cyan-800'} mt-7 ${isSubmitting ? 'hover:cursor-not-allowed' : 'hover:cursor-pointer'}`} type='submit'>
              {isSubmitting ? <AiOutlineLoading3Quarters className='animate-spin h-7 w-9' /> : 'Save'}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}
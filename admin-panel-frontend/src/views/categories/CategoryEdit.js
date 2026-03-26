import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CButton,
  CRow,
  CFormTextarea,
  CSpinner,
} from '@coreui/react'
import axios from 'axios'
import { BACKEND_BASE_URL } from '../../constants'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function CategoryEdit() {
  const [category, setCategory] = useState(null)
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`${BACKEND_BASE_URL}/categories/${id}`).then((res) => setCategory(res.data[0]))
  }, [])

  const handleEdit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    axios
      .put(`${BACKEND_BASE_URL}/categories/${category.category_id}`, formData)
      .then((res) => navigate('/categories/view'))
  }

  if (category === null) {
    return <CSpinner color="primary" />
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Edit Category</strong>
          </CCardHeader>
          <CCardBody>
            <CForm onSubmit={handleEdit} id="addCategoryForm">
              <CInputGroup className="mb-3">
                <CInputGroupText>Category Name</CInputGroupText>
                <CFormInput name="name" defaultValue={category.name} />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CInputGroupText>Category Description</CInputGroupText>
                <CFormTextarea name="description" defaultValue={category.description} />
              </CInputGroup>
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <CButton color="secondary" className="me-md-2" onClick={() => navigate(-1)}>
                  Go Back
                </CButton>
                <CButton color="primary" type="submit">
                  Edit
                </CButton>
              </div>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

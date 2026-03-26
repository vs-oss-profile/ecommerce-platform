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
} from '@coreui/react'
import axios from 'axios'
import { BACKEND_BASE_URL } from '../../constants'
import { useNavigate } from 'react-router-dom'

export default function CategoryAdd() {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    axios
      .post(`${BACKEND_BASE_URL}/categories`, formData)
      .then((res) => navigate('/categories/view'))
  }

  const clearForm = () => {
    document.getElementById('addCategoryForm').reset()
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Add Category</strong>
          </CCardHeader>
          <CCardBody>
            <CForm onSubmit={handleSubmit} id="addCategoryForm">
              <CInputGroup className="mb-3">
                <CInputGroupText>Category Name</CInputGroupText>
                <CFormInput name="name" />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CInputGroupText>Category Description</CInputGroupText>
                <CFormTextarea name="description" />
              </CInputGroup>
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <CButton color="secondary" className="me-md-2" onClick={clearForm}>
                  Clear Form
                </CButton>
                <CButton color="primary" type="submit">
                  Submit
                </CButton>
              </div>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

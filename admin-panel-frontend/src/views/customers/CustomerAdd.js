import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CFormTextarea,
  CButton,
  CForm,
} from '@coreui/react'
import axios from 'axios'
import { BACKEND_BASE_URL } from '../../constants'

export default function CustomerAdd() {
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    axios.post(`${BACKEND_BASE_URL}/customers`, formData)
  }

  const clearForm = () => {
    document.getElementById('addCustomerForm').reset()
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Add Product</strong>
          </CCardHeader>
          <CCardBody>
            <CForm onSubmit={handleSubmit} id="addCustomerForm">
              <CInputGroup className="mb-3">
                <CInputGroupText>First Name</CInputGroupText>
                <CFormInput name="first_name" />
                <CInputGroupText>Last Name</CInputGroupText>
                <CFormInput name="last_name" />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CInputGroupText>Customer Email</CInputGroupText>
                <CFormInput name="email" />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CInputGroupText>Customer Mobile</CInputGroupText>
                <CFormInput name="mobile" />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CInputGroupText>Customer Address</CInputGroupText>
                <CFormTextarea name="address"></CFormTextarea>
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

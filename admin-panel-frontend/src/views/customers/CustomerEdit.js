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
  CSpinner,
  CFormSelect,
} from '@coreui/react'
import axios from 'axios'
import { BACKEND_BASE_URL } from '../../constants'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function CustomerEdit() {
  const [customer, setCustomer] = useState(null)
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`${BACKEND_BASE_URL}/customers/${id}`).then((res) => setCustomer(res.data[0]))
  }, [])

  const handleEdit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    axios
      .put(`${BACKEND_BASE_URL}/customers/${customer.customer_id}`, formData)
      .then((res) => navigate('/customers/view'))
  }

  if (customer === null) {
    return <CSpinner color="primary" />
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Edit Customer Details</strong>
          </CCardHeader>
          <CCardBody>
            <CForm onSubmit={handleEdit} id="addCustomerForm">
              <CInputGroup className="mb-3">
                <CInputGroupText>First Name</CInputGroupText>
                <CFormInput name="first_name" defaultValue={customer.first_name} />
                <CInputGroupText>Last Name</CInputGroupText>
                <CFormInput name="last_name" defaultValue={customer.last_name} />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CInputGroupText>Customer Email</CInputGroupText>
                <CFormInput name="email" defaultValue={customer.email} />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CInputGroupText>Customer Mobile</CInputGroupText>
                <CFormInput name="mobile" defaultValue={customer.mobile} />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CInputGroupText>Customer Address</CInputGroupText>
                <CFormTextarea name="address" defaultValue={customer.address}></CFormTextarea>
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CInputGroupText>Customer Status</CInputGroupText>
                <CFormSelect
                  options={['Active', 'Blocked']}
                  name="status"
                  defaultValue={customer.status}
                />
              </CInputGroup>
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <CButton
                  color="secondary"
                  className="me-md-2"
                  onClick={() => {
                    navigate(-1)
                  }}
                >
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

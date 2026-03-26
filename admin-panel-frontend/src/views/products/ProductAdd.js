import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CForm,
  CButton,
  CFormSelect,
} from '@coreui/react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { BACKEND_BASE_URL } from '../../constants'
import { useNavigate } from 'react-router-dom'

export default function ProductAdd() {
  const [categories, setCategories] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`${BACKEND_BASE_URL}/categories`)
      .then((res) => setCategories(res.data))
      .catch((err) => console.error(err))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)

    if (categories.length > 0) {
      formData.append(
        'category_id',
        categories.find((category) => category.name === formData.get('category')).category_id,
      )
    }
    axios.post(`${BACKEND_BASE_URL}/products`, formData).then((res) => navigate('/products/view'))
  }

  const clearForm = () => {
    document.getElementById('addProductForm').reset()
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Add Product</strong>
          </CCardHeader>
          <CCardBody>
            <CForm onSubmit={handleSubmit} id="addProductForm">
              <CInputGroup className="mb-3">
                <CInputGroupText>Product Name</CInputGroupText>
                <CFormInput name="name" />
                <CFormSelect
                  options={[
                    'Select Product Category',
                    ...categories.map((category) => category.name),
                  ]}
                  name="category"
                />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CInputGroupText>Price</CInputGroupText>
                <CFormInput type="number" name="price" />
                <CInputGroupText>Quantity</CInputGroupText>
                <CFormInput type="number" name="quantity" />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CInputGroupText as="label" htmlFor="inputGroupFile01">
                  Product Image
                </CInputGroupText>
                <CFormInput type="file" accept="image/*" name="image" />
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

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
  CImage,
} from '@coreui/react'
import axios from 'axios'
import { BACKEND_BASE_URL } from '../../constants'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function InventoryEdit() {
  const [product, setProduct] = useState(null)
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`${BACKEND_BASE_URL}/products/${id}`).then((res) => setProduct(res.data[0]))
  }, [])

  const handleEdit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    axios
      .put(`${BACKEND_BASE_URL}/products/${product.product_id}`, formData)
      .then((res) => navigate('/inventory/view'))
  }

  if (product === null) {
    return <CSpinner color="primary" />
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Edit Inventory</strong>
          </CCardHeader>
          <CCardBody>
            <CForm onSubmit={handleEdit} id="addCategoryForm">
              <CInputGroup className="mb-3">
                <CInputGroupText>Product Name</CInputGroupText>
                <CFormInput value={product.name} />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CInputGroupText>Quantity</CInputGroupText>
                <CFormInput name="quantity" defaultValue={product.quantity} type="number" />
              </CInputGroup>
              {product.image && (
                <div className="mb-3 text-center">
                  <CImage
                    fluid
                    src={`${BACKEND_BASE_URL}/uploads/${product.image}`}
                    height={500}
                    width={500}
                  />
                </div>
              )}
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

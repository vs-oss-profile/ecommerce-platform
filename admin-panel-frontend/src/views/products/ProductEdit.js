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
  CSpinner,
  CImage,
} from '@coreui/react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BACKEND_BASE_URL } from '../../constants'

export default function ProductEdit() {
  const [categories, setCategories] = useState([])
  const [product, setProduct] = useState(null)
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`${BACKEND_BASE_URL}/products/${id}`)
      .then((resProduct) => {
        axios
          .get(`${BACKEND_BASE_URL}/categories`)
          .then((resCategories) => {
            setProduct(resProduct.data[0])
            setCategories(resCategories.data)
          })
          .catch((err) => console.error(err))
      })
      .catch((err) => console.error(err))
  }, [])

  const handleEdit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    axios
      .put(`${BACKEND_BASE_URL}/products/${id}`, formData)
      .then((res) => navigate('/products/view'))
  }

  if (product === null || categories === null) {
    return <CSpinner color="primary" />
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Edit Product</strong>
          </CCardHeader>
          <CCardBody>
            <CForm onSubmit={handleEdit}>
              <CInputGroup className="mb-3">
                <CInputGroupText>Product Name</CInputGroupText>
                <CFormInput name="name" defaultValue={product.name} />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CInputGroupText>Category</CInputGroupText>
                <CFormSelect
                  options={[
                    ...categories.map((category) => {
                      return { label: category.name, value: category.category_id }
                    }),
                  ]}
                  name="category"
                  defaultValue={product.category_id}
                />

                <CInputGroupText>Price</CInputGroupText>
                <CFormInput type="number" name="price" defaultValue={parseFloat(product.price)} />
              </CInputGroup>
              <div className="mb-3 text-center">
                <CImage
                  fluid
                  src={`${BACKEND_BASE_URL}/uploads/${product.image}`}
                  height={500}
                  width={500}
                />
              </div>
              <CInputGroup className="mb-3">
                <CInputGroupText as="label" htmlFor="inputGroupFile01">
                  Replace Image
                </CInputGroupText>
                <CFormInput type="file" accept="image/*" name="image" />
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

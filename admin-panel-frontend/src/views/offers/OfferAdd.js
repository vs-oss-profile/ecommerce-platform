import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CButton,
  CForm,
  CFormSelect,
  CSpinner,
  CImage,
} from '@coreui/react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { BACKEND_BASE_URL } from '../../constants'
import { getFormattedPrice } from '../../utils'
import { useNavigate } from 'react-router-dom'

export default function OfferAdd() {
  const [options, setOptions] = useState([])
  const [selectedProduct, setSelectedProduct] = useState('')
  const [productDetails, setProductDetails] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`${BACKEND_BASE_URL}/products`).then((res) => {
      const products = res.data

      const o = products.reduce((acc, product) => {
        if (acc[product.category_id] === undefined) {
          acc[product.category_id] = {
            category: product.category,
            products: [],
          }
        }

        acc[product.category_id].products.push({
          label: product.name,
          value: product.product_id,
        })

        return acc
      }, {})

      const sortedGroups = Object.values(o).sort((a, b) => a.category.localeCompare(b.category))
      const sortedProducts = sortedGroups.map((ogroup) => {
        return {
          ...ogroup,
          products: ogroup.products.sort((a, b) => a.label.localeCompare(b.label)),
        }
      })

      setOptions(sortedProducts)
    })
  }, [])

  useEffect(() => {
    if (selectedProduct === '') {
      setProductDetails(null)
    } else {
      axios
        .get(`${BACKEND_BASE_URL}/products/${selectedProduct}`)
        .then((res) => setProductDetails(res.data[0]))
    }
  }, [selectedProduct])

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    axios
      .post(`${BACKEND_BASE_URL}/offers`, formData)
      .then((res) => {
        if (!res.data.error) navigate('/offers/view')
      })
      .catch((err) => console.error(err))
  }

  if (options.length === 0) {
    return <CSpinner color="primary" />
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Make an Offer</strong>
          </CCardHeader>
          <CCardBody>
            <CForm onSubmit={handleSubmit}>
              <CInputGroup className="mb-3">
                <CInputGroupText>Product</CInputGroupText>
                <CFormSelect
                  name="product"
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                >
                  {[
                    <option label="Select a Product" value="" key="" />,
                    options.map((ogroup) => (
                      <optgroup label={ogroup.category} key={ogroup.category}>
                        {ogroup.products.map((o) => (
                          <option label={o.label} value={o.value} key={o.value} />
                        ))}
                      </optgroup>
                    )),
                  ]}
                </CFormSelect>
                <CInputGroupText>Offer Price</CInputGroupText>
                <CFormInput type="number" name="offer_price" step={0.01} />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CInputGroupText>Offer Valid Till</CInputGroupText>
                <CInputGroupText>Date</CInputGroupText>
                <CFormInput type="number" placeholder="dd" name="day" />
                <CFormInput type="number" placeholder="MM" name="month" />
                <CFormInput type="number" placeholder="yyyy" name="year" />
                <CInputGroupText>Time</CInputGroupText>
                <CFormInput type="number" placeholder="HH" name="hour" />
                <CFormInput type="number" placeholder="mm" name="minute" />
              </CInputGroup>
              {productDetails !== null && (
                <div className="text-center mb-3">
                  <div className="mb-3">
                    <i>Original Price: {getFormattedPrice(productDetails.price)}</i>
                  </div>
                  <CImage
                    fluid
                    style={{ maxHeight: 300 }}
                    src={`${BACKEND_BASE_URL}/uploads/${productDetails.image}`}
                  />
                </div>
              )}
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <CButton color="secondary" className="me-md-2">
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

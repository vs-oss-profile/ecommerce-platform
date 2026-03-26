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
  CSpinner,
} from '@coreui/react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BACKEND_BASE_URL } from '../../constants'
import { getFormattedPrice } from '../../utils'

export default function OfferEdit() {
  const [offer, setOffer] = useState(null)
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`${BACKEND_BASE_URL}/offers/${id}`).then((res) =>
      setOffer({
        ...res.data[0],
        valid_till: new Date(res.data[0].valid_till),
      }),
    )
  }, [])

  const handleEdit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    axios.put(`${BACKEND_BASE_URL}/offers/${id}`, formData).then((res) => navigate('/offers/view'))
  }

  if (offer === null) {
    return <CSpinner color="primary" />
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Change Offer</strong>
          </CCardHeader>
          <CCardBody>
            <CForm onSubmit={handleEdit}>
              <CInputGroup className="mb-3">
                <CInputGroupText>Product Name</CInputGroupText>
                <CFormInput name="product" value={offer.product} disabled={true} />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CInputGroupText>Original Price</CInputGroupText>
                <CFormInput
                  name="original_price"
                  value={getFormattedPrice(offer.original_price)}
                  disabled={true}
                />
                <CInputGroupText>Offer Price</CInputGroupText>
                <CFormInput
                  name="offer_price"
                  type="number"
                  defaultValue={parseFloat(offer.offer_price)}
                />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CInputGroupText>Offer Valid Till</CInputGroupText>
                <CInputGroupText>Date</CInputGroupText>
                <CFormInput
                  type="number"
                  defaultValue={offer.valid_till.getDate()}
                  placeholder="dd"
                  name="day"
                />
                <CFormInput
                  type="number"
                  defaultValue={offer.valid_till.getMonth() + 1}
                  placeholder="MM"
                  name="month"
                />
                <CFormInput
                  type="number"
                  defaultValue={offer.valid_till.getFullYear()}
                  placeholder="yyyy"
                  name="year"
                />
                <CInputGroupText>Time</CInputGroupText>
                <CFormInput
                  type="number"
                  defaultValue={offer.valid_till.getHours()}
                  placeholder="HH"
                  name="hour"
                />
                <CFormInput
                  type="number"
                  defaultValue={offer.valid_till.getMinutes()}
                  placeholder="mm"
                  name="minute"
                />
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

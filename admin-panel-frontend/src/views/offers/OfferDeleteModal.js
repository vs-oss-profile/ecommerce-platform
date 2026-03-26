import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CSpinner,
} from '@coreui/react'
import axios from 'axios'
import { BACKEND_BASE_URL } from '../../constants'
import { getDateTimeString, getFormattedPrice } from '../../utils'

export const OfferDeleteModal = ({ visible, setVisible, selectedOffer }) => {
  const handleDelete = () => {
    axios
      .delete(`${BACKEND_BASE_URL}/offers/${selectedOffer.offer_id}`)
      .then((res) => setVisible(false))
  }

  if (selectedOffer === null) {
    return (
      <CModal alignment="center" scrollable visible={visible} onClose={() => setVisible(false)}>
        <CSpinner color="primary" />
      </CModal>
    )
  }

  return (
    <CModal alignment="center" scrollable visible={visible} onClose={() => setVisible(false)}>
      <CModalHeader>
        <CModalTitle>Remove this Offer?</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <strong>Product Name: </strong>
        {selectedOffer.product}
        <br />
        <strong>Original Price: </strong>
        {getFormattedPrice(selectedOffer.original_price)}
        <br />
        <strong>Offer Price: </strong>
        {getFormattedPrice(selectedOffer.offer_price)}
        <br />
        <strong>Offer Valid till: </strong>
        {getDateTimeString(selectedOffer.valid_till)}
      </CModalBody>
      <CModalFooter>
        <CButton color="light" onClick={() => setVisible(false)}>
          Cancel
        </CButton>
        <CButton color="danger" onClick={handleDelete}>
          Remove
        </CButton>
      </CModalFooter>
    </CModal>
  )
}

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
import { getFormattedPrice } from '../../utils'

export const ProductDeleteModal = ({ visible, setVisible, selectedProduct }) => {
  const handleDelete = () => {
    axios
      .delete(`${BACKEND_BASE_URL}/products/${selectedProduct.product_id}`)
      .then((res) => setVisible(false))
  }

  if (selectedProduct === null) {
    return (
      <CModal alignment="center" scrollable visible={visible} onClose={() => setVisible(false)}>
        <CSpinner color="primary" />
      </CModal>
    )
  }

  return (
    <CModal alignment="center" scrollable visible={visible} onClose={() => setVisible(false)}>
      <CModalHeader>
        <CModalTitle>Delete This Product?</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <strong>Name: </strong>
        {selectedProduct.name}
        <br />
        <strong>Category: </strong>
        {selectedProduct.category}
        <br />
        <strong>Price: </strong>
        {getFormattedPrice(selectedProduct.price)}
      </CModalBody>
      <CModalFooter>
        <CButton color="light" onClick={() => setVisible(false)}>
          Cancel
        </CButton>
        <CButton color="danger" onClick={handleDelete}>
          Delete
        </CButton>
      </CModalFooter>
    </CModal>
  )
}

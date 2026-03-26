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

export const CustomerDeleteModal = ({ visible, setVisible, selectedCustomer }) => {
  const handleDelete = () => {
    axios
      .delete(`${BACKEND_BASE_URL}/customers/${selectedCustomer.customer_id}`)
      .then((res) => setVisible(false))
  }

  if (selectedCustomer === null) {
    selectedCustomer = {
      first_name: '',
      last_name: '',
      email: '',
      mobile: '',
      status: '',
    }
  }

  return (
    <CModal alignment="center" scrollable visible={visible} onClose={() => setVisible(false)}>
      <CModalHeader>
        <CModalTitle>Delete This Customer?</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <strong>Name: </strong>
        {selectedCustomer.first_name + ' ' + selectedCustomer.last_name}
        <br />
        <strong>Email: </strong>
        {selectedCustomer.email}
        <br />
        <strong>Mobile: </strong>
        {selectedCustomer.mobile}
        <br />
        <strong>Status: </strong>
        {selectedCustomer.status}
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

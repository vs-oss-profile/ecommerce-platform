import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'
import axios from 'axios'
import { BACKEND_BASE_URL } from '../../constants'

export const CategoryDeleteModal = ({ visible, setVisible, selectedCategory }) => {
  const handleDelete = () => {
    axios
      .delete(`${BACKEND_BASE_URL}/categories/${selectedCategory.category_id}`)
      .then((res) => setVisible(false))
  }

  if (selectedCategory === null) {
    selectedCategory = {
      name: '',
      description: '',
    }
  }

  return (
    <CModal alignment="center" scrollable visible={visible} onClose={() => setVisible(false)}>
      <CModalHeader>
        <CModalTitle>Delete This Category?</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <strong>Name: </strong>
        {selectedCategory.name}
        <br />
        <strong>Description: </strong>
        {selectedCategory.description}
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

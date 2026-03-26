import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'

export const DeleteModal = ({ visible, setVisible }) => {
  return (
    <CModal alignment="center" scrollable visible={visible} onClose={() => setVisible(false)}>
      <CModalHeader>
        <CModalTitle>Modal title</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" onClick={() => setVisible(false)}>
          Close
        </CButton>
        <CButton color="primary">Save changes</CButton>
      </CModalFooter>
    </CModal>
  )
}

import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { BACKEND_BASE_URL } from '../../constants'
import { getDateTimeString } from '../../utils'
import { MdOutlineDeleteOutline } from 'react-icons/md'
import { FiEdit } from 'react-icons/fi'
import { DeleteModal } from '../modal/deleteModal'

export default function OrdersView() {
  const [reviews, setReviews] = useState([])
  const [deleteModalVisible, setDeleteModalVisible] = useState(false)

  useEffect(() => {
    axios
      .get(`${BACKEND_BASE_URL}/reviews`)
      .then((res) => setReviews(res.data))
      .catch((err) => console.error(err))
  }, [])

  return (
    <>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>All Orders</strong>
            </CCardHeader>
            <CCardBody>
              <CTable striped hover>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Product</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Customer</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Review</CTableHeaderCell>
                    <CTableHeaderCell scope="col"></CTableHeaderCell>
                    <CTableHeaderCell scope="col"></CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {reviews.map((review, index) => (
                    <CTableRow key={index}>
                      <CTableDataCell>{index + 1}</CTableDataCell>
                      <CTableDataCell>{review.product}</CTableDataCell>
                      <CTableDataCell>{review.first_name + ' ' + review.last_name}</CTableDataCell>
                      <CTableDataCell>{review.review}</CTableDataCell>
                      <CTableDataCell>
                        <FiEdit style={{ cursor: 'pointer' }} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <MdOutlineDeleteOutline
                          color="red"
                          onClick={() => setDeleteModalVisible(true)}
                          style={{ cursor: 'pointer' }}
                        />
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <DeleteModal visible={deleteModalVisible} setVisible={setDeleteModalVisible} />
    </>
  )
}

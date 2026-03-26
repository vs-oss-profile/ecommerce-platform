import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
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
  const [orders, setOrders] = useState([])
  const [deleteModalVisible, setDeleteModalVisible] = useState(false)

  useEffect(() => {
    axios
      .get(`${BACKEND_BASE_URL}/orders/view`)
      .then((res) => setOrders(res.data))
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
                    <CTableHeaderCell scope="col">Customer Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Order Placed At</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                    <CTableHeaderCell scope="col"></CTableHeaderCell>
                    <CTableHeaderCell scope="col"></CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {orders.map((order, index) => (
                    <CTableRow key={index}>
                      <CTableDataCell>{index + 1}</CTableDataCell>
                      <CTableDataCell>{order.first_name + ' ' + order.last_name}</CTableDataCell>
                      <CTableDataCell>{getDateTimeString(order.timestamp)}</CTableDataCell>
                      <CTableDataCell>{order.order_status.replace(/_/g, ' ')}</CTableDataCell>
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

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
import { FiEdit } from 'react-icons/fi'
import { MdOutlineDeleteOutline } from 'react-icons/md'
import { DeleteModal } from '../modal/deleteModal'

export default function CustomersBlockedView() {
  const [customers, setCustomers] = useState([])
  const [deleteModalVisible, setDeleteModalVisible] = useState(false)

  useEffect(() => {
    axios
      .get(`${BACKEND_BASE_URL}/customers/view/blocked`)
      .then((res) => setCustomers(res.data))
      .catch((err) => console.error(err))
  }, [])

  return (
    <>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Blocked Customers</strong>
            </CCardHeader>
            <CCardBody>
              <CTable striped hover>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Customer Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Email</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Mobile</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                    <CTableHeaderCell scope="col"></CTableHeaderCell>
                    <CTableHeaderCell scope="col"></CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {customers.map((customer, index) => (
                    <CTableRow key={index}>
                      <CTableDataCell>{index + 1} </CTableDataCell>
                      <CTableDataCell>
                        {customer.first_name + ' ' + customer.last_name}
                      </CTableDataCell>
                      <CTableDataCell>{customer.email}</CTableDataCell>
                      <CTableDataCell>{customer.mobile}</CTableDataCell>
                      <CTableDataCell>{customer.status}</CTableDataCell>
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

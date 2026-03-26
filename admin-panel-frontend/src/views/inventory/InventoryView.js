import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CImage,
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
import { useNavigate } from 'react-router-dom'

export default function InventoryView() {
  const [products, setProducts] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`${BACKEND_BASE_URL}/products`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err))
  }, [])

  const handleEdit = (product) => {
    navigate(`/inventory/edit/${product.product_id}`)
  }

  return (
    <>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>All Inventory</strong>
            </CCardHeader>
            <CCardBody>
              <CTable striped hover>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Product Image</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Product Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Quantity Available</CTableHeaderCell>
                    <CTableHeaderCell scope="col"></CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {products.map((product, index) => (
                    <CTableRow key={index}>
                      <CTableDataCell>{index + 1}</CTableDataCell>
                      <CTableDataCell>
                        {product.image ? (
                          <CImage
                            thumbnail
                            height={150}
                            width={150}
                            src={`${BACKEND_BASE_URL}/uploads/${product.image}`}
                          />
                        ) : (
                          'Image Not Available'
                        )}
                      </CTableDataCell>
                      <CTableDataCell>{product.name}</CTableDataCell>
                      <CTableDataCell>{product.quantity}</CTableDataCell>
                      <CTableDataCell>
                        <FiEdit style={{ cursor: 'pointer' }} onClick={() => handleEdit(product)} />
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

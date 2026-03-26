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
import { MdOutlineDeleteOutline } from 'react-icons/md'
import { ProductDeleteModal } from './ProductDeleteModal'
import { useNavigate } from 'react-router-dom'
import { getFormattedPrice } from '../../utils'

export default function ProductsView() {
  const [products, setProducts] = useState([])
  const [deleteModalVisible, setDeleteModalVisible] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)

  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`${BACKEND_BASE_URL}/products`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>All Products</strong>
            </CCardHeader>
            <CCardBody>
              <CTable striped hover>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Image</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Category</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Price</CTableHeaderCell>
                    <CTableHeaderCell scope="col"></CTableHeaderCell>
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
                      <CTableDataCell>{product.category}</CTableDataCell>
                      <CTableDataCell>{getFormattedPrice(product.price)}</CTableDataCell>
                      <CTableDataCell>
                        <FiEdit
                          style={{ cursor: 'pointer' }}
                          onClick={() => {
                            navigate(`/products/edit/${product.product_id}`)
                          }}
                        />
                      </CTableDataCell>
                      <CTableDataCell>
                        <MdOutlineDeleteOutline
                          color="red"
                          onClick={() => {
                            setSelectedProduct(product)
                            setDeleteModalVisible(true)
                          }}
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
      <ProductDeleteModal
        visible={deleteModalVisible}
        setVisible={setDeleteModalVisible}
        selectedProduct={selectedProduct}
      />
    </>
  )
}

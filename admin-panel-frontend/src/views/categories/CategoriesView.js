import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CSpinner,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { MdOutlineDeleteOutline } from 'react-icons/md'
import { FiEdit } from 'react-icons/fi'
import { BACKEND_BASE_URL } from '../../constants'
import { CategoryDeleteModal } from './CategoryDeleteModal'
import { useNavigate } from 'react-router-dom'

export default function CategoriesView() {
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [deleteModalVisible, setDeleteModalVisible] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`${BACKEND_BASE_URL}/categories`)
      .then((res) => setCategories(res.data))
      .catch((err) => console.error(err))
  }, [])

  if (categories.length === 0) {
    return <CSpinner color="primary" />
  }

  return (
    <>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>All Categories</strong>
            </CCardHeader>
            <CCardBody>
              <CTable striped hover>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Category Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Category Description</CTableHeaderCell>
                    <CTableHeaderCell scope="col"></CTableHeaderCell>
                    <CTableHeaderCell scope="col"></CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {categories.map((category, index) => {
                    return (
                      <CTableRow key={index}>
                        <CTableDataCell>{index + 1}</CTableDataCell>
                        <CTableDataCell>{category.name}</CTableDataCell>
                        <CTableDataCell>{category.description}</CTableDataCell>
                        <CTableDataCell>
                          <FiEdit
                            onClick={() => {
                              navigate(`/categories/edit/${category.category_id}`)
                              setSelectedCategory(category)
                            }}
                            style={{ cursor: 'pointer' }}
                          />
                        </CTableDataCell>
                        <CTableDataCell>
                          <MdOutlineDeleteOutline
                            color="red"
                            onClick={() => {
                              setDeleteModalVisible(true)
                              setSelectedCategory(category)
                            }}
                            style={{ cursor: 'pointer' }}
                          />
                        </CTableDataCell>
                      </CTableRow>
                    )
                  })}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CategoryDeleteModal
        visible={deleteModalVisible}
        setVisible={setDeleteModalVisible}
        selectedCategory={selectedCategory}
      />
    </>
  )
}

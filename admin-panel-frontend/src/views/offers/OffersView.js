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
import { getDateTimeString, getFormattedPrice } from '../../utils'
import { OfferDeleteModal } from './OfferDeleteModal'
import { useNavigate } from 'react-router-dom'

export default function OffersView() {
  const [offers, setOffers] = useState([])
  const [deleteModalVisible, setDeleteModalVisible] = useState(false)
  const [selectedOffer, setSelectedOffer] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`${BACKEND_BASE_URL}/offers`)
      .then((res) => setOffers(res.data))
      .catch((err) => console.error(err))
  }, [])

  const getDiscountRate = (offer) => {
    const rate = ((offer.original_price - offer.offer_price) * 100) / offer.original_price
    return rate.toFixed(2)
  }

  return (
    <>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>All Offers</strong>
            </CCardHeader>
            <CCardBody>
              <CTable striped hover>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Product Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Original Price</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Offer Price</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Discount Rate</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Valid Till</CTableHeaderCell>
                    <CTableHeaderCell scope="col"></CTableHeaderCell>
                    <CTableHeaderCell scope="col"></CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {offers.map((offer, index) => (
                    <CTableRow key={index}>
                      <CTableDataCell>{index + 1}</CTableDataCell>
                      <CTableDataCell>{offer.product}</CTableDataCell>
                      <CTableDataCell>{getFormattedPrice(offer.original_price)}</CTableDataCell>
                      <CTableDataCell>{getFormattedPrice(offer.offer_price)}</CTableDataCell>
                      <CTableDataCell>{getDiscountRate(offer) + ' %'}</CTableDataCell>
                      <CTableDataCell>{getDateTimeString(offer.valid_till)}</CTableDataCell>
                      <CTableDataCell>
                        <FiEdit
                          style={{ cursor: 'pointer' }}
                          onClick={() => navigate(`/offers/edit/${offer.offer_id}`)}
                        />
                      </CTableDataCell>
                      <CTableDataCell>
                        <MdOutlineDeleteOutline
                          color="red"
                          onClick={() => {
                            setSelectedOffer(offer)
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
      <OfferDeleteModal
        visible={deleteModalVisible}
        setVisible={setDeleteModalVisible}
        selectedOffer={selectedOffer}
      />
    </>
  )
}

import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { BACKEND_BASE_URL } from '../../constants'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)

    axios.post(`${BACKEND_BASE_URL}/login`, formData).then((res) => {
      if (res.data.length > 0) {
        navigate('/dashboard')
      } else {
        console.log('toast')
      }
    })
  }

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={6}>
            <CCard className="p-4">
              <CCardBody>
                <CForm onSubmit={handleLogin}>
                  <h1>Login</h1>
                  <p className="text-body-secondary">Sign In to your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput placeholder="Username" name="username" />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput type="password" placeholder="Password" name="password" />
                  </CInputGroup>
                  <CCol className="d-grid">
                    <CButton color="primary" type="submit">
                      Login
                    </CButton>
                  </CCol>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login

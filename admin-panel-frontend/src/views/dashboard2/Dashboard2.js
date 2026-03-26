import React, { useEffect, useState } from 'react'
import classNames from 'classnames'

import { CCol, CRow, CWidgetStatsC } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilBasket,
  cilChartPie,
  cilPeople,
  cilSpeech,
  cilSpeedometer,
  cilUserFollow,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'
import ChartBarExample from './ChartBarExample'
import axios from 'axios'
import { BACKEND_BASE_URL } from '../../constants'

const Dashboard2 = () => {
  const [graphData, setGraphData] = useState([])

  useEffect(() => {
    axios.get(`${BACKEND_BASE_URL}/get-summary`).then((res) => setGraphData(res.data))
  })

  return (
    <>
      <CRow xs={{ gutter: 4 }}>
        <CCol xs={6} lg={4} xxl={2}>
          <CWidgetStatsC
            color="info"
            icon={<CIcon icon={cilPeople} height={36} />}
            value="87.500"
            title="Visitors"
            inverse
            progress={{ value: 75 }}
          />
        </CCol>
        <CCol xs={6} lg={4} xxl={2}>
          <CWidgetStatsC
            color="success"
            icon={<CIcon icon={cilUserFollow} height={36} />}
            value="385"
            title="New Clients"
            inverse
            progress={{ value: 75 }}
          />
        </CCol>
        <CCol xs={6} lg={4} xxl={2}>
          <CWidgetStatsC
            color="warning"
            icon={<CIcon icon={cilBasket} height={36} />}
            value="1238"
            title="Products sold"
            inverse
            progress={{ value: 75 }}
          />
        </CCol>
        <CCol xs={6} lg={4} xxl={2}>
          <CWidgetStatsC
            color="primary"
            icon={<CIcon icon={cilChartPie} height={36} />}
            value="28%"
            title="Returning Visitors"
            inverse
            progress={{ value: 75 }}
          />
        </CCol>
        <CCol xs={6} lg={4} xxl={2}>
          <CWidgetStatsC
            color="danger"
            icon={<CIcon icon={cilSpeedometer} height={36} />}
            value="5:34:11"
            title="Avg. Time"
            inverse
            progress={{ value: 75 }}
          />
        </CCol>
        <CCol xs={6} lg={4} xxl={2}>
          <CWidgetStatsC
            color="info"
            icon={<CIcon icon={cilSpeech} height={36} />}
            value="972"
            title="Comments"
            inverse
            progress={{ value: 75 }}
          />
        </CCol>
      </CRow>
      <ChartBarExample graphData={graphData} />
    </>
  )
}

export default Dashboard2

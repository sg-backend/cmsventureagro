import React, { useState }from 'react'

import {
  CCardGroup,
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,CModalTitle,CLabel,CInput,CFormGroup,CInputRadio
} from '@coreui/react'
// import { Buttons } from '../buttons'
// import {
//   CChartBar,
//   CChartLine,
//   CChartDoughnut,
//   CChartRadar,
//   CChartPie,
//   CChartPolarArea
// } from '@coreui/react-chartjs'
// import { DocsLink } from 'src/reusable'



const Charts = () => {

  const [primary, setPrimary] = useState(false)
  const [success, setSuccess] = useState(false)
  const [warning, setWarning] = useState(false)

 
  return (

    <>

            <CRow>
              <CCol xs="3" md="3" lg="12" style={{paddingBottom:'3%'}}>
              {/* <CButton color="warning" onClick={() => setWarning(!warning)} className="mr-1">Add Personal Info</CButton> */}
                <CModal 
                    show={warning} 
                    onClose={() => setWarning(!warning)}
                    color="warning"
                  >
                    <CModalHeader closeButton>
                      <CModalTitle>Personal Information</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                    <CFormGroup>
                        <CLabel htmlFor="company">Name</CLabel>
                        <CInput id="name" placeholder="Enter your name *"  required/>
                      </CFormGroup>
                      <CFormGroup>
                        <CLabel htmlFor="number">Mobile No</CLabel>
                        <CInput id="mobile" placeholder="Enter your Mobile No *" required/>
                      </CFormGroup>
                      <CFormGroup>
                        <CLabel htmlFor="email">E-Mail</CLabel>
                        <CInput  type="email" id="email" placeholder="Enter your Email *" required />
                      </CFormGroup>
                      <CLabel htmlFor="date-input">Date of Birth</CLabel>
                      <CInput type="date" id="date-input" name="date-input" placeholder="Date of Birth *"  required/>
                      <CFormGroup>
                        <CLabel htmlFor="city">City</CLabel>
                        <CInput  type="text" id="city" placeholder="Enter your City" />
                      </CFormGroup>
                      <CFormGroup>
                        <CLabel htmlFor="address">Your Complete Address</CLabel>
                        <CInput  type="text" id="address" placeholder="Enter your Complete Address" />
                      </CFormGroup>
                      <CFormGroup> <CLabel htmlFor="">Gender</CLabel>   </CFormGroup>
                      <CFormGroup variant="custom-radio" inline>
                      <CInputRadio custom id="inline-radio1" name="inline-radios" value="option1" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-radio1">Male</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-radio" inline>
                      <CInputRadio custom id="inline-radio2" name="inline-radios" value="option2" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-radio2">Female</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-radio" inline>
                      <CInputRadio custom id="inline-radio3" name="inline-radios" value="option3" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-radio3">Other</CLabel>
                    </CFormGroup>
                    </CModalBody>
                    <CModalFooter>
                      <CButton color="primary" >
                        Submit
                      </CButton>{' '}
                      <CButton color="secondary" >
                        Cancel
                      </CButton>
                    </CModalFooter>
                  </CModal>
              </CCol>
            </CRow>
            
            <CRow>
              <CCol xs="3" md="3" lg="12" >
                <CModal 
                    show={success} 
                    onClose={() => setSuccess(!success)}
                    color="success"
                  >
                    <CModalHeader closeButton>
                      <CModalTitle>Personal Information</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                    <CFormGroup>
                        <CLabel htmlFor="company">Name</CLabel>
                        <CInput id="name" placeholder="Enter your name *"  required/>
                      </CFormGroup>
                      <CFormGroup>
                        <CLabel htmlFor="number">Mobile No</CLabel>
                        <CInput id="mobile" placeholder="Enter your Mobile No *"  required/>
                      </CFormGroup>
                      <CFormGroup>
                        <CLabel htmlFor="email">E-Mail</CLabel>
                        <CInput  type="email" id="email" placeholder="Enter your Email *"  required/>
                      </CFormGroup>
                      <CLabel htmlFor="date-input">Date of Birth</CLabel>
                      <CInput type="date" id="date-input" name="date-input" placeholder="Date of Birth *"  required/>
                      <CFormGroup>
                        <CLabel htmlFor="city">City</CLabel>
                        <CInput  type="text" id="city" placeholder="Enter your City" />
                      </CFormGroup>
                      <CFormGroup>
                        <CLabel htmlFor="address">Your Complete Address</CLabel>
                        <CInput  type="text" id="address" placeholder="Enter your Complete Address" />
                      </CFormGroup>
                      <CFormGroup> <CLabel htmlFor="">Gender</CLabel>   </CFormGroup>
                      <CFormGroup variant="custom-radio" inline>
                      <CInputRadio custom id="inline-radio1" name="inline-radios" value="option1" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-radio1">Male</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-radio" inline>
                      <CInputRadio custom id="inline-radio2" name="inline-radios" value="option2" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-radio2">Female</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-radio" inline>
                      <CInputRadio custom id="inline-radio3" name="inline-radios" value="option3" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-radio3">Other</CLabel>
                    </CFormGroup>
                    </CModalBody>
                    <CModalFooter>
                      <CButton color="primary" >
                        Submit
                      </CButton>{' '}
                      <CButton color="secondary" >
                        Cancel
                      </CButton>
                    </CModalFooter>
                  </CModal>
              </CCol>
            </CRow>

            <CRow>
              <CCol xs="12" lg="12">
              {/* <CButton style={{backgroundColor:'Orange',color:'white'}}>Upgrade</CButton> */}
              <div class="col-12 col-12 table-responsive">
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Mobile No</th>
                        <th>E-Mail</th>
                        <th>Birth Date</th>
                        <th>City</th>
                        <th>Complete Address</th>
                        <th>Gender</th>
                        <th>Delete Button</th>
                        <th>Update Button</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>995585822</td>
                        <td>abc@gmail.com</td>
                        <td>12-02-2021</td>
                        <td>Pune</td>
                        <td>Mundwa Pune</td>
                        <td>Female</td>
                        <td><CButton block color="danger" style={{width:'50%'}} className="delbtn">Delete</CButton></td>
                        <td><CButton color="success" onClick={() => setSuccess(!success)} className="mr-1">Update</CButton></td>
                      </tr>
                      
                      <tr>
                        <th scope="row">2</th>
                        <td>Mark</td>
                        <td>995585822</td>
                        <td>abc@gmail.com</td>
                        <td>12-02-2021</td>
                        <td>Pune</td>
                        <td>Mundwa Pune</td>
                        <td>Female</td>
                        <td><CButton block color="danger" style={{width:'50%'}} className="delbtn">Delete</CButton></td>
                        <td><CButton color="success" onClick={() => setSuccess(!success)} className="mr-1">Update</CButton></td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Mark</td>
                        <td>995585822</td>
                        <td>abc@gmail.com</td>
                        <td>12-02-2021</td>
                        <td>Pune</td>
                        <td>Mundwa Pune</td>
                        <td>Female</td>
                        <td><CButton block color="danger" style={{width:'50%'}} className="delbtn">Delete</CButton></td>
                        <td><CButton color="success" onClick={() => setSuccess(!success)} className="mr-1">Update</CButton></td>
                      </tr> 
                    </tbody>
                  </table>
                  </div>
              </CCol>
              </CRow>
     
      {/* <CCard>
      //   <CCardHeader>
      //     Bar Chart
      //     <DocsLink href="http://www.chartjs.org"/>
      //   </CCardHeader>
      //   <CCardBody>
      //     <CChartBar
      //       datasets={[
      //         {
      //           label: 'GitHub Commits',
      //           backgroundColor: '#f87979',
      //           data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
      //         }
      //       ]}
      //       labels="months"
      //       options={{
      //         tooltips: {
      //           enabled: true
      //         }
      //       }}
      //     />
      //   </CCardBody>
      // </CCard>

      // <CCard>
      //   <CCardHeader>
      //     Doughnut Chart
      //   </CCardHeader>
      //   <CCardBody>
      //     <CChartDoughnut
      //       datasets={[
      //         {
      //           backgroundColor: [
      //             '#41B883',
      //             '#E46651',
      //             '#00D8FF',
      //             '#DD1B16'
      //           ],
      //           data: [40, 20, 80, 10]
      //         }
      //       ]}
      //       labels={['VueJs', 'EmberJs', 'ReactJs', 'AngularJs']}
      //       options={{
      //         tooltips: {
      //           enabled: true
      //         }
      //       }}
      //     />
      //   </CCardBody>
      // </CCard>

      // <CCard>
      //   <CCardHeader>
      //     Line Chart
      //   </CCardHeader>
      //   <CCardBody>
      //     <CChartLine
      //       datasets={[
      //         {
      //           label: 'Data One',
      //           backgroundColor: 'rgb(228,102,81,0.9)',
      //           data: [30, 39, 10, 50, 30, 70, 35]
      //         },
      //         {
      //           label: 'Data Two',
      //           backgroundColor: 'rgb(0,216,255,0.9)',
      //           data: [39, 80, 40, 35, 40, 20, 45]
      //         }
      //       ]}
      //       options={{
      //         tooltips: {
      //           enabled: true
      //         }
      //       }}
      //       labels="months"
      //     />
      //   </CCardBody>
      // </CCard>

      // <CCard>
      //   <CCardHeader>
      //     Pie Chart
      //   </CCardHeader>
      //   <CCardBody>
      //     <CChartPie
      //       datasets={[
      //         {
      //           backgroundColor: [
      //             '#41B883',
      //             '#E46651',
      //             '#00D8FF',
      //             '#DD1B16'
      //           ],
      //           data: [40, 20, 80, 10]
      //         }
      //       ]}
      //       labels={['VueJs', 'EmberJs', 'ReactJs', 'AngularJs']}
      //       options={{
      //         tooltips: {
      //           enabled: true
      //         }
      //       }}
      //     />
      //   </CCardBody>
      // </CCard>

      // <CCard>
      //   <CCardHeader>
      //     Polar Area Chart
      //   </CCardHeader>
      //   <CCardBody>
      //     <CChartPolarArea
      //       datasets={[
      //         {
      //           label: 'My First dataset',
      //           backgroundColor: 'rgba(179,181,198,0.2)',
      //           pointBackgroundColor: 'rgba(179,181,198,1)',
      //           pointBorderColor: '#fff',
      //           pointHoverBackgroundColor: 'rgba(179,181,198,1)',
      //           pointHoverBorderColor: 'rgba(179,181,198,1)',
      //           data: [65, 59, 90, 81, 56, 55, 40]
      //         },
      //         {
      //           label: 'My Second dataset',
      //           backgroundColor: 'rgba(255,99,132,0.2)',
      //           pointBackgroundColor: 'rgba(255,99,132,1)',
      //           pointBorderColor: '#fff',
      //           pointHoverBackgroundColor: 'rgba(255,99,132,1)',
      //           pointHoverBorderColor: 'rgba(255,99,132,1)',
      //           data: [28, 48, 40, 19, 96, 27, 100]
      //         }
      //       ]}
      //       options={{
      //         aspectRatio: 1.5,
      //         tooltips: {
      //           enabled: true
      //         }
      //       }}
      //       labels={[
      //         'Eating', 'Drinking', 'Sleeping', 'Designing',
      //         'Coding', 'Cycling', 'Running'
      //       ]}
      //     />
      //   </CCardBody>
      // </CCard>

      // <CCard>
      //   <CCardHeader>
      //     Radar Chart
      //   </CCardHeader>
      //   <CCardBody>
      //     <CChartRadar
      //       datasets={[
      //         {
      //           label: '2019',
      //           backgroundColor: 'rgba(179,181,198,0.2)',
      //           borderColor: 'rgba(179,181,198,1)',
      //           pointBackgroundColor: 'rgba(179,181,198,1)',
      //           pointBorderColor: '#fff',
      //           pointHoverBackgroundColor: '#fff',
      //           pointHoverBorderColor: 'rgba(179,181,198,1)',
      //           tooltipLabelColor: 'rgba(179,181,198,1)',
      //           data: [65, 59, 90, 81, 56, 55, 40]
      //         },
      //         {
      //           label: '2020',
      //           backgroundColor: 'rgba(255,99,132,0.2)',
      //           borderColor: 'rgba(255,99,132,1)',
      //           pointBackgroundColor: 'rgba(255,99,132,1)',
      //           pointBorderColor: '#fff',
      //           pointHoverBackgroundColor: '#fff',
      //           pointHoverBorderColor: 'rgba(255,99,132,1)',
      //           tooltipLabelColor: 'rgba(255,99,132,1)',
      //           data: [28, 48, 40, 19, 96, 27, 100]
      //         }
      //       ]}
      //       options={{
      //         aspectRatio: 1.5,
      //         tooltips: {
      //           enabled: true
      //         }
      //       }}
      //       labels={[
      //         'Eating', 'Drinking', 'Sleeping', 'Designing',
      //         'Coding', 'Cycling', 'Running'
      //       ]}
      //     />
      //   </CCardBody>
      // </CCard> */}
  </>
  )
}

export default Charts;

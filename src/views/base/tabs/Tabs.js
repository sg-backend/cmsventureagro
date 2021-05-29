import React, { useState } from 'react'
import {
  CCol,
  CNav,
  CNavItem,
  CNavLink,
  CRow,
  CTabContent,
  CTabPane,
  CCard,
  CCardBody,
  CTabs,
  CCardHeader,CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,CModalTitle,CLabel,CInput,CFormGroup,CInputRadio,CSelect
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'

const Tabs = () => {
  const [active, setActive] = useState(1)
  const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.'
  const [primary, setPrimary] = useState(false)
  const [success, setSuccess] = useState(false)
  const [warning, setWarning] = useState(false)
 
 
  return (

    <>
   
            <CRow>
              <CCol xs="3" md="3" lg="12" style={{paddingBottom:'3%'}}>
              <CButton color="warning" onClick={() => setWarning(!warning)} className="mr-1">Apply Leave</CButton>
                <CModal 
                    show={warning} 
                    onClose={() => setWarning(!warning)}
                    color="warning"
                  >
                    <CModalHeader closeButton>
                      <CModalTitle>Attendance Fragment</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                    <CFormGroup>
                    <CInput type="date" id="date-input" name="date-input" placeholder="Date of Birth" />
                      </CFormGroup>
                      <CFormGroup>
                        <CInput id="reason" type="text" placeholder="Reason" />
                      </CFormGroup>
                      <CFormGroup>
                        <CInput  type="text" id="reporting" placeholder="Reporting Manager" />
                      </CFormGroup>
                      <CFormGroup row>
                      <CCol xs="12" md="12" size="lg">
                        <CSelect custom size="lg" name="selectLg" id="selectLg">
                          <option value="0">Select Reoprting Manager</option>
                          <option value="1">Option #1</option>
                          <option value="2">Option #2</option>
                          <option value="3">Option #3</option>
                        </CSelect>
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol xs="12" md="12" size="lg">
                        <CSelect custom size="lg" name="selectLg" id="selectLg">
                          <option value="0">Select Leave</option>
                          <option value="1">Paid Leave</option>
                          <option value="2">Sick Leave</option>
                          <option value="3">Casual Leave</option>
                        </CSelect>
                      </CCol>
                    </CFormGroup>
                    <CFormGroup>
                        <CInput  type="text" id="typeleave" placeholder="Type Of Leave" />
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
                    show={primary} 
                    onClose={() => setPrimary(!primary)}
                    color="primary"
                  >
                    <CModalHeader closeButton>
                      <CModalTitle>Add Attendance Fragment</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                    <CFormGroup>
                    <CInput type="date" id="date-input" name="date-input" placeholder="Date of Birth" />
                      </CFormGroup>
                      <CFormGroup>
                        <CInput id="reason" type="text" placeholder="Reason" />
                      </CFormGroup>
                      <CFormGroup>
                        <CInput  type="text" id="reporting" placeholder="Reporting Manager" />
                      </CFormGroup>
                      <CFormGroup row>
                      <CCol xs="12" md="12" size="lg">
                        <CSelect custom size="lg" name="selectLg" id="selectLg">
                          <option value="0">Select Reoprting Manager</option>
                          <option value="1">Option #1</option>
                          <option value="2">Option #2</option>
                          <option value="3">Option #3</option>
                        </CSelect>
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol xs="12" md="12" size="lg">
                        <CSelect custom size="lg" name="selectLg" id="selectLg">
                          <option value="0">Select Leave</option>
                          <option value="1">Paid Leave</option>
                          <option value="2">Sick Leave</option>
                          <option value="3">Casual Leave</option>
                        </CSelect>
                      </CCol>
                    </CFormGroup>
                    <CFormGroup>
                        <CInput  type="text" id="typeleave" placeholder="Type Of Leave" />
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
              <CCol xs="3" md="3" lg="12" style={{}}>
              <CModal 
                    show={success} 
                    onClose={() => setSuccess(!success)}
                    color="success"
                  >
                    <CModalHeader closeButton>
                      <CModalTitle> Update Attendance Fragment</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                    <CFormGroup>
                    <CInput type="date" id="date-input" name="date-input" placeholder="Date of Birth" />
                      </CFormGroup>
                      <CFormGroup>
                        <CInput id="reason" type="text" placeholder="Reason" />
                      </CFormGroup>
                      <CFormGroup>
                        <CInput  type="text" id="reporting" placeholder="Reporting Manager" />
                      </CFormGroup>
                      <CFormGroup row>
                      <CCol xs="12" md="12" size="lg">
                        <CSelect custom size="lg" name="selectLg" id="selectLg">
                          <option value="0">Select Reoprting Manager</option>
                          <option value="1">Option #1</option>
                          <option value="2">Option #2</option>
                          <option value="3">Option #3</option>
                        </CSelect>
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol xs="12" md="12" size="lg">
                        <CSelect custom size="lg" name="selectLg" id="selectLg">
                          <option value="0">Select Leave</option>
                          <option value="1">Paid Leave</option>
                          <option value="2">Sick Leave</option>
                          <option value="3">Casual Leave</option>
                        </CSelect>
                      </CCol>
                    </CFormGroup>
                    <CFormGroup>
                        <CInput  type="text" id="typeleave" placeholder="Type Of Leave" />
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
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Date</th>
                        <th>Reason</th>
                        <th>Reoprting Manager</th>
                        <th>Select Report Manager</th>
                        <th>Select Leave</th>
                        <th>Type of Leave</th>
                        <th>Add Button</th>
                        <th>Delete Button</th>
                        <th>Update Button</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>12-12-2021</td>
                        <td>Feel not well </td>
                        <td>DS</td>
                        <td>DS</td>
                        <td>Sick</td>
                        <td>Sick</td>
                        <td><CButton color="primary" onClick={() => setPrimary(!primary)} className="mr-1">Add</CButton></td>
                        <td><CButton block color="danger">Delete</CButton></td>
                        <td><CButton color="success" onClick={() => setSuccess(!success)} className="mr-1">Update</CButton></td>
                      </tr>
                      
                      <tr>
                        <th scope="row">1</th>
                        <td>12-12-2021</td>
                        <td>Feel not well </td>
                        <td>DS</td>
                        <td>DS</td>
                        <td>Sick</td>
                        <td>Sick</td>
                        <td><CButton color="primary" onClick={() => setPrimary(!primary)} className="mr-1">Add</CButton></td>
                        <td><CButton block color="danger">Delete</CButton></td>
                        <td><CButton color="success" onClick={() => setSuccess(!success)} className="mr-1">Update</CButton></td>
                      </tr>
                      <tr>
                        <th scope="row">1</th>
                        <td>12-12-2021</td>
                        <td>Feel not well </td>
                        <td>DS</td>
                        <td>DS</td>
                        <td>Sick</td>
                        <td>Sick</td>
                        <td><CButton color="primary" onClick={() => setPrimary(!primary)} className="mr-1">Add</CButton></td>
                        <td><CButton block color="danger">Delete</CButton></td>
                        <td><CButton color="success" onClick={() => setSuccess(!success)} className="mr-1">Update</CButton></td>
                      </tr>
                      
                    </tbody>
                    
                  </table>
              </CCol>
              </CRow>

         {/* <CCard>
      //     <CCardHeader>
      //       Index indentifiers
      //       <DocsLink name="CTabs"/>
      //     </CCardHeader>
      //     <CCardBody>
      //       <CTabs>
      //         <CNav variant="tabs">
      //           <CNavItem>
      //             <CNavLink>
      //               Home
      //             </CNavLink>
      //           </CNavItem>
      //           <CNavItem>
      //             <CNavLink>
      //               Profile
      //             </CNavLink>
      //           </CNavItem>
      //           <CNavItem>
      //             <CNavLink>
      //               Messages
      //             </CNavLink>
      //           </CNavItem>
      //         </CNav>
      //         <CTabContent>
      //           <CTabPane>
      //             {`1. ${lorem}`}
      //           </CTabPane>
      //           <CTabPane>
      //             {`2. ${lorem}`}
      //           </CTabPane>
      //           <CTabPane>
      //             {`3. ${lorem}`}
      //           </CTabPane>
      //         </CTabContent>
      //       </CTabs>
      //     </CCardBody>
      //   </CCard>
      // </CCol>
      // <CCol xs="12" md="6" className="mb-4">
      //   <CCard>
      //     <CCardHeader>
      //       Id indentifiers
      //     </CCardHeader>
      //     <CCardBody>
      //       <CTabs activeTab="home">
      //         <CNav variant="tabs">
      //           <CNavItem>
      //             <CNavLink data-tab="home">
      //               Home
      //             </CNavLink>
      //           </CNavItem>
      //           <CNavItem>
      //             <CNavLink data-tab="profile">
      //               Profile
      //             </CNavLink>
      //           </CNavItem>
      //           <CNavItem>
      //             <CNavLink data-tab="messages">
      //               Messages
      //             </CNavLink>
      //           </CNavItem>
      //         </CNav>
      //         <CTabContent>
      //           <CTabPane data-tab="home">
      //             {`1. ${lorem}`}
      //           </CTabPane>
      //           <CTabPane data-tab="profile">
      //             {`2. ${lorem}`}
      //           </CTabPane>
      //           <CTabPane data-tab="messages">
      //             {`3. ${lorem}`}
      //           </CTabPane>
      //         </CTabContent>
      //       </CTabs>
      //     </CCardBody>
      //   </CCard>
      // </CCol>

      // <CCol xs="12" md="6" className="mb-4">
      //   <CCard>
      //     <CCardHeader>
      //       No fade animation tabs
      //     </CCardHeader>
      //     <CCardBody>
      //       <CTabs>
      //         <CNav variant="tabs">
      //           <CNavItem>
      //             <CNavLink>
      //               <CIcon name="cil-calculator" />
      //             </CNavLink>
      //           </CNavItem>
      //           <CNavItem>
      //             <CNavLink>
      //               <CIcon name="cil-basket" />
      //             </CNavLink>
      //           </CNavItem>
      //           <CNavItem>
      //             <CNavLink>
      //               <CIcon name="cil-chart-pie"/>
      //             </CNavLink>
      //           </CNavItem>
      //         </CNav>
      //         <CTabContent fade={false}>
      //           <CTabPane>
      //             {`1. ${lorem}`}
      //           </CTabPane>
      //           <CTabPane>
      //             {`2. ${lorem}`}
      //           </CTabPane>
      //           <CTabPane>
      //             {`3. ${lorem}`}
      //           </CTabPane>
      //         </CTabContent>
      //       </CTabs>
      //     </CCardBody>
      //   </CCard>
      // </CCol>

      // <CCol xs="12" md="6" className="mb-4">
      //   <CCard>
      //     <CCardHeader>
      //       Controlled tabs
      //     </CCardHeader>
      //     <CCardBody>
      //       <CTabs activeTab={active} onActiveTabChange={idx => setActive(idx)}>
      //         <CNav variant="tabs">
      //           <CNavItem>
      //             <CNavLink>
      //               <CIcon name="cil-calculator" />
      //               { active === 0 && ' Home'}
      //             </CNavLink>
      //           </CNavItem>
      //           <CNavItem>
      //             <CNavLink>
      //               <CIcon name="cil-basket" />
      //               { active === 1 && ' Profile'}
      //             </CNavLink>
      //           </CNavItem>
      //           <CNavItem>
      //             <CNavLink>
      //               <CIcon name="cil-chart-pie"/>
      //               { active === 2 && ' Messages'}
      //             </CNavLink>
      //           </CNavItem>
      //         </CNav>
      //         <CTabContent>
      //           <CTabPane>
      //             {`1. ${lorem}`}
      //           </CTabPane>
      //           <CTabPane>
      //             {`2. ${lorem}`}
      //           </CTabPane>
      //           <CTabPane>
      //             {`3. ${lorem}`}
      //           </CTabPane>
      //         </CTabContent>
      //       </CTabs>
      //     </CCardBody>
      //   </CCard> */}
    </>
  )
}

export default Tabs

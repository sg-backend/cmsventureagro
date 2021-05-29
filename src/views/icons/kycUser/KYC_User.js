import React,{ useState } from 'react'
import {CCardGroup,
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
  CModalHeader,CModalTitle,CLabel,CInput,CFormGroup,CInputRadio } from '@coreui/react'
import { getIconsView } from '../brands/Brands.js'
import { flagSet } from '@coreui/icons'
import { DocsLink } from 'src/reusable'

const CoreUIIcons = () => {
  const [primary, setPrimary] = useState(false)
  const [success, setSuccess] = useState(false)
  const [warning, setWarning] = useState(false)

  return (

  <>
  
  <CRow>
              <CCol xs="3" md="3" lg="12" style={{paddingBottom:'3%'}}>
              <CButton color="warning" onClick={() => setWarning(!warning)} className="mr-1">KYC User Details</CButton>
                <CModal 
                    show={warning} 
                    onClose={() => setWarning(!warning)}
                    color="warning"
                  >
                    <CModalHeader closeButton>
                      <CModalTitle>Add KYC User Information</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                    <CFormGroup>
                        <CInput id="ID" type="number" placeholder="Enter User ID *"  required/>
                      </CFormGroup>
                      <CFormGroup>
                        <CInput id="name"  type="text" placeholder="Enter User name *"  required/>
                      </CFormGroup>
                      <CFormGroup>
                        <CInput  type="email" id="email" placeholder="Enter your Email *" required />
                      </CFormGroup>
                      <CFormGroup>
                        <CInput id="KYCno" type="number" placeholder="Enter User Mobile no  *" required/>
                      </CFormGroup>
                      <CFormGroup>
                      <CInput  type="text" id="kyc_city" placeholder="Enter user City *" required />
                      </CFormGroup>
                      <CFormGroup>
                      <CInput  type="date" id="kyc_date" placeholder="Enter user Date *" required />
                      </CFormGroup>
                      <CFormGroup>
                      <CInput  type="text" id="kyc_add" placeholder="Enter user Address *" required />
                      </CFormGroup>
                    </CModalBody>
                    <CModalFooter>
                      <CButton color="warning" >
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
                      <CModalTitle>Update KYC User Information</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                    <CFormGroup>
                        <CInput id="ID" type="number" placeholder="Enter User ID *"  required/>
                      </CFormGroup>
                      <CFormGroup>
                        <CInput id="name"  type="text" placeholder="Enter User name *"  required/>
                      </CFormGroup>
                      <CFormGroup>
                        <CInput  type="email" id="email" placeholder="Enter your Email *" required />
                      </CFormGroup>
                      <CFormGroup>
                        <CInput id="KYCno" type="number" placeholder="Enter User Mobile no  *" required/>
                      </CFormGroup>
                      <CFormGroup>
                      <CInput  type="text" id="kyc_city" placeholder="Enter user City *" required />
                      </CFormGroup>
                      <CFormGroup>
                      <CInput  type="date" id="kyc_date" placeholder="Enter user Date *" required />
                      </CFormGroup>
                      <CFormGroup>
                      <CInput  type="text" id="kyc_add" placeholder="Enter user Address *" required />
                      </CFormGroup>
                    </CModalBody>
                    <CModalFooter>
                      <CButton color="success" >
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
              <div class="col-12 col-12 table-responsive">
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>E-Mail</th>
                        <th>Mobile No</th>
                        <th>City</th>
                        <th>Date</th>
                        <th>Address</th>
                        <th>Delete Button</th>
                        <th>Update Button</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>100</td>
                        <td>Mark</td>
                        <td>abc@gmail.com</td>
                        <td>995585822</td>
                        <td>Pune</td>
                        <td>12:02:2021</td>
                        <td>Mundwa Pune</td>
                        <td><CButton block color="danger" style={{width:'50%'}} className="delbtn">Delete</CButton></td>
                        <td><CButton color="success" onClick={() => setSuccess(!success)} className="mr-1">Update</CButton></td>
                      </tr>
                      
                      <tr>
                        <th scope="row">2</th>
                        <td>100</td>
                        <td>Mark</td>
                        <td>abc@gmail.com</td>
                        <td>995585822</td>
                        <td>Pune</td>
                        <td>12:02:2021</td>
                        <td>Mundwa Pune</td>
                        <td><CButton block color="danger" style={{width:'50%'}} className="delbtn">Delete</CButton></td>
                        <td><CButton color="success" onClick={() => setSuccess(!success)} className="mr-1">Update</CButton></td>
                      </tr>
                     
                    </tbody>
                    
                  </table>
                  </div>
              </CCol>
              </CRow>



    {/* <CCard>
      <CCardHeader>
        Flag Icons
        <DocsLink href="https://github.com/coreui/coreui-icons" text="GitHub"/>
      </CCardHeader>
      <CCardBody>
        <CRow className="text-center">
          {getIconsView(flagSet)}
        </CRow>
      </CCardBody>
    </CCard> */}
  </>
  )
}

export default CoreUIIcons

import React,{ useState } from 'react'
import {CCardGroup,
  CCol,
  CRow,
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,CModalTitle,CLabel,CInput,CFormGroup,CInputFile } from '@coreui/react'
import { getIconsView } from '../brands/Brands.js'
import { flagSet } from '@coreui/icons'
import { DocsLink } from 'src/reusable'

const DetailsGraduation = () => {
  const [primary, setPrimary] = useState(false)
  const [success, setSuccess] = useState(false)
  const [warning, setWarning] = useState(false)

  return (

  <>
  
  <CRow>
              <CCol xs="3" md="3" lg="12" style={{paddingBottom:'3%'}}>
              <CButton color="warning" onClick={() => setWarning(!warning)} className="mr-1">KYC Graduation Details</CButton>
                <CModal 
                    show={warning} 
                    onClose={() => setWarning(!warning)}
                    color="warning"
                  >
                    <CModalHeader closeButton>
                      <CModalTitle>Add KYC Graduation Information</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                    <CFormGroup>
                        <CInput id="graduname" type="text" placeholder="Enter Graduation Name*" required/>
                      </CFormGroup>
                      <CFormGroup>
                        <CInput id="gradustate"  type="text" placeholder="Enter Graduation State*" required/>
                      </CFormGroup>
                      <CFormGroup>
                        <CInput  type="number" id="gyear" placeholder="Enter Graduation Year*" required />
                      </CFormGroup>
                      <CFormGroup>
                        <CInput id="gboard" type="text" placeholder="Enter Graduation Board*" required/>
                      </CFormGroup>
                      <CFormGroup>
                        <CInput id="gname" type="text" placeholder="Enter Edu PG Name*" required/>
                      </CFormGroup>
                      <CFormGroup>
                        <CInput id="gstate" type="text" placeholder="Enter Edu PG State*" required/>
                      </CFormGroup>
                      <CFormGroup>
                        <CInput id="gyear" type="text" placeholder="Enter Edu PG Board*" required/>
                      </CFormGroup>
                      <CFormGroup>
                        <CInput id="clgyear" type="number" placeholder="Enter Edu PG Year*" required/>
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
                      <CModalTitle>Update KYC Graduation Information</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                    <CFormGroup>
                        <CInput id="graduname" type="text" placeholder="Enter Graduation Name*" required/>
                      </CFormGroup>
                      <CFormGroup>
                        <CInput id="gradustate"  type="text" placeholder="Enter Graduation State*" required/>
                      </CFormGroup>
                      <CFormGroup>
                        <CInput  type="number" id="gyear" placeholder="Enter Graduation Year*" required />
                      </CFormGroup>
                      <CFormGroup>
                        <CInput id="gboard" type="text" placeholder="Enter Graduation Board*" required/>
                      </CFormGroup>
                      <CFormGroup>
                        <CInput id="gname" type="text" placeholder="Enter Edu PG Name*" required/>
                      </CFormGroup>
                      <CFormGroup>
                        <CInput id="gstate" type="text" placeholder="Enter Edu PG State*" required/>
                      </CFormGroup>
                      <CFormGroup>
                        <CInput id="gyear" type="text" placeholder="Enter Edu PG Board*" required/>
                      </CFormGroup>
                      <CFormGroup>
                        <CInput id="clgyear" type="number" placeholder="Enter Edu PG Year*" required/>
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
                        <th>Graduation Name</th>
                        <th>Graduation State</th>
                        <th>Graduation Year</th>
                        <th>Graduation Board</th>
                        <th>Edu PG Name</th>
                        <th>Edu PG State</th>
                        <th>Edu PG Year</th>
                        <th>Edu PG Board</th>
                        <th>Delete Button</th>
                        <th>Update Button</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Engineering</td>
                        <td>Maharashtra</td>
                        <td>2018</td>
                        <td>CGPA</td>
                        <td>RC Patel</td>
                        <td>Maharashtra</td>
                        <td>2018</td>
                        <td>North Maharashtra</td>
                        <td><CButton block color="danger" style={{width:'70%'}} className="delbtn">Delete</CButton></td>
                        <td><CButton color="success" onClick={() => setSuccess(!success)} className="mr-1">Update</CButton></td>
                      </tr>
                      
                      <tr>
                        <th scope="row">2</th>
                        <td>Engineering</td>
                        <td>Maharashtra</td>
                        <td>2018</td>
                        <td>CGPA</td>
                        <td>RC Patel</td>
                        <td>Maharashtra</td>
                        <td>2018</td>
                        <td>North Maharashtra</td>
                        <td><CButton block color="danger" style={{width:'70%'}} className="delbtn">Delete</CButton></td>
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

export default DetailsGraduation

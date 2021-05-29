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

const DetailsEducation = () => {
  const [primary, setPrimary] = useState(false)
  const [success, setSuccess] = useState(false)
  const [warning, setWarning] = useState(false)

  return (

  <>
  
  <CRow>
              <CCol xs="3" md="3" lg="12" style={{paddingBottom:'3%'}}>
              <CButton color="warning" onClick={() => setWarning(!warning)} className="mr-1">KYC Eduaction Details</CButton>
                <CModal 
                    show={warning} 
                    onClose={() => setWarning(!warning)}
                    color="warning"
                  >
                    <CModalHeader closeButton>
                      <CModalTitle>Add KYC Eduaction Information</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                    <CFormGroup>
                        <CInput id="eduname" type="text" placeholder="Enter Education Name*" required/>
                      </CFormGroup>
                      <CFormGroup>
                        <CInput id="edustate"  type="text" placeholder="Enter Education State*" required/>
                      </CFormGroup>
                      <CFormGroup>
                        <CInput  type="number" id="year" placeholder="Enter Education Year*" required />
                      </CFormGroup>
                      <CFormGroup>
                        <CInput id="board" type="text" placeholder="Enter Eduaction Board*" required/>
                      </CFormGroup>
                      <CFormGroup>
                        <CInput id="clgname" type="text" placeholder="Enter Eduaction Collage Name*" required/>
                      </CFormGroup>
                      <CFormGroup>
                        <CInput id="clgstate" type="text" placeholder="Enter Eduaction Collage State*" required/>
                      </CFormGroup>
                      <CFormGroup>
                        <CInput id="clgyear" type="number" placeholder="Enter Eduaction Collage Year*" required/>
                      </CFormGroup>
                      <CFormGroup>
                        <CInput id="clgboard" type="text" placeholder="Enter Eduaction Collage Board*" required/>
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
                      <CModalTitle>Update KYC Eduaction Information</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                    <CFormGroup>
                        <CInput id="eduname" type="text" placeholder="Enter Education Name*" required/>
                      </CFormGroup>
                      <CFormGroup>
                        <CInput id="edustate"  type="text" placeholder="Enter Education State*" required/>
                      </CFormGroup>
                      <CFormGroup>
                        <CInput  type="number" id="year" placeholder="Enter Education Year*" required />
                      </CFormGroup>
                      <CFormGroup>
                        <CInput id="board" type="text" placeholder="Enter Eduaction Board*" required/>
                      </CFormGroup>
                      <CFormGroup>
                        <CInput id="clgname" type="text" placeholder="Enter Eduaction Collage Name*" required/>
                      </CFormGroup>
                      <CFormGroup>
                        <CInput id="clgstate" type="text" placeholder="Enter Eduaction Collage State*" required/>
                      </CFormGroup>
                      <CFormGroup>
                        <CInput id="clgyear" type="number" placeholder="Enter Eduaction Collage Year*" required/>
                      </CFormGroup>
                      <CFormGroup>
                        <CInput id="clgboard" type="text" placeholder="Enter Eduaction Collage Board*" required/>
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
                        <th>Education Name</th>
                        <th>Education State</th>
                        <th>Education Year</th>
                        <th>Education Board</th>
                        <th>Edu Collage Name</th>
                        <th>Edu Collage State</th>
                        <th>Edu Collage Year</th>
                        <th>Edu Collage Board</th>
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

export default DetailsEducation

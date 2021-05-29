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


     {/* Vehicle card Details  */}
         <CRow>
              <CCol xs="3" md="3" lg="12" style={{paddingBottom:'3%'}}>
              <CButton color="warning" onClick={() => setWarning(!warning)} className="mr-1">Vehicle Details</CButton>
                <CModal 
                    show={warning} 
                    onClose={() => setWarning(!warning)}
                    color="warning"
                  >
                    <CModalHeader closeButton>
                      <CModalTitle>Add Vehicle Details</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                    <CFormGroup>
                        <CInput id="adharNo" type="text" placeholder="Enter Vehicle Model*" required/>
                      </CFormGroup>
                      <CFormGroup>
                        <CInput id="accNo"  type="text" placeholder="Enter Vehicle No*" required/>
                      </CFormGroup>
                      <CFormGroup>
                        <CInput id="accNo"  type="text" placeholder="Enter Driving Licence No*" required/>
                      </CFormGroup>
                      <CFormGroup>
                        <CCol  xs="12" md="12" size="lg" >
                            <CInputFile 
                                id="file-multiple-input" 
                                name="file-multiple-input" 
                                type="file"
                                multiple
                                custom
                              />
                              <CLabel htmlFor="file-multiple-input" variant="custom-file" required>
                              Driving Licence Photo*
                              </CLabel>
                            </CCol>
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
                      <CModalTitle>Update Vehicle Details</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                    <CFormGroup>
                        <CInput id="adharNo" type="text" placeholder="Enter Vehicle Model*" required/>
                      </CFormGroup>
                      <CFormGroup>
                        <CInput id="accNo"  type="text" placeholder="Enter Vehicle No*" required/>
                      </CFormGroup>
                      <CFormGroup>
                        <CInput id="accNo"  type="text" placeholder="Enter Driving Licence No*" required/>
                      </CFormGroup>
                      <CFormGroup>
                        <CCol  xs="12" md="12" size="lg" >
                            <CInputFile 
                                id="file-multiple-input" 
                                name="file-multiple-input" 
                                type="file"
                                multiple
                                custom
                              />
                              <CLabel htmlFor="file-multiple-input" variant="custom-file" required>
                              Driving Licence Photo*
                              </CLabel>
                            </CCol>
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
        {/* Table */}
            <CRow>
              <CCol xs="12" lg="12">
              <div class="col-12 col-12 table-responsive">
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Vehicle Model</th>
                        <th>Vehicle Number</th>
                        <th>Driving Licence No</th>
                        <th>Driving Licence Photo</th>
                        <th>Delete Button</th>
                        <th>Update Button</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Suzuki</td>
                        <td>MH-255874</td>
                        <td>2657998133</td>
                        <td>D:/img/bankstatement.png</td>
                        <td><CButton block color="danger" style={{width:'70%'}} className="delbtn">Delete</CButton></td>
                        <td><CButton color="success" onClick={() => setSuccess(!success)} className="mr-1">Update</CButton></td>
                      </tr>
                      
                      <tr>
                        <th scope="row">2</th>
                        <td>Suzuki</td>
                        <td>MH-255874</td>
                        <td>2657998133</td>
                        <td>D:/img/bankstatement.png</td>
                        <td><CButton block color="danger" style={{width:'70%'}} className="delbtn">Delete</CButton></td>
                        <td><CButton color="success" onClick={() => setSuccess(!success)} className="mr-1">Update</CButton></td>
                      </tr>
                    </tbody> 
                  </table>
                  </div>
              </CCol>
              </CRow>


  </>
  )
}

export default DetailsEducation

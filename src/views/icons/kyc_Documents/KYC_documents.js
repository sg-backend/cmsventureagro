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
  {/* Adhar card Details  */}
             <CRow>
              <CCol xs="3" md="3" lg="12" style={{paddingBottom:'3%'}}>
              <CButton color="warning" onClick={() => setWarning(!warning)} className="mr-1">Adhar Card Details</CButton>
                <CModal 
                    show={warning} 
                    onClose={() => setWarning(!warning)}
                    color="warning"
                  >
                    <CModalHeader closeButton>
                      <CModalTitle>Add Adhar Card Information</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                    <CFormGroup>
                        <CInput id="adharNo" type="number" placeholder="Enter Adhar Card No*" required/>
                      </CFormGroup>
                      <CFormGroup>
                        <CInput id="accNo"  type="text" placeholder="Enter Adhar Name*" required/>
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
                              Adhar Card Front Photo*
                              </CLabel>
                            </CCol>
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
                            Adhar Card Back Photo*
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
                      <CModalTitle>Update Adhar Card Information</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                    <CFormGroup>
                        <CInput id="adharNo" type="number" placeholder="Enter Adhar Card No*" required/>
                      </CFormGroup>
                      <CFormGroup>
                        <CInput id="accNo"  type="text" placeholder="Enter Adhar Name*" required/>
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
                              Adhar Card Front Photo*
                              </CLabel>
                            </CCol>
                      </CFormGroup>
                      <CFormGroup>
                        <CCol  xs="12" md="12" size="lg" >
                            <CInputFile 
                              id="file-multiple-input" 
                              name="file-multiple-input" 
                              multiple
                              custom
                            />
                            <CLabel htmlFor="file-multiple-input" variant="custom-file" required>
                            Adhar Card Back Photo*
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
                        <th>Adhar No</th>
                        <th>Adhar Name</th>
                        <th>Adhar Front Phote</th>
                        <th>Adhar Back Photo</th>
                        <th>Delete Button</th>
                        <th>Update Button</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>36587214581233</td>
                        <td>XYZ</td>
                        <td>D:/img/bank.png</td>
                        <td>D:/img/bankstatement.png</td>
                        <td><CButton block color="danger" style={{width:'70%'}} className="delbtn">Delete</CButton></td>
                        <td><CButton color="success" onClick={() => setSuccess(!success)} className="mr-1">Update</CButton></td>
                      </tr>
                      
                      <tr>
                        <th scope="row">2</th>
                        <td>36587214581233</td>
                        <td>XYZ</td>
                        <td>D:/img/bank.png</td>
                        <td>D:/img/bankstatement.png</td>
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

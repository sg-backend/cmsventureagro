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

const DetailsPAN = () => {
  const [primary, setPrimary] = useState(false)
  const [success, setSuccess] = useState(false)
  const [warning, setWarning] = useState(false)

  return (

  <>
 

    {/* PAN card Details  */}
         <CRow>
              <CCol xs="3" md="3" lg="12" style={{paddingBottom:'3%'}}>
              <CButton color="warning" onClick={() => setWarning(!warning)} className="mr-1">PAN Card Details</CButton>
                <CModal 
                    show={warning} 
                    onClose={() => setWarning(!warning)}
                    color="warning"
                  >
                    <CModalHeader closeButton>
                      <CModalTitle>Add PAN Card Information</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                    <CFormGroup>
                        <CInput id="PANNo" type="number" placeholder="Enter PAN Card No*" required/>
                      </CFormGroup>
                      <CFormGroup>
                        <CInput id="PANName"  type="text" placeholder="Enter PAN Name*" required/>
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
                              PAN Card Photo*
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
                            PAN Card Selfie*
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
                      <CModalTitle>Update PAN Card Information</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                    <CFormGroup>
                        <CInput id="adharNo" type="number" placeholder="Enter PAN Card No*" required/>
                      </CFormGroup>
                      <CFormGroup>
                        <CInput id="accNo"  type="text" placeholder="Enter PAN Name*" required/>
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
                              PAN Card Photo*
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
                            PAN Card Selfie*
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
                        <th>PAN No</th>
                        <th>PAN Name</th>
                        <th>PAN Card Phote</th>
                        <th>PAN Card Selfie</th>
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

    



  </>
  )
}

export default DetailsPAN

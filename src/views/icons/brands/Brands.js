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

const Bankkdetails = () => {
  const [primary, setPrimary] = useState(false)
  const [success, setSuccess] = useState(false)
  const [warning, setWarning] = useState(false)

  return (

  <>
  
  <CRow>
              <CCol xs="3" md="3" lg="12" style={{paddingBottom:'3%'}}>
              <CButton color="warning" onClick={() => setWarning(!warning)} className="mr-1">KYC Bank Details</CButton>
                <CModal 
                    show={warning} 
                    onClose={() => setWarning(!warning)}
                    color="warning"
                  >
                    <CModalHeader closeButton>
                      <CModalTitle>Add KYC Bank Information</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                    <CFormGroup>
                        <CInput id="accNo" type="number" placeholder="Enter Bank Account No*" required/>
                      </CFormGroup>
                      <CFormGroup>
                        <CInput id="accNo"  type="number" placeholder="Re-EnterBank Account No*" required/>
                      </CFormGroup>
                      <CFormGroup>
                        <CInput  type="text" id="ifsc" placeholder="Enter Bank IFSC Code*" required />
                      </CFormGroup>
                      <CFormGroup>
                        <CInput id="branch" type="text" placeholder="Enter Branch Name*" required/>
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
                              Bank cheque Photo*
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
                              Bank Statement Photo*
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
                      <CModalTitle>Update KYC Bank Information</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                    <CFormGroup>
                        <CInput id="accNo" type="number" placeholder="Enter Bank Account No*" required/>
                      </CFormGroup>
                      <CFormGroup>
                        <CInput id="accNo"  type="number" placeholder="Re-EnterBank Account No*" required/>
                      </CFormGroup>
                      <CFormGroup>
                        <CInput  type="text" id="ifsc" placeholder="Enter Bank IFSC Code*" required />
                      </CFormGroup>
                      <CFormGroup>
                        <CInput id="branch" type="text" placeholder="Enter Branch Name*" required/>
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
                              Bank cheque Photo*
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
                              Bank Statement Photo*
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

           

           

            <CRow>
              <CCol xs="12" lg="12">
              <div class="col-12 col-12 table-responsive">
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Account No</th>
                        <th>Re-Enter Acc No</th>
                        <th>IFSC</th>
                        <th>Branch Name</th>
                        <th>Cheque Photo</th>
                        <th>Statement Photo</th>
                        <th>Delete Button</th>
                        <th>Update Button</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>3658721458</td>
                        <td>3658721458</td>
                        <td>C-2354</td>
                        <td>Central Bank</td>
                        <td>D:/img/bank.png</td>
                        <td>D:/img/bankstatement.png</td>
                        <td><CButton block color="danger" style={{width:'70%'}} className="delbtn">Delete</CButton></td>
                        <td><CButton color="success" onClick={() => setSuccess(!success)} className="mr-1">Update</CButton></td>
                      </tr>
                      
                      <tr>
                        <th scope="row">2</th>
                        <td>3658721458</td>
                        <td>3658721458</td>
                        <td>C-2354</td>
                        <td>Central Bank</td>
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

export default Bankkdetails

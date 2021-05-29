import React ,{useState} from 'react'
import { CCard, CCardBody, CCardHeader, CRow ,CModal,
  CModalBody,
  CModalFooter,CCol,CButton,
  CModalHeader,CModalTitle,CLabel,CInput,CFormGroup,CSelect,CInputFile} from '@coreui/react'
import { freeSet } from '@coreui/icons'
import { getIconsView } from '../brands/Brands.js'
import { DocsLink } from 'src/reusable'

const CoreUIIcons = () => {
  const [primary, setPrimary] = useState(false)
  const [success, setSuccess] = useState(false)
  const [warning, setWarning] = useState(false)
  return (
    <>

           

            <CRow>
              <CCol xs="3" md="3" lg="12" style={{paddingBottom:'3%'}}>
              <CButton color="primary" onClick={() => setPrimary(!primary)} className="mr-1">Select Date</CButton>
              <CModal 
                    show={primary} 
                    onClose={() => setPrimary(!primary)}
                    color="primary"
                  >
                    <CModalHeader closeButton>
                      <CModalTitle>Payment Due Date</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                    <CFormGroup row>
                    
                      <CCol xs="12" md="12">
                        <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                      </CCol>
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
                      <CModalTitle>Payment Due Date</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                    <CFormGroup row>
                    
                      <CCol xs="12" md="12">
                        <CInput type="date" id="date-input" name="date-input" placeholder="date" />
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
                        <th>Payment Due Date</th>
                        <th>Delete Button</th>
                        <th>Update Button</th>
                   
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>12-05-2021</td>
                        <td><CButton block color="danger" style={{width:'30%'}} className="delbtn">Delete</CButton></td>
                        <td><CButton color="success" onClick={() => setSuccess(!success)} className="mr-1">Update</CButton></td>
                      </tr>
                      <tr>
                        <th scope="row">1</th>
                        <td>12-05-2021</td>
                        <td><CButton block color="danger" style={{width:'30%'}} className="delbtn">Delete</CButton></td>
                        <td><CButton color="success" onClick={() => setSuccess(!success)} className="mr-1">Update</CButton></td>
                      </tr>
                      <tr>
                        <th scope="row">1</th>
                        <td>12-05-2021</td>
                        <td><CButton block color="danger" style={{width:'30%'}} className="delbtn">Delete</CButton></td>
                        <td><CButton color="success" onClick={() => setSuccess(!success)} className="mr-1">Update</CButton></td>
                      </tr>
                      
                    </tbody>
                    
                  </table>
                  </div>
              </CCol>
              </CRow>















          {/* <CCard>
            <CCardHeader>
              Free Icons / as CIcon{' '}
              <DocsLink href="https://github.com/coreui/coreui-icons" text="GitHub"/>
            </CCardHeader>
            <CCardBody>
              <CRow className="text-center">
                {getIconsView(freeSet)}
              </CRow>
            </CCardBody>
          </CCard> */}
    </>
  )
}

export default CoreUIIcons

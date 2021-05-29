import React,{useState} from 'react'
import {
  CBreadcrumb,
  CBreadcrumbItem,
  CBreadcrumbRouter,
  CCard,
  CCardBody,
  CCardHeader,
  CLink,
  CCol,
  CRow ,CModal,
  CModalBody,
  CModalFooter,CButton,
  CModalHeader,CModalTitle,CLabel,CInput,CFormGroup,CSelect,CInputFile
} from '@coreui/react'
import { DocsLink } from 'src/reusable'
import routes from '../../../routes'

const Breadcrumbs = () => {
  const [primary, setPrimary] = useState(false)
  const [success, setSuccess] = useState(false)
  const [warning, setWarning] = useState(false)
  return (
    
    <>


            <CRow>
              <CCol xs="3" md="3" lg="12" style={{paddingBottom:'3%'}}>
              <CButton color="primary" onClick={() => setPrimary(!primary)} className="mr-1">Select Customer</CButton>
              <CModal 
                    show={primary} 
                    onClose={() => setPrimary(!primary)}
                    color="primary"
                  >
                    <CModalHeader closeButton>
                      <CModalTitle>Select Customer</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                    <CFormGroup>
                        <CLabel htmlFor="company">Customer Name</CLabel>
                        <CInput id="custname" type="text" placeholder="Enter your Customer Name" />
                      </CFormGroup>
                      <CFormGroup>
                        <CLabel htmlFor="company">Company Name</CLabel>
                        <CInput id="compname" type="text" placeholder="Enter your Company Name" />
                      </CFormGroup>
                      <CFormGroup>
                        <CLabel htmlFor="number">Phone No</CLabel>
                        <CInput  type="number" id="mobile" placeholder="Enter your Mobile No" />
                      </CFormGroup>
                      <CFormGroup>
                        <CLabel htmlFor="email">Email</CLabel>
                        <CInput  type="email" id="email" placeholder="Enter your Email" />
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
                      <CModalTitle>Select Customer</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                    <CFormGroup>
                        <CLabel htmlFor="company">Customer Name</CLabel>
                        <CInput id="custname" type="text" placeholder="Enter your Customer Name" />
                      </CFormGroup>
                      <CFormGroup>
                        <CLabel htmlFor="company">Company Name</CLabel>
                        <CInput id="compname" type="text" placeholder="Enter your Company Name" />
                      </CFormGroup>
                      <CFormGroup>
                        <CLabel htmlFor="number">Phone No</CLabel>
                        <CInput  type="number" id="mobile" placeholder="Enter your Mobile No" />
                      </CFormGroup>
                      <CFormGroup>
                        <CLabel htmlFor="email">Email</CLabel>
                        <CInput  type="email" id="email" placeholder="Enter your Email" />
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
                        <th>Customer Name</th>
                        <th>Company Name</th>
                        <th>Phone No</th>
                        <th>Email ID</th>
                        <th>Delete Button</th>
                        <th>Update Button</th>
                   
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>XYZ</td>
                        <td>Datavesity</td>
                        <td>125876656</td>
                        <td>xyz@gmail.com</td>
                        <td><CButton block color="danger" style={{width:'50%'}} className="delbtn">Delete</CButton></td>
                        <td><CButton color="success" onClick={() => setSuccess(!success)} className="mr-1">Update</CButton></td>
                      </tr>
                      <tr>
                        <th scope="row">1</th>
                        <td>XYZ</td>
                        <td>Datavesity</td>
                        <td>125876656</td>
                        <td>xyz@gmail.com</td>
                        <td><CButton block color="danger" style={{width:'50%'}} className="delbtn">Delete</CButton></td>
                        <td><CButton color="success" onClick={() => setSuccess(!success)} className="mr-1">Update</CButton></td>
                      </tr>
                      <tr>
                        <th scope="row">1</th>
                        <td>XYZ</td>
                        <td>Datavesity</td>
                        <td>125876656</td>
                        <td>xyz@gmail.com</td>
                        <td><CButton block color="danger" style={{width:'50%'}} className="delbtn">Delete</CButton></td>
                        <td><CButton color="success" onClick={() => setSuccess(!success)} className="mr-1">Update</CButton></td>
                      </tr> 
                    </tbody> 
                  </table>
                </div>
              </CCol>
              </CRow>



          {/* <CRow>
            <CCol xs="12">
              <CCard>
                <CCardHeader>
                  Bootstrap Breadcrumb
                  <DocsLink name="CBreadcrumb"/>
                </CCardHeader>
                <CCardBody>
                  <h6>CBreadcrumbRouter wrapper component</h6>
                  <CBreadcrumbRouter routes={routes}/>
                  <h6>Manual</h6>
                  <CBreadcrumb>
                    <CBreadcrumbItem>
                      <CLink>Home</CLink>
                    </CBreadcrumbItem>
                    <CBreadcrumbItem active>Library</CBreadcrumbItem>
                  </CBreadcrumb>
                  <CBreadcrumb>
                    <CBreadcrumbItem>
                      <CLink>Home</CLink>
                    </CBreadcrumbItem>
                    <CBreadcrumbItem>
                      <CLink>Library</CLink>
                    </CBreadcrumbItem>
                    <CBreadcrumbItem active>Data</CBreadcrumbItem>
                  </CBreadcrumb>
                  <CBreadcrumb>
                    <CBreadcrumbItem>
                      <CLink>Home</CLink>
                    </CBreadcrumbItem>
                    <CBreadcrumbItem>
                      <CLink>Library</CLink>
                    </CBreadcrumbItem>
                    <CBreadcrumbItem>
                      <CLink>Data</CLink>
                    </CBreadcrumbItem>
                    <CBreadcrumbItem active>
                      <span>Bootstrap</span>
                    </CBreadcrumbItem>
                  </CBreadcrumb>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow> */}
  </>
  )
}

export default Breadcrumbs

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

const DetailsEmployee = () => {
  const [primary, setPrimary] = useState(false)
  const [success, setSuccess] = useState(false)
  const [warning, setWarning] = useState(false)

  return (
  <>


     {/* Vehicle card Details  */}
         <CRow>
              <CCol xs="3" md="3" lg="12" style={{paddingBottom:'3%'}}>
              <CButton color="warning" onClick={() => setWarning(!warning)} className="mr-1">Employee Details</CButton>
                <CModal 
                    show={warning} 
                    onClose={() => setWarning(!warning)}
                    color="warning"
                  >
                    <CModalHeader closeButton>
                      <CModalTitle>Add Employee Details</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                    <CFormGroup>
                        <CInput id="adharNo" type="text" placeholder="Enter Employee Name*" required/>
                      </CFormGroup>
                      <CFormGroup>
                        <CInput id="accNo"  type="date" placeholder="Enter Employee Start Date*" required/>
                      </CFormGroup>
                      <CFormGroup>
                        <CInput id="accNo"  type="date" placeholder="Enter Employee End Date*" required/>
                      </CFormGroup>
                      <CFormGroup>
                        <CInput id="adharNo" type="text" placeholder="Enter Employee Designation*" required/>
                      </CFormGroup>
                      <CFormGroup>
                        <CInput id="adharNo" type="text" placeholder="Enter Employee Description*" required/>
                      </CFormGroup>
                      <CFormGroup>
                        <CInput id="adharNo" type="text" placeholder="Enter Employee Achievment*" required/>
                      </CFormGroup>
                      <CFormGroup>
                        <CInput id="adharNo" type="text" placeholder="Enter Employee Skills*" required/>
                      </CFormGroup>
                      <CFormGroup>
                        <CInput id="adharNo" type="text" placeholder="Enter Emergency Person Name*" required/>
                      </CFormGroup>
                      <CFormGroup>
                        <CInput id="adharNo" type="text" placeholder="Enter Emergency No*" required/>
                      </CFormGroup>
                      <CFormGroup>
                        <CInput id="adharNo" type="text" placeholder="Enter Relation*" required/>
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
                      <CModalTitle>Update Employee Details</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                    <CFormGroup>
                        <CInput id="adharNo" type="text" placeholder="Enter Employee Name*" required/>
                      </CFormGroup>
                      <CFormGroup>
                        <CInput id="accNo"  type="date" placeholder="Enter Employee Start Date*" required/>
                      </CFormGroup>
                      <CFormGroup>
                        <CInput id="accNo"  type="date" placeholder="Enter Employee End Date*" required/>
                      </CFormGroup>
                      <CFormGroup>
                        <CInput id="adharNo" type="text" placeholder="Enter Employee Designation*" required/>
                      </CFormGroup>
                      <CFormGroup>
                        <CInput id="adharNo" type="text" placeholder="Enter Employee Description*" required/>
                      </CFormGroup>
                      <CFormGroup>
                        <CInput id="adharNo" type="text" placeholder="Enter Employee Achievment*" required/>
                      </CFormGroup>
                      <CFormGroup>
                        <CInput id="adharNo" type="text" placeholder="Enter Employee Skills*" required/>
                      </CFormGroup>
                      <CFormGroup>
                        <CInput id="adharNo" type="text" placeholder="Enter Emergency Person Name*" required/>
                      </CFormGroup>
                      <CFormGroup>
                        <CInput id="adharNo" type="text" placeholder="Enter Emergency No*" required/>
                      </CFormGroup>
                      <CFormGroup>
                        <CInput id="adharNo" type="text" placeholder="Enter Relation*" required/>
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
                        <th>Emp Name</th>
                        <th>Emp Start Date</th>
                        <th>Emp End Date</th>
                        <th>Emp Designation</th>
                        <th>Emp Description</th>
                        <th>Emp Achievment</th>
                        <th>Emp Skills</th>
                        <th>Emergency Name</th>
                        <th>Emergency No</th>
                        <th>Relation</th>
                        <th>Delete</th>
                        <th>Update</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Rakesh</td>
                        <td>12:02:2005</td>
                        <td>26:03:2011</td>
                        <td>System Engg</td>
                        <td>Cloud Support</td>
                        <td>Best Work</td>
                        <td>Aws,Docker</td>
                        <td>XYZ</td>
                        <td>12364799</td>
                        <td>Father</td>
                        <td><CButton block color="danger" className="delbtn">Delete</CButton></td>
                        <td><CButton color="success" onClick={() => setSuccess(!success)} className="mr-1">Update</CButton></td>
                      </tr>
                      
                      <tr>
                        <th scope="row">2</th>
                        <td>Ram</td>
                        <td>12:02:2005</td>
                        <td>26:03:2011</td>
                        <td>System Engg</td>
                        <td>AWS Support</td>
                        <td>Best Work</td>
                        <td>Aws,Docker</td>
                        <td>XYZ</td>
                        <td>12364799</td>
                        <td>Father</td>
                        <td><CButton block color="danger"  className="delbtn">Delete</CButton></td>
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

export default DetailsEmployee

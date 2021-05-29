import React,{useState} from 'react'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CLink,
  CProgress,
  CRow ,CModal,
  CModalBody,
  CModalFooter,CButton,
  CModalHeader,CModalTitle,CLabel,CInput,CFormGroup,CSelect,CInputFile
} from '@coreui/react'
import { DocsLink } from 'src/reusable'

const Badges = () => {
  const [visible, setVisible] = React.useState(10)
  const [primary, setPrimary] = useState(false)
  const [success, setSuccess] = useState(false)
  const [warning, setWarning] = useState(false)
  return (
    <>
           <CRow>
              <CCol xs="3" md="3" lg="12" style={{paddingBottom:'3%'}}>
              <CButton color="warning" onClick={() => setWarning(!warning)} className="mr-1">Add Order Preview</CButton>
              <CModal 
                    show={warning} 
                    onClose={() => setWarning(!primary)}
                    color="warning"
                  >
                    <CModalHeader closeButton>
                      <CModalTitle>Order Preview Information</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                      <CFormGroup>
                        <CInput id="retailer" type="text" placeholder=" Enter Retailer Name *" />
                      </CFormGroup>
                      <CFormGroup>
                        <CInput id="Phone" type="number" placeholder="Phone No. *" />
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
                      <CModalTitle>Order Preview Information</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                      <CFormGroup>
                        <CInput id="retailer" type="text" placeholder=" Enter Retailer Name *" />
                      </CFormGroup>
                      <CFormGroup>
                        <CInput id="Phone" type="number" placeholder="Phone No. *" />
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
                        <th>Sr No</th>
                        <th>Retailer Name</th>
                        <th>Phone No</th>
                        <th>Product</th>
                        <th>Qyt</th>
                        <th>Unit Price</th>
                        <th>Sub Ammount</th>
                        <th>Delete </th>
                        <th>Update </th>
                   
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>rpr</td>
                        <td>988776665</td>
                        <td>XYZ</td>
                        <td>5</td>
                        <td>200</td>
                        <td>1000</td>
                        <td><CButton block color="danger" style={{width:'100%'}}  className="delbtn">Delete</CButton></td>
                        <td><CButton color="success" onClick={() => setSuccess(!success)} className="mr-1">Update</CButton></td>
                      </tr>
                      <tr>
                      <th scope="row">2</th>
                      <td>rpr</td>
                        <td>988776665</td>
                        <td>XYZ</td>
                        <td>5</td>
                        <td>200</td>
                        <td>1000</td>
                        <td><CButton block color="danger" style={{width:'100%'}} className="delbtn">Delete</CButton></td>
                        <td><CButton color="success" onClick={() => setSuccess(!success)} className="mr-1">Update</CButton></td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>rpr</td>
                        <td>988776665</td>
                        <td>XYZ</td>
                        <td>5</td>
                        <td>200</td>
                        <td>1000</td>
                        <td><CButton block color="danger" style={{width:'100%'}} className="delbtn">Delete</CButton></td>
                        <td><CButton color="success" onClick={() => setSuccess(!success)} className="mr-1">Update</CButton></td>
                      </tr>
                      
                    </tbody>
                    
                  </table>
                  </div>
              </CCol>
              </CRow>


























    {/* // <CRow>
    //   <CCol xs="12" md="6">
    //     <CCard>
    //       <CCardHeader>
    //         Badges
    //         <DocsLink name="CBadge"/>
    //       </CCardHeader>
    //       <CCardBody>
    //         <h1>Example heading <CBadge color="secondary">New</CBadge></h1>
    //         <h2>Example heading <CBadge color="secondary">New</CBadge></h2>
    //         <h3>Example heading <CBadge color="secondary">New</CBadge></h3>
    //         <h4>Example heading <CBadge color="secondary">New</CBadge></h4>
    //         <h5>Example heading <CBadge color="secondary">New</CBadge></h5>
    //         <h6>Example heading <CBadge color="secondary">New</CBadge></h6>
    //       </CCardBody>
    //       <CCardFooter>
    //         <CButton color="secondary">
    //           Notifications <CBadge color="primary" shape="pill" style={{ position: 'static' }}>9</CBadge>
    //         </CButton>
    //       </CCardFooter>
    //     </CCard>
    //   </CCol>
    //   <CCol xs="12" md="6">
    //     <CCard>
    //       <CCardHeader>
    //         Badges
    //         <small> contextual variations</small>
    //       </CCardHeader>
    //       <CCardBody>
    //         <CBadge className="mr-1" color="primary">Primary</CBadge>
    //         <CBadge className="mr-1" color="secondary">Secondary</CBadge>
    //         <CBadge className="mr-1" color="success">Success</CBadge>
    //         <CBadge className="mr-1" color="danger">Danger</CBadge>
    //         <CBadge className="mr-1" color="warning">Warning</CBadge>
    //         <CBadge className="mr-1" color="info">Info</CBadge>
    //         <CBadge className="mr-1" color="light">Light</CBadge>
    //         <CBadge className="mr-1" color="dark">Dark</CBadge>
    //       </CCardBody>
    //     </CCard>
    //     <CCard>
    //       <CCardHeader>
    //         Badges
    //         <small> pill badges</small>
    //       </CCardHeader>
    //       <CCardBody>
    //         <CBadge className="mr-1" color="primary" shape="pill">Primary</CBadge>
    //         <CBadge className="mr-1" color="secondary" shape="pill">Secondary</CBadge>
    //         <CBadge className="mr-1" color="success" shape="pill">Success</CBadge>
    //         <CBadge className="mr-1" color="danger" shape="pill">Danger</CBadge>
    //         <CBadge className="mr-1" color="warning" shape="pill">Warning</CBadge>
    //         <CBadge className="mr-1" color="info" shape="pill">Info</CBadge>
    //         <CBadge className="mr-1" color="light" shape="pill">Light</CBadge>
    //         <CBadge className="mr-1" color="dark" shape="pill">Dark</CBadge>
    //       </CCardBody>
    //     </CCard>
    //     <CCard>
    //       <CCardHeader>
    //         Badges
    //         <small> links</small>
    //       </CCardHeader>
    //       <CCardBody>
    //         <CBadge className="mr-1" href="#" color="primary">Primary</CBadge>
    //         <CBadge className="mr-1" href="#" color="secondary">Secondary</CBadge>
    //         <CBadge className="mr-1" href="#" color="success">Success</CBadge>
    //         <CBadge className="mr-1" href="#" color="danger">Danger</CBadge>
    //         <CBadge className="mr-1" href="#" color="warning">Warning</CBadge>
    //         <CBadge className="mr-1" href="#" color="info">Info</CBadge>
    //         <CBadge className="mr-1" href="#" color="light">Light</CBadge>
    //         <CBadge className="mr-1" href="#" color="dark" shape="pill">Dark</CBadge>
    //       </CCardBody>
    //     </CCard>
    //   </CCol>
    // </CRow> */}
    </>
  )
}

export default Badges

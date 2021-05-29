import React, { useState, useEffect } from 'react'
import {
  CCol,
  CNav,
  CNavItem,
  CNavLink,
  CRow,
  CTabContent,
  CTabPane,
  CCard,
  CCardBody,
  CTabs,
  CCardHeader,CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,CModalTitle,CLabel,CInput,CFormGroup,CInputRadio,CSelect
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'
import Axios from 'axios'

const Attendance = () => {
  const [active, setActive] = useState(1)
  const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.'
  const [primary, setPrimary] = useState(false)
  const [success, setSuccess] = useState(false)
  const [warning, setWarning] = useState(false)
 

  const [data, getData] = useState([]);

  const url = "http://50.112.238.122/getAttendence";
  useEffect(() => {
    getAllEmployee();
  }, []);


  const getAllEmployee = () => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    }
    Axios.get(url, config).then((response) => {
      const data = response.data.results
      getData(data)

    }).catch((err) => {
      console.error(err)
    })
  }

/////////this function for DELETE
const [Imageupload, setDelete] = useState([]);


const removeData = (_id) =>{
  let url =  ` http://50.112.238.122/deleteAttendence/${_id}`

  Axios.delete(url).then(res => {
     const del = Imageupload.filter(Imageupload => _id !== Imageupload._id)
     setDelete(del)
     console.log('res',res)
    alert("Deleted Successfully")
    window.location.reload();
  })
}

  return (

    <>
   
            <CRow>
              <CCol xs="3" md="3" lg="12" style={{paddingBottom:'3%'}}>
              <CButton color="warning" onClick={() => setWarning(!warning)} className="mr-1">Apply Leave</CButton>
                <CModal 
                    show={warning} 
                    onClose={() => setWarning(!warning)}
                    color="warning"
                  >
                    <CModalHeader closeButton>
                      <CModalTitle>Attendance Fragment</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <form action="http://50.112.238.122/addAttendence" method="post">
                    <CFormGroup>
                    <CInput type="date" id="date-input" name="att_date "  />
                      </CFormGroup>
                      <CFormGroup>
                        <CInput id="reason" type="text" name="reason" placeholder="Reason" />
                      </CFormGroup>
                      <CFormGroup>
                        <CInput  type="text" id="reporting" name="reporting_manager" placeholder="Reporting Manager" />
                      </CFormGroup>
                      <CFormGroup row>
                      <CCol xs="12" md="12" size="lg">
                        <CSelect custom size="lg" name="select_reporting_manager " id="selectLg">
                          <option value="0">Select Reoprting Manager</option>
                          <option value="1">Option #1</option>
                          <option value="2">Option #2</option>
                          <option value="3">Option #3</option>
                        </CSelect>
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol xs="12" md="12" size="lg">
                        <CSelect custom size="lg" name="select_leave " id="selectLg">
                          <option value="0">Select Leave</option>
                          <option value="Paid Leave">Paid Leave</option>
                          <option value="Sick Leave">Sick Leave</option>
                          <option value="Casual Leave">Casual Leave</option>
                        </CSelect>
                      </CCol>
                    </CFormGroup>
                    <CFormGroup>
                        <CInput  type="text" id="typeleave" name="type_of_leave" placeholder="Type Of Leave" />
                      </CFormGroup>
                      <CButton color="primary" type="submit"  >
                      Submit
                      </CButton>{' '}
                     
                      </form>
                    </CModalBody>
                  
                  </CModal>
              </CCol>
            </CRow>
            
          
            <CRow>
              <CCol xs="3" md="3" lg="12" style={{}}>
              <CModal 
                    show={success} 
                    onClose={() => setSuccess(!success)}
                    color="success"
                  >
                    <CModalHeader closeButton>
                      <CModalTitle> Update Attendance Fragment</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                    <CFormGroup>
                    <CInput type="date" id="date-input" name="date-input" placeholder="Date of Birth" />
                      </CFormGroup>
                      <CFormGroup>
                        <CInput id="reason" type="text" placeholder="Reason" />
                      </CFormGroup>
                      <CFormGroup>
                        <CInput  type="text" id="reporting" placeholder="Reporting Manager" />
                      </CFormGroup>
                      <CFormGroup row>
                      <CCol xs="12" md="12" size="lg">
                        <CSelect custom size="lg" name="selectLg" id="selectLg">
                          <option value="0">Select Reoprting Manager</option>
                          <option value="1">Option #1</option>
                          <option value="2">Option #2</option>
                          <option value="3">Option #3</option>
                        </CSelect>
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol xs="12" md="12" size="lg">
                        <CSelect custom size="lg" name="selectLg" id="selectLg">
                          <option value="0">Select Leave</option>
                          <option value="1">Paid Leave</option>
                          <option value="2">Sick Leave</option>
                          <option value="3">Casual Leave</option>
                        </CSelect>
                      </CCol>
                    </CFormGroup>
                    <CFormGroup>
                        <CInput  type="text" id="typeleave" placeholder="Type Of Leave" />
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
              <CCol xs="12" lg="12">
              <div class="col-12 col-12 table-responsive">
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>user_id</th>
                        <th>Start time</th>
                        {/* <th>Check In Photo</th> */}
                        <th>End Time</th>
                        {/* <th>Check Out Photo</th> */}
                        <th>Operations</th>
                      </tr>
                    </thead>
                    <tbody>
                    {data.length > 0 ? data.map(({ _id, user_id, start_time, check_in_photo, check_out_photo, end_time,  date  }) => {
            return (
                      <tr>
                        <td>{date}</td>
                        <td>{user_id}</td>
                        <td>{start_time}</td>
                        {/* <img src={`${check_in_photo}`} className="logo-avatar-img" alt="d" /> */}
                        <td>{end_time}</td>
                        {/* <img src={`${check_out_photo}`} className="logo-avatar-img" alt="d" /> */}
                        
                     
                        <td> 
                        {/* <CButton color="success" size="sm" onClick={() => setSuccess(!success)} className="mr-1">Update</CButton> */}
                        <CButton  type="reset" size="sm" color="danger"  onClick={() => removeData(_id)} className="mr-1">Delete</CButton></td>
                      </tr>
                      )
                    }) : ''}
                    </tbody>
                    
                  </table>
                  </div>
              </CCol>
              </CRow>


    </>
  )
}

export default Attendance

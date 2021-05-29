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

const External_attendance = () => {
  const [active, setActive] = useState(1)
  const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.'
  const [primary, setPrimary] = useState(false)
  const [success, setSuccess] = useState(false)
  const [warning, setWarning] = useState(false)
 
 
  const [data, getData] = useState([]);

  const url = "http://50.112.238.122/ExternalAttendence";
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
      const data = response.data.attendenceDetails
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
              <CButton color="warning" onClick={() => setWarning(!warning)} className="mr-1">External Attendance</CButton>
                <CModal 
                    show={warning} 
                    onClose={() => setWarning(!warning)}
                    color="warning"
                  >
                    <CModalHeader closeButton>
                      <CModalTitle>External Attendance Fragment</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                    <CFormGroup>
                      <CInput type="date" id="date-input" name="date-input" placeholder="DD/MM/YY*" />
                    </CFormGroup>
                    <CRow xs="12" sm="1" md="3" size="lg" >
                    <CFormGroup >
                      <CCol >
                        <CSelect custom size="lg" name="selectLg" id="selectLg"  style={{backgroundColor:'yellow',color:'black'}}>
                          <option value="0">No of Agent</option>
                          <option value="1">Option #1</option>
                          <option value="2">Option #2</option>
                          <option value="3">Option #3</option>
                        </CSelect>
                      </CCol>
                    </CFormGroup>
                    <CFormGroup >
                      <CCol >
                        <CSelect custom size="lg" name="selectLg" id="selectLg"  style={{backgroundColor:'Green',color:'black'}}>
                          <option value="0">On Filed</option>
                          <option value="1">Option #1</option>
                          <option value="2">Option #2</option>
                          <option value="3">Option #3</option>
                        </CSelect>
                      </CCol>
                    </CFormGroup>
                    <CFormGroup >
                      <CCol >
                        <CSelect custom size="lg" name="selectLg" id="selectLg" style={{backgroundColor:'red',color:'black'}}>
                          <option value="0">Offline</option>
                          <option value="1">Option #1</option>
                          <option value="2">Option #2</option>
                          <option value="3">Option #3</option>
                        </CSelect>
                      </CCol>
                    </CFormGroup>
                    </CRow>
                    <CFormGroup>
                        <CLabel htmlFor="Agent">Agent Name</CLabel>
                        <CInput  type="text" id="typeleave" placeholder=" Agent Name*" />
                      </CFormGroup>
                      <CFormGroup>
                        <CLabel htmlFor="Login">Login Time</CLabel>
                      <CInput type="time" id="date-input" name="date-input" placeholder="Login Time*" />
                    </CFormGroup>
                    <CFormGroup>
                      <CLabel htmlFor="Login">Logout Time</CLabel>
                      <CInput type="time" id="date-input" name="date-input" placeholder="Logout Time*" />
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
              <CCol xs="3" md="3" lg="12" style={{}}>
              <CModal 
                    show={success} 
                    onClose={() => setSuccess(!success)}
                    color="success"
                  >
                    <CModalHeader closeButton>
                      <CModalTitle> Update Attendance </CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                    <CFormGroup>
                      <CInput type="date" id="date-input" name="date-input" placeholder="DD/MM/YY*" />
                    </CFormGroup>
                    <CRow xs="12" sm="1" md="3" size="lg" >
                    <CFormGroup >
                      <CCol >
                        <CSelect custom size="lg" name="selectLg" id="selectLg"  style={{backgroundColor:'yellow',color:'black'}}>
                          <option value="0">No of Agent</option>
                          <option value="1">Option #1</option>
                          <option value="2">Option #2</option>
                          <option value="3">Option #3</option>
                        </CSelect>
                      </CCol>
                    </CFormGroup>
                    <CFormGroup >
                      <CCol >
                        <CSelect custom size="lg" name="selectLg" id="selectLg"  style={{backgroundColor:'Green',color:'black'}}>
                          <option value="0">On Filed</option>
                          <option value="1">Option #1</option>
                          <option value="2">Option #2</option>
                          <option value="3">Option #3</option>
                        </CSelect>
                      </CCol>
                    </CFormGroup>
                    <CFormGroup >
                      <CCol >
                        <CSelect custom size="lg" name="selectLg" id="selectLg" style={{backgroundColor:'red',color:'black'}}>
                          <option value="0">Offline</option>
                          <option value="1">Option #1</option>
                          <option value="2">Option #2</option>
                          <option value="3">Option #3</option>
                        </CSelect>
                      </CCol>
                    </CFormGroup>
                    </CRow>
                    <CFormGroup>
                        <CLabel htmlFor="Agent">Agent Name</CLabel>
                        <CInput  type="text" id="typeleave" placeholder=" Agent Name*" />
                      </CFormGroup>
                      <CFormGroup>
                        <CLabel htmlFor="Login">Login Time</CLabel>
                      <CInput type="time" id="date-input" name="date-input" placeholder="Login Time*" />
                    </CFormGroup>
                    <CFormGroup>
                      <CLabel htmlFor="Logout">Logout Time</CLabel>
                      <CInput type="time" id="date-input" name="date-input" placeholder="Logout Time*" />
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
                        <th>#</th>
                        <th>Date</th>
                        <th>Agent Name</th>
                        <th>Login Time </th>
                        <th>Logout Time</th>
                        <th>Status</th>
                        <th>no_of_hours</th>
                        <th>Delete</th>
                        <th>Update</th>
                      </tr>
                    </thead>
                    <tbody>
                    {data.length > 0 ? data.map(({ _id, date, username, start_time, end_time, present, no_of_hours    }) => {
            return (
                      <tr>
                        <th scope="row">1</th>
                        <td>{date}</td>
                        <td>{username} </td>
                        <td>{start_time}</td>
                        <td>{end_time}</td>
                        <td>{present}</td>
                        <td>{no_of_hours}</td>
                        <td><CButton  type="reset" size="sm" color="danger"  onClick={() => removeData(_id)} className="mr-1">Delete</CButton></td>
                        <td><CButton color="success" size="sm"  onClick={() => setSuccess(!success)} className="mr-1">Update</CButton></td>
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

export default External_attendance

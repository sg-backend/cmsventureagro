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
import axios from 'axios'

const Internal_attendance = () => {
  const [active, setActive] = useState(1)
  const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.'
  const [primary, setPrimary] = useState(false)
  const [success, setSuccess] = useState(false)
  const [warning, setWarning] = useState(false)
 

  const [data, getData] = useState([]);
  const [userId, setUserId] = useState([]);
  const urll = "http://50.112.238.122/getAttendence";
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
    axios.get(urll, config).then((response) => {
      const data = response.data.results
      const _id = data && data[0]._id
      getData(data)
      setUserId(_id)
      let logout = data[0].logout
      setLogoutedit(logout)

    }).catch((err) => {
      console.error(err)
    })
  }
//////////Set logout Time
const [ddata, getDdata] = useState([]);
const [logout, setLogoutedit] = useState("");

const handlerSetLogOutTime = (evt) => {
  // console.log('evt',evt)
  evt.preventDefault();
 
}
useEffect(() => {
}, []);



const SetLogoutTime = () => {
  const URL = `http://50.112.238.122/updateAttendence`;
  const config = {
    
    headers: {

      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
     
    }
    
  }
const payload = {
  logout
}

  axios.put(`${URL}/${userId}`,payload,config).then((response) => {
    const ddata = response.data.result
  alert("Set LogOut Time successfully")
  window.location.reload();
    getDdata(ddata)
    // console.log(data)

  }).catch((err) => {
    console.error(err)
  })
}





//////////post api

  const [dataa, getDataa] = useState([]);
    const [username, setUsername] = useState("");
    const [login, setLogin] = useState("");
    const [internal_date, setInternal_date] = useState("");

    const handlerSubmit = (evt) => {
      evt.preventDefault();
    }

    const url = "http://50.112.238.122/addAttendence";
    
    useEffect(() => {
    }, []);
    const createPackage = () => {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      }
  
      let create_data = {
        "username":username,
        "login":login,
        "internal_date": internal_date,
       }
    
      axios.post(url,create_data,config).then((response) => {
        const dataa = response.data.result
   
        getDataa(dataa)
        alert("Attendance Add Successfully")
        window.location.reload();
      }).catch((err) => {
        console.error(err)
      })
    }
  
/////////this function for DELETE
const [Imageupload, setDelete] = useState([]);
const removeData = (_id) =>{
  let url =  ` http://50.112.238.122/deleteAttendence/${_id}`

  axios.delete(url).then(res => {
     const del = Imageupload.filter(Imageupload => _id !== Imageupload._id)
     setDelete(del)
     console.log('res',res)
    alert("Deleted Attendance Successfully")
    window.location.reload();
  })
}

 
  return (

    <>
   
            <CRow>
              <CCol xs="3" md="3" lg="12" style={{paddingBottom:'3%'}}>
              <CButton color="warning" onClick={() => setWarning(!warning)} className="mr-1">Internal Attendance</CButton>
                <CModal 
                    show={warning} 
                    onClose={() => setWarning(!warning)}
                    color="warning"
                  >
                    <CModalHeader closeButton>
                      <CModalTitle>Internal Attendance Fragment</CModalTitle>
                    </CModalHeader>
                    <form method="post"  onSubmit={handlerSubmit}>
                    <CModalBody>
                    <CFormGroup>
                        <CLabel htmlFor="Name">username </CLabel>
                        <CInput id="Name"
                         value={username} onChange={e =>{setUsername(e.target.value)}}  type="text" placeholder="Type Here*" />
                      </CFormGroup>
                    
                    <CFormGroup>
                    <CLabel htmlFor="Time">login Time</CLabel>
                      <CInput type="time" id="time-input" 
                       value={login } onChange={e =>{setLogin (e.target.value)}} placeholder="Type Here*" />
                    </CFormGroup>
                    {/* <CFormGroup>
                    <CLabel htmlFor="Time">logout Time</CLabel>
                      <CInput type="time" id="time-input" name="time-input"
                        value={logout  } onChange={e =>{setLogout(e.target.value)}} placeholder="Type Here*" />
                    </CFormGroup> */}

                    <CFormGroup>
                      <CLabel htmlFor="Date">Date</CLabel>
                      <CInput type="date" id="date-input" name="date-input"
                       value={internal_date} onChange={e =>{setInternal_date(e.target.value)}}  placeholder="Type Here*" />
                    </CFormGroup>
                     
                    </CModalBody>
                    <CButton color="primary" onClick={createPackage} >
                      Submit
                      </CButton>
                    </form>
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
                      <CModalTitle></CModalTitle>
                    </CModalHeader>
                    <form method="post" onSubmit={handlerSetLogOutTime}>
                    <CModalBody>                  
                    <CFormGroup>
                    <CLabel htmlFor="Time">Time</CLabel>
                      <CInput type="time" id="time-input"
                       value={logout} onChange={e =>{setLogoutedit(e.target.value)}} placeholder="Type Here*" />
                    </CFormGroup>
                    <CButton color="primary" onClick={SetLogoutTime} >
                        Submit
                      </CButton>
                    </CModalBody>
                 </form>
               
                  </CModal>
              </CCol>
            </CRow>

           

            <CRow>
              <CCol xs="12" lg="12">
              <div class="col-12 col-12 table-responsive">
                  <table class="table table-striped">
                    <thead>
                      <tr>
                      
                        <th>Username</th>
                        <th>Login Time</th>
                        <th>LogOut Time </th>
                        <th>Date</th>
                        <th>Set Out Time</th>
                        <th>Operations</th>
                        
                      </tr>
                    </thead>
                    <tbody>   
                  {data.length > 0 ? data.map(({ _id, username, login, logout, internal_date }) => {
            return (
                      <tr>
               
                        <td>{username}</td>
                        <td>{login}</td>
                        <td>{logout}</td>
                        <td>{internal_date}</td>
                     
                        <td><CButton color="success" onClick={() => {setSuccess(!success);setUserId(_id);setLogoutedit(logout)}} className="mr-1">Set LogOut Time</CButton></td>
                        <td><CButton  type="reset" size="sm" color="danger"  onClick={() => removeData(_id)} className="mr-1">Delete</CButton></td>
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

export default Internal_attendance

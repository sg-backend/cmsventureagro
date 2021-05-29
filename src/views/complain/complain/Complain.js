import React, { useState, useEffect } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,CDropdown,CDropdownToggle,CDropdownMenu,CDropdownItem,CDropdownDivider,CFormGroup,CLabel,CInput
} from '@coreui/react'
import { DocsLink } from 'src/reusable'
import axios from 'axios'

const Charts = () => {


 
  const [primary, setPrimary] = useState(false)
  const [success, setSuccess] = useState(false)
  const [warning, setWarning] = useState(false)
  const [danger, setDanger] = useState(false)
  const [info, setInfo] = useState(false)


  const [data, getData] = useState([]);
  const [userId, setUserId] = useState([]);
  const urll = "http://50.112.238.122/allcomplaint";
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
              {/* <CButton color="warning" onClick={() => setWarning(!warning)} className="mr-1">Complain</CButton> */}
              <CModal 
                    show={warning} 
                    onClose={() => setWarning(!warning)}
                    color="warning"
                  >
                    <CModalHeader closeButton>
                      <CModalTitle>Complain Details</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                      <CFormGroup>
                         <CLabel htmlFor="shop_ownername">Shop Owner Name</CLabel>
                        <CInput id="shop_name" type="text" placeholder="Enter Name " />
                      </CFormGroup>
                      <CFormGroup>
                        <CLabel htmlFor="shop_name">Shop Name</CLabel>
                        <CInput id="shop_name" type="text" placeholder="Enter Name " />
                      </CFormGroup>
                      <CFormGroup>
                         <CLabel htmlFor="Comment">Comment</CLabel>
                        <CInput id="Comment" type="text" placeholder="Type Here"/>
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
                      <CModalTitle>Product Details</CModalTitle>
                    </CModalHeader>
                    {/* <form method="post" onSubmit={handlerSubmit}>
                    <CModalBody>
                      <CFormGroup>
                         <CLabel htmlFor="shop_ownername">Shop Owner Name</CLabel>
                        <CInput id="shop_name" type="text" value={shop_owner_name} onChange={e =>{setShop_owner_name(e.target.value)}}/>
                      </CFormGroup>
                      <CFormGroup>
                        <CLabel htmlFor="shop_name">Shop Name</CLabel>
                        <CInput id="shop_name" type="text" value={item.shop_name} onChange={e =>{setShop_name(e.target.value)}} />
                      </CFormGroup>
                      <CFormGroup>
                         <CLabel htmlFor="Comment">Comment</CLabel>
                        <CInput id="Comment" type="text" value={item.comment} onChange={e =>{setComment(e.target.value)}}/>
                      </CFormGroup>
                    </CModalBody>
                    <CButton color="success"  onClick={complaintchange}>
                      Submit
                      </CButton>
                    </form> */}
                  </CModal>
              </CCol>
            </CRow>


            <CRow>
              <CCol xs="12" lg="12">
              <div class="col-12 col-12 table-responsive">
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th>Shop Owner Name</th>
                        <th>Shop Name</th>
                        <th>Comment</th>
                        <th>Operations</th>
                   
                      </tr>
                    </thead>
                    <tbody>
                      
                    { data && data.map((item) =>{
                       return <tr>
                       <td>{item.shop_owner_name}</td>
                       <td>{item.shop_name}</td>
                       <td>{item.comment}</td>
                       <td>
                       <CButton  type="reset" size="sm" color="danger"  onClick={() => removeData(item._id)} className="mr-1">Delete</CButton>
                       {/* <CButton color="success" size="sm" onClick={() => setSuccess(!success)} className="mr-1">Update</CButton> */}
                       </td>
                     </tr>
                  })}
                     
                    </tbody>
                    
                  </table>
                  </div>
              </CCol>
              </CRow>


  </>
  )
}

export default Charts

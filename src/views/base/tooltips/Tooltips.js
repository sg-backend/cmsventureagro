import React, { useState, useEffect } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CTooltip,
  CRow,
  CCol,
  CLink,CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,CModalTitle,CLabel,CInput,CFormGroup,CSelect,CInputFile
} from '@coreui/react'
import { DocsLink } from 'src/reusable'
import Axios from 'axios'


const Tooltips = () => {
  const placements = [
    'top-start', 'top', 'top-end',
    'bottom-start', 'bottom', 'bottom-end',
    'right-start', 'right', 'right-end',
    'left-start', 'left', 'left-end'
  ]
  const [primary, setPrimary] = useState(false)
  const [success, setSuccess] = useState(false)
  const [warning, setWarning] = useState(false)



  const [data, getData] = useState([]);
  const [userId, setUserId] = useState([]);
  const url = "http://50.112.238.122/allcollection";
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
      const data = response.data.collectionDetails
      const _id = data && data[0]._id
      getData(data)
      setUserId(_id)
      let retailer_name = data[0].retailer_name
      let amount = data[0].amount
      let mode = data[0].mode
      let shop_name = data[0].shop_name
      let duedate = data[0].duedate
      let collection_status = data[0].collection_status
      setRetailer_name(retailer_name)
      setAmount(amount)
      setMode(mode)
      setShop_name(shop_name)
      setDuedate(duedate)
      setCollection_status(collection_status)


    }).catch((err) => {
      console.error(err)
    })
  }
  /////////Update api
  const [ddata, getDdata] = useState([]);
  const [retailer_name, setRetailer_name] = useState("");
  const [amount, setAmount] = useState("");
  const [mode, setMode] = useState("");
  const [shop_name, setShop_name] = useState("");
  const [duedate, setDuedate] = useState("");
  const [collection_status, setCollection_status] = useState("");
  
  const handlerSetLogOutTime = (evt) => {
    // console.log('evt',evt)
    evt.preventDefault();
   
  }
  useEffect(() => {
  }, []);
  
  
  
  const Seteditpackage = () => {
    const URL = `http://50.112.238.122/updateCollection`;
    const config = {
      
      headers: {
  
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
       
      }
      
    }
  const payload = {
    retailer_name,
    amount,
    mode,
    shop_name,
    duedate,
    collection_status
  }
  
    Axios.put(`${URL}/${userId}`,payload,config).then((response) => {
      const ddata = response.data.result
    alert("Updated successfully")
    window.location.reload();
      getDdata(ddata)
      // console.log(data)
  
    }).catch((err) => {
      console.error(err)
    })
  }
  
  




/////////this function for DELETE
const [Imageupload, setDelete] = useState([]);


const removeData = (_id) =>{
  let url =  `http://50.112.238.122/deleteCollection/${_id}`

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
              {/* <CButton color="warning" onClick={() => setWarning(!warning)} className="mr-1"> NEW COLLECTION</CButton> */}
                <CModal 
                    show={warning} 
                    onClose={() => setWarning(!warning)}
                    color="warning"
                  >
                    <CModalHeader closeButton>
                      <CModalTitle>New Collection111</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                    <CFormGroup>
                    <CInput id="retailer" type="text" placeholder="Name Of retailer" />
                      </CFormGroup>
                      <CFormGroup>
                        <CInput id="ammount" type="number" placeholder="Ammount" />
                      </CFormGroup>
                      <CFormGroup>
                        <CInput  type="text" id="mode" placeholder="Mode" />
                      </CFormGroup>
                      <CFormGroup>
                        <CCol  xs="12" md="12" size="lg" >
                          <CInputFile 
                            id="file-multiple-input" 
                            name="file-multiple-input" 
                            multiple
                            custom
                          />
                          <CLabel htmlFor="file-multiple-input" variant="custom-file">
                            Choose Files...
                          </CLabel>
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
              <CCol xs="3" md="3" lg="12" style={{}}>
              <CModal 
                    show={success} 
                    onClose={() => setSuccess(!success)}
                    color="success"
                  >
                    <CModalHeader closeButton>
                      <CModalTitle></CModalTitle>
                    </CModalHeader>
                    <form method="post"  onSubmit={handlerSetLogOutTime}>
                    <CModalBody>
                    <CFormGroup>
                    <CInput id="retailer" type="text" 
                     value={retailer_name} onChange={e =>{setRetailer_name(e.target.value)}}  placeholder="Name Of retailer" />
                      </CFormGroup>
                      <CFormGroup>
                        <CInput id="ammount" type="number"
                         value={amount} onChange={e =>{setAmount(e.target.value)}}   placeholder="Ammount" />
                      </CFormGroup>
                      <CFormGroup>
                        <CInput  type="text" id="mode"
                         value={mode} onChange={e =>{setMode(e.target.value)}}    placeholder="Mode" />
                      </CFormGroup>
                      <CFormGroup>
                        <CInput  type="text" id="mode"
                         value={shop_name} onChange={e =>{setShop_name(e.target.value)}}    placeholder="Mode" />
                      </CFormGroup>
                      <CFormGroup>
                        <CInput  type="text" id="mode"
                         value={duedate} onChange={e =>{setDuedate(e.target.value)}}    placeholder="Mode" />
                      </CFormGroup>
                      <CFormGroup>
                        <CInput  type="text" id="mode"
                         value={collection_status} onChange={e =>{setCollection_status(e.target.value)}}    placeholder="Mode" />
                      </CFormGroup>
                    </CModalBody>
                    <CButton color="primary" onClick={Seteditpackage}>
                      Submit
                      </CButton>
                    </form>
                  </CModal>
              </CCol>
            </CRow>

           

            <CRow>
              <CCol xs="12" lg="12">
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name of Retailer</th>
                        <th>Amount</th>
                        <th>Mode</th>
                        <th>Shop Name</th>
                        <th>Date</th>
                        <th>collection Status</th>                   
                        <th>Proof</th>
                        <th>Operations</th>
                      </tr>
                    </thead>
                    <tbody>
                    { data.length > 0 ? data.map(({ _id, retailer_name, amount, mode, shop_name, duedate, collection_status, proof_photo  }) => {
            return (
                      <tr>
                        <th scope="row">1</th>
                        <td>{retailer_name}</td>
                        <td>{amount}</td>
                        <td>{mode}</td>
                        <td>{shop_name}</td>
                        <td>{duedate}</td>
                        <td><span class="badge badge-success">{collection_status}</span></td>
                        <img src={`${proof_photo}`} className="logo-avatar-img" alt="d" />
                        <td><CButton block color="danger" size="sm" onClick={() => removeData(_id)} style={{width:'50%'}} className="delbtn">Delete</CButton>
                        <CButton color="success" size="sm" onClick={() => {setSuccess(!success);setUserId(_id);setRetailer_name(retailer_name)
      setAmount(amount)
      setMode(mode)
      setShop_name(shop_name)
      setDuedate(duedate)
      setCollection_status(collection_status)}} className="mr-1">Update</CButton></td>
                      </tr>
                   
                   )
                  }) : ''}
                    </tbody>
                    
                  </table>
              </CCol>
              </CRow>


    </>
  )
}

export default Tooltips;

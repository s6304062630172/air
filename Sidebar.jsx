import "./sidebar.css";
import {Dashboard, Inventory,Groups,EventNote} from "@mui/icons-material"
import FileCopyIcon from '@mui/icons-material/FileCopy'
import { Link } from "react-router-dom";


export default function Sidebar() {
  return ( 
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <div className='sidebarMenu'>
          <div className='topLeft'>
                <span className='logo'>แสงทอง Air service</span>
            </div>
      
         <Link to ="/Product"> 
          <h3 className='title'><Inventory /><a className="a"  >Manage Product</a></h3>
          </Link>

          <Link to ="/Employee"> 
          <h3 className='title'><Groups /><a className="a">Manage Employee</a></h3>
          </Link>

    
          <Link to ="/Quotation">  
          <h3 className='title'>< FileCopyIcon /><a className="a">Quotation</a></h3>
          </Link>
          <Link to ="/detaildown">  
          <h3 className='title'>< FileCopyIcon /><a className="a">detail</a></h3>
          </Link>
        </div>
      </div>
    </div>
  )
}




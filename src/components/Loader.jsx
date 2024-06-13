import './loader.css'
import { BsCaretLeft, BsCaretLeftFill } from "react-icons/bs"
import { BsCaretRight, BsCaretRightFill } from "react-icons/bs";
import { ur_high } from '../assets';
const Loader = () => {
  return (

    <div className="flex justify-center items-center">

      <div className="code-loader">
        <span>
          <BsCaretLeftFill color='red' />
        </span>
        <span>
          <BsCaretLeft color='red' />
        </span> <span>
          {"{"}
        </span>
         <img src={ur_high} alt='ur' style={{width:'128px' , height: '128px' }}/>
        <span>
          {"}"}
        </span>
        <span>
          <BsCaretRight color='red' />
        </span><span><BsCaretRightFill color='red' />
        </span>
      </div>

    </div>

  )
}

export default Loader
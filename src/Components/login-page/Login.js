import { Fragment,useState,useEffect } from "react";
import bg from "./asset/Rectangle 15.png";
import petals from "./asset/petals 1.png";
import vector from "./asset/Vector.svg";
import global from'./asset/global.svg'
import linkedIn from './asset/Another.svg'
import Insta from './asset/insta.svg'
import fb from './asset/fb.svg'
function Login() {
    const data ={email:"",password:""}
    const[inputData, setInputData]=useState(data);

    useEffect(() => {
       console.log("useEffect")
      }, [inputData]);

    function handleChange(e){
        e.preventDefault()
        setInputData({...inputData,[e.target.name]:e.target.value})
    }

    function handleSubmit(){

      if(inputData.email ||inputData.password){
        alert("Welcome to Aesthisia")
      }else{
        alert("Please Enter Email and Password")
      }
    }

  return (
    <Fragment>
      <div className="flex justify-center flex-wrap mt-3">
        <div className="flex m-[1%] bg-fixed bg-center bg-no-repeat w-full flex-col flex-wrap md:w-[48%]" >
          <img className="relative " src={bg} alt="backgroud" />
          <div className="flex  font-thin justify-start absolute text-6xl text-white">
            exo
          </div>

          <div className="flex flex-col ml-4  absolute mt-[15%] text-white">
            <h1 className=" font-[poppins] text-4xl text-[#FFFFFF] font-semibold">
              100% Uptime😎
            </h1>

            <div className="font-[poppins] text-[#BFBFBF] text-4xl tracking-wide">
              Zero Infrastructure
            </div>
            <div className=" flex justify-start font-[poppins] text-[#BFBFBF] text-4xl text-end">
              Management
            </div>
          </div>

          <div className="flex absolute top-[80%] w-[48%] items-end  text-[#ffffff] justify-between">
  <div className="flex items-center">
    <img className="w-5 flex-shrink-0" src={global} alt="global" />
    <span className="ml-1">aesthia.com</span>
  </div>
  <div className="flex">
    <img className="w-3 mx-2 flex-shrink-0" src={fb} alt="fb" />
    <img className="w-5 mx-2 flex-shrink-0" src={Insta} alt="insta" />
    <img className="w-5 mx-2 flex-shrink-0" src={linkedIn} alt="linkedIn" />
  </div>
</div>

        </div>

        <div className="flex   w-full md:w-[48%] m-[1%] flex-wrap   flex-col">
          <div className="flex justify-center  pt-6 flex-wrap">
            <img className="w-[61px] h-[49px]" src={petals} alt="logo"></img>
          </div>
          <div className="text-center font-[poppins] capitalize  font-medium text-4xl ">
            Welcome <span className="text-[#08A593]"> Back!</span>{" "}
          </div>
          <p className=" text-center font-[inter] font-normal text-xs text-[#667085]">
            Glad to see you, Again!
          </p>
        <form>
          <input name="email" onChange={handleChange} value={inputData.email}
            type="email"
            className="m-3  md:ml-[20%] md:m-6 pl-2 border box-border  backdrop-opacity-5 border-[#464660] rounded-md w-[360px] h-[49px]"
            placeholder="Enter your email" required
          ></input>
          <input name="password" onChange={handleChange} value={inputData.password}
            type="password"
            className="md:ml-[20%] md:m-5  m-3 pl-2 border box-border backdrop-opacity-5 rounded-md border-[#464660] w-[360px] h-[49px]"
            placeholder="Enter your password"
          required></input>
          <img className=" relative top-[-19%] ml-[68%] " src={vector} alt="vector"></img>
          <p className="cursor-pointer relative flex justify-end mr-[27%] top-[-4%] text-[#667085]">
            forgot Password?
          </p>
          <div className="">
            <button onClick={handleSubmit} type="submit"
              style={{
                filter: "drop-shadow(0px 20px 32px rgba(2, 1, 0, 0.42))",
              }}
              className="bg-[#020100] text-[#ffffff] md:ml-[20%] rounded-md border-[#464660]  w-[360px] h-[49px] drop-shadow-[0px_20px_32px_rgba(2, 1, 0, 0.42)]"
            >
              Log In
            </button>
           
          </div>
          </form>
          <p className="text-center md:font-[inter] font-normal  md:text-s text-[#667085] md:mt-8">
            Don’t have an account yet?{" "}
            <span className="text-[#08A593] cursor-pointer"> Sign Up</span>
          </p>
        </div>
      </div>
    </Fragment>
  );
}

export default Login;

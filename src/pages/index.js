import Head from 'next/head'
import {useState, useEffect, useRef} from 'react'
import {FaPlus} from 'react-icons/fa'

export default function Home() {
    const fileInput=useRef(null)
    // fileInput.click()
    const [clickFile, setClickFile]=useState(true)
    const [text, setText]= useState('My Name is Ogbonna Victor and I am a Full Stack Developer')
    const [styleVal, setStyleVal]= useState(null)
    const [imgScr, SetimgScr]= useState('')
    const changeImgScr=(selectorFiles)=>{
        if(selectorFiles){
            SetimgScr(selectorFiles[0])
        }
    }
    const options=['style 1', 'style 2']
    useEffect(()=>{
        console.log(fileInput.current)
        fileInput.current.click()
    }, [clickFile])
    return (
        <main className='d-flex flex-column main' style={{paddingBottom:'10px',justifyContent:'center', overflowX:'hidden', gap:'30px', background:'black', height:'100vh'}}>
            <style>{`
                @keyframes rotateT {
                    0% { transform: rotate(360deg);}
                    100% { transform: rotate(0deg); }
                }
                 @keyframes colorT {
                    0% 40% 90% { color:white;}
                    100% { color: red; }
                 }    
            `}</style>
            <div className='px-4 my-2 text-center flex-grow-1' style={{paddingTop:'20px'}}>
                <h1 className='display-5 fw-bold'>Text animation and Curved Text</h1>
            </div>
            <div className='output' style={{margin:'0 auto', display:'flex',justifyContent:'center', position:'relative',borderRadius:'50%', alignItems:'center',border:'2px solid red', width:'300px',height:'300px'}}>
                <div className='text' style={{position:'absolute', height:'100%', width:'100%', animation:'rotateT 10s linear infinite'}}>
                    {text.split('').map((letter, index)=>(
                        <span key={index} style={{transform:`rotate(${(index)*6}deg)`, fontSize:'1.5em', transformOrigin:'0 150px',position:'absolute', left:'50%', animation:`colorT 2s ease-in-out ${index*0.1}s infinite`}}>{letter}</span>
                    ))}
                </div>
                <img src={imgScr?URL.createObjectURL(imgScr): 'images/mypic.jpg'} alt="" height="250px" width="250px" style={{borderRadius:'50%', left:'0', top:'0', filter:'brightness(1.5) contrast(1.5)', animation:'appear 2s linear forwards'}}/>
            </div>
            <div className='filter' style={{columnGap:'50px', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                <div className='textinp'>
                    <p className='lead mx-2' style={{color:'white'}}>Enter text here</p>
                    <input type="text" placeholder='Enter text' value={text} onChange={e=>setText(e.target.value)} style={{fontSize:'15px',border:'2px solid white',width:'500px', borderRadius:'20px', padding:'10px 20px', background:'transparent', color:'red'}}/>
                    {/* <button className='btn btn-primary p-2 px-4' style={{fontSize:'18px'}}>Show effect</button> */}
                </div>
                <div className='imginp '>
                    <p className='lead' style={{color:'white', marginTop:'20px'}}>Click to Change Image</p>
                    <div className='p-4 bg-warning' style={{width:'150px', display:'flex', justifyContent:'center'}} onClick={()=>setClickFile(!clickFile)}>
                        <FaPlus size={34}/>
                    </div>
                    <input type="file" ref={fileInput} className='d-none' onChange={(e)=>changeImgScr(e.target.files)}/>
                </div>
            </div>
        </main>
    )
}

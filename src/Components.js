import DOT from './img/Dot.png'
import ONE from './img/Search.png'
import TWO from './img/Search1.png'
function Icons(props){
    const text = props.Text
    const img = props.img
    // const {text} = props
    return(
       <div style={{float:'right'}}>{text}
       <img style={{width:'30px'}} src={img}/>
       </div> 
    )
}
function Icon(){
    const ln = "/Users/gayathriswami/gsearch/src/img/Dot.png"
    return(
        <div style={{display:'flex', flexDirection:'row',float:'right', marginTop:'-220px', color:'#FFFFFF', fontSize:'13px', alignItems:'center', fontFamily:'arial, sansserif'}}>
            <span style={{marginLeft:'20px'}}>Gmail</span>
            <button style={{width:'10px', height:'40px', backgroundColor:'#202124', border:'0'}}></button>
            <span>Images</span>
            <button style={{width:'10px', height:'40px', backgroundColor:'#202124', border:'0'}}></button>
            <span><img style ={{width:'30px'}} src={DOT}/></span>
            <button style={{width:'10px', height:'40px', backgroundColor:'#202124', border:'0'}}></button>
            <span style={{width:'30px',height:'30px', backgroundColor:'#fa5914', borderRadius:'50%'}}></span>
            <span style ={{marginLeft:'-22px', fontSize:'18px', backgroundColor:'#fa5914'}}>A</span>
            <button style={{width:'20px', height:'40px', backgroundColor:"transparent", border:'0'}}></button>
        </div>
    )
}

function Google(){
    return(
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', alignSelf:'center', alignContent:'center', marginTop:'250px'}}>
       <span style = {{fontSize:'80px', color:'white' }}>Google</span><br></br>

       <div style={{width:'600px',height:'45px', border:'0.7px solid #838487', borderRadius:'30px', display:'flex', flexDirection: 'row'}}>
        <span><img style={{width:'30px', marginLeft:'10px', marginTop:'10px'}} src={ONE}/></span>
        <button style={{width:'520px', height:'40px', backgroundColor:"transparent", border:'0'}}></button>
        <span><img style={{width:'70px',  marginLeft:'-40px', marginTop:'5px'}} src={TWO}/></span>
        
        </div>
        <br></br>
       <div>
        <button style ={{backgroundColor:'#303134', border:'0', width:'130px',height:'40px', margin:'11px, 4px', padding:'0px 16px', color:'white', borderRadius:'2px'}}>Google Search</button> 
        <button style={{width:'10px', height:'40px', backgroundColor:'#202124', border:'0'}}></button>
       <button style ={{backgroundColor:'#303134', border:'0', width:'150px',height:'40px', margin:'11px, 4px', padding:'0px 16px', color:'white', borderRadius:'2px'}}>I'm Feeling Lucky</button>
       </div><br></br>
       <p><span style={{color:'#BDC1C6', fontSize:'13px'}}>Google Offered in:</span><span style={{color:'#8AB4F8', fontSize:'13px'}}>
        <span style={{marginLeft:'10px'}}>हिन्दी  </span>   
        <span style={{marginLeft:'10px'}}>বাংলা  </span>
        <span style={{marginLeft:'10px'}}>తెలుగు  </span>
        <span style={{marginLeft:'10px'}}>தமிழ் </span>
        <span style={{marginLeft:'10px'}}>ગુજરાતી </span>
        <span style={{marginLeft:'10px'}}> ಕನ್ನಡ  </span>
        <span style={{marginLeft:'10px'}}> മലയാളം   </span>
        <span style={{marginLeft:'10px'}}>  ਪੰਜਾਬੀ   </span>
        </span></p>

       </div>
    )
}

function Bnav(){
   return( 
   <div style={{display:'flex', justifyContent:'center',  flexDirection:'column',  backgroundColor:'#19191a', color:'E8EAED', fontSize:'14px', marginTop:'160px', padding:'0',marginLeft:'-10px', width:'102%', fontFamily:'arial, sansserif'}}>
        <div style={{ padding:'15px 30px', width:'102%', backgroundcolor:'white',color:'#E8EAED'}}><span style={{padding:'1px', paddingTop:'3rem', marginTop:'70px'}}>India</span></div>
        <div style={{color:'#E8EAED', width:'101%', paddingLeft:'1px', height:'65px'}}>
            <hr style={{width:'101%', color:'#838487', marginLeft:'-60px', marginTop:'5px',  border:'0.3px solid #5a5a5c'}}></hr>
            <span style={{marginTop:'-90px'}}>
            <span style={{color:'#E8EAED',  paddingLeft:'1.5rem', marginTop:'30px'}}>About</span>
            <span style={{color:'white' , paddingLeft:'1.5rem'}}>Advertising</span>
            <span style={{ paddingLeft:'1.5rem'}}>Buisness</span>
            <span style ={{ paddingLeft:'1.5rem'}}>How Search Works</span>
            <button style={{width:'800px', height:'0px', border:'0px', backgroundColor:'#19191a'}}></button>
            
            <span style={{ paddingLeft:'1.5rem'}}>Privacy</span>
            <span style={{ paddingLeft:'1.5rem'}}>Terms</span>
            <span style={{ paddingLeft:'1.5rem'}}>Settings</span>
        
        </span>
        
        </div>
    </div>)
}

export {Icons, Google, Bnav, Icon}
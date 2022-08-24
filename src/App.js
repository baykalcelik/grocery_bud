import { useRef, useState } from 'react';
import './App.css';
import GroceryItem from './GroceryItem';




function App() {

  const [mesaj, setMesaj] = useState({});
  const [mesajgoster, setMesajgoster] = useState(false);

  // let ornek = {yazi:"Please Enter Value", tbnrenk:"rgba(255,0,0,0.15)"}
  // let ornek3 = {yazi:"Item Removed", tbnrenk:"rgba(255,0,0,0.15)"}
  // let ornek2 = {yazi:"Empty List", tbnrenk:"rgba(255,0,0,0.15)"}

  // let ornek4 = {yazi:"Item Added To The List", tbnrenk:"rgba(0,255,0,0.15)"}
  // let ornek5 = {yazi:"Value Changed", tbnrenk:"rgba(0,255,0,0.15)"}



  const [degisecek, setDegisecek] = useState("");
  const [inputveri, setInputveri] = useState("");

  const [veri, setVeri] = useState(["Yoghourt", "Apple", "Pizza"]);
  const itementry = useRef();
  const [changeText, setChangeText] = useState(false);

  return (
    <div className="App">
      <div className='panel'>

        {mesajgoster ? <p className='warning_panel' style={{backgroundColor:mesaj.tbnrenk}}>{mesaj.yazi}</p> : ""}
        <p className='header'>Grocery Bud</p>
        <div className='inputs'>
          <input className='giris' 
          type="text" 
          placeholder="e.g. eggs" 
          ref={itementry} 
          value={inputveri}
          onChange={(e)=>{setInputveri(e.target.value);}}
          />

          <button className='submit' onClick={()=>{
            if(changeText){
              veri[veri.indexOf(degisecek)] = itementry.current.value;
              setVeri([...veri]);
              setChangeText(false);
              itementry.current.value = "";
              setDegisecek("");
              setInputveri("");
              setMesaj({yazi:"Value Changed", tbnrenk:"rgba(0,255,0,0.15)"});
              setMesajgoster(true);
              setTimeout(()=>{
                  setMesaj({});
                  setMesajgoster(false);
              }, 1000);

            }else{
              if(itementry.current.value.length > 1 ){
                  setVeri([...veri, itementry.current.value]);
                  itementry.current.value = "";
                  setInputveri("");

              setMesaj({yazi:"Item Added To The List", tbnrenk:"rgba(0,255,0,0.15)"});
              setMesajgoster(true);
              setTimeout(()=>{
                setMesaj({});
                setMesajgoster(false);
              }, 1000);
                  
              }else{
                setMesaj({yazi:"Please Enter Value", tbnrenk:"rgba(255,0,0,0.15)"});
                setMesajgoster(true);
                setTimeout(()=>{
                  setMesaj({});
                  setMesajgoster(false);
                }, 1000);

              }

            }

          }}>{changeText ? "Edit" : "Submit"}</button>


        </div>

        <div className='groList'>
          {veri.map((item, index)=>{
            return <GroceryItem key={index} name={item} veri={veri} setVeri={setVeri}  setChangeText={setChangeText}  setDegisecek={setDegisecek} setInputveri={setInputveri} setMesajgoster={setMesajgoster}  setMesaj={setMesaj}/>
          })}
        
        </div>
        <button className='clearAll' onClick={(()=>{
          setVeri([]);
          setChangeText(false);
          itementry.current.value = "";
          setDegisecek("");
          setInputveri("");

          setMesaj({yazi:"Empty List", tbnrenk:"rgba(255,0,0,0.15)"});
          setMesajgoster(true);
          setTimeout(()=>{
            setMesaj({});
            setMesajgoster(false);
          }, 1000);
        })}>Clear Items</button>


      </div>
    </div>
  );
}

export default App;

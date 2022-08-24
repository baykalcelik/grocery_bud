
import './groceryitem.css';
import {FaTrash} from 'react-icons/fa';
import {FaEdit} from 'react-icons/fa';


export default function GroceryItem(props){


    return(
        <div className='groItem'>
            <p className='itemName'>{props.name}</p>
            <div className='groItemBtns'>
                <FaEdit className='editle' onClick={()=>{
                    console.log("edit içinde bulunan sıra : ", props.veri.indexOf(props.name));
                    props.setChangeText(true);
                    props.setDegisecek(props.name);
                    props.setInputveri(props.name);
                }} />

                <FaTrash className='copeat'  onClick={()=>{
                    props.veri.splice(props.veri.indexOf(props.name), 1)
                    console.log(props.veri);
                    props.setVeri([...props.veri]);

                    props.setMesaj({yazi:"Item Removed", tbnrenk:"rgba(255,0,0,0.15)"});
                    props.setMesajgoster(true);
                    setTimeout(()=>{
                        props.setMesaj({});
                        props.setMesajgoster(false);
                    }, 1000);
                }}/>
            </div>
        </div>
    )
}
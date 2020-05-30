import React from 'react';
const AllEmojis = [
"👦🏽","👦🏾","👦🏿","👧","👧🏻","👧🏼","👧🏽","👧🏾","👧🏿","👨","👨🏻","👨🏼","👨🏽","👨🏾","👨🏿","👩","👩🏻","👩🏼","👩🏽","👩🏾","👩🏿","👪","👨‍👩‍👧","👨‍👩‍👧‍👦",
"😀","😁","😂","😃","😄","😅","😆","😇","😈","👿","😉","😊",
"☺️","😋","😌","😍","😎","😏","😐","😑","😒","😓","😔","😕","😖","😗","😘","😙","😚","😛","😜","😝",
    "😞","😟","😠","😡","😢","😣","😤","😥","😦","😧","😨","😩","😪","😫","😬","😭","😮","😯","😰","😱","😲","😳","😴",
    "😵","😶","😷","😸","😹","😺","😻","😼","😽","😾","😿","🙀","👣","👤","👥","👶","👶🏻","👶🏼","👶🏽","👶🏾","👶🏿","👦","👦🏻","👦🏼",
]
class AllEmoji extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <span style={{overflowY:'auto',width:'30%',height:'5vh'}}>
                {AllEmojis.map((value,index)=>
                  <span style={{fontSize:'150%'}}>{value}</span>
                )}
            </span>
        )
    }
}
export {AllEmoji};
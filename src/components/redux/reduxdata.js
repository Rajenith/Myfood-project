import { createSlice, current } from "@reduxjs/toolkit";
import React from "react";
// import Single from "../datas/single/single";
// import { useLocation } from "react-router-dom";
export const counterSlice=createSlice({
    name:'rate',
    initialState:{
        cartvalue:[],
        // singleview:[],
        cartAmount:0,

    },
    reducers:{
        increment:(state,e)=>{
            let newFind=[...current(state.cartvalue)];
            let Index=newFind.findIndex((item)=>item.id===e.payload.id);
            state.cartvalue[Index].cartquantity += 1;
            
            state.cartAmount=state.cartvalue.reduce((total,item)=>{
                return total + Number(item.price) *  Number(item.cartquantity);
            }, 0);

        },
        decrement:(state,e)=>{
            let newFind=[...current(state.cartvalue)];
            let Index=newFind.findIndex((item)=>item.id===e.payload.id);
            state.cartvalue[Index].cartquantity -= 1;
            
            state.cartAmount=state.cartvalue.reduce((total,item)=>{
                return total + Number(item.price) *  Number(item.cartquantity);
            }, 0);
            if(state.cartvalue < 0){
                return (state.cartAmount = 0);
            }
            if(state.cartAmount < 0){
                return (state.cartAmount = 0);
            }
            
        }, 
        addtoCart:(state,e)=>{
            const newFind= state.cartvalue.findIndex(
                (item)=>item.id === e.payload.id
            );
            if(newFind){
                const cartItem={...e.payload,cartquantity: 1};
                state.cartvalue.push(cartItem);
            }
            if(newFind >= 0){
                state.cartvalue.cartquantity += 1;
            }
        },
        handleRemove:(state,e)=>{
            const exitItem=state.cartvalue.find((item)=>item.id===e.payload.id)
            if(exitItem){
                state.cartvalue= state.cartvalue.filter((item)=>item.id !== e.payload.id)
                state.cartAmount = 0;
            }
            },
        // singledish:(state,actions)=>{
        //     const singleitem={...actions.payload}
        //     state.singleview.push(singleitem)
        //     // let location=useLocation();
        //     // React.useEffect((id)=>{
        //     //     id.send(["pageview",location.pathname('/single')]);
        //     // },[location])

        // }
        
    }
})
export const{increment,addtoCart,singledish,decrement,handleRemove}=counterSlice.actions;
export const selectCount=(state)=>state.rate.cartquantity;
export const select=(state)=>state.rate.cartvalue;
// export const single=(state)=>state.rate.singleview;
export const Totalcart=(state)=>state.rate.cartAmount;
export default counterSlice.reducer
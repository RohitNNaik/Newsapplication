const intialstate ={id:'',
mostpopular=[],
cardsData:[]
}
  function customReducerState (intialstate,action){
      switch(action.type){
          case 'Id':
          return{
            ...intialstate,
            id:newId
          }
          case 'Most_popular':
          return{...state,
        mostpopular:[...mostpopular,
        action.payload]
    }
    case 'Card_Data':
    return{...state,
        cardData:[...cardsData,action.payload]
    }
    default:return state
      }
     
  }
  
  export default intialstate
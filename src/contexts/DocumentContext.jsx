// import  { createContext, useContext, useState } from 'react'
// import { docTypes } from '../utils/constants'

// const DocumentContext = createContext()
// export const DocumentProvider = (props) => {
//     const [docs, setDocs] = useState(docTypes.map((each)=>({[each]:""})))

//   return (
//     // eslint-disable-next-line react/prop-types
//     <DocumentContext.Provider value={{docs,setDocs}}>{props.children}</DocumentContext.Provider>
//   )
// }

// export const useDocs = ()=>useContext(DocumentContext)

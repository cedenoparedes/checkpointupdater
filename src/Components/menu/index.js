import React, { useContext, useEffect, useState } from 'react';
import MenuForm from './MenuForm';
import GlobalContext from "../../context/globalcontext"

const Index = () => {
    const [, , contextMiddleware] = useContext(GlobalContext)
    const [userInfo, setuserInfo] = useState("")
    let token = contextMiddleware.getTokenClaims();


    useEffect(() => {

        return () => {
            setuserInfo(token)
        }
    }, [])


    console.log(userInfo)
    return (<MenuForm userInfo={userInfo} />)
}

export default Index;
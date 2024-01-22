'use client'

export const getTextIcon = (current,pathname)=>{
    const currentStyleText = "text-yellow-400"
    const currentStyleIcon = "text-white"
    const defaultStyleText = "text-white"
    const defaultStyleIcon = "text-yellow-400"

    let icon,text

    if(current === pathname){
        text = currentStyleText
        icon = currentStyleIcon
    }
    else{
        text = defaultStyleText
        icon = defaultStyleIcon
    }
    
    return {
        icon,
        text
    }

}



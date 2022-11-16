import React, {useEffect, useState} from 'react'

const Animal = ({name, width, fontColor}) => {
    const [color, setColor] = useState()

    useEffect(() => {
        console.log('Composant instancié !')
        if(name === 'Girafe') {
            setColor('orange')
        }
    }, [])

  return (
    <div style={{background: color, width: width, color: fontColor}}>{name}</div>
  )
}

export default Animal